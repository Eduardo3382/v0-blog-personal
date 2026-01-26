import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PHOTOS_DIR = './public/photos';
const OUTPUT_FILE = './lib/photos.ts';

async function generatePhotos() {
    console.log('📷 Generando lista de fotos desde exiftool...');

    try {
        const files = fs.readdirSync(PHOTOS_DIR)
            .filter(file => /\.(jpe?g|png|webp)$/i.test(file));

        const photoData = [];

        for (const [index, file] of files.entries()) {
            const filePath = path.join(PHOTOS_DIR, file);

            let metadata = {};
            try {
                // Usamos exiftool directamente para máxima compatibilidad con el script de bash
                const output = execSync(`exiftool -j -s -ObjectName -Headline -Title -ImageDescription -Caption-Abstract -Description -DateTimeOriginal -CreateDate -DateCreated -Keywords -Subject "${filePath}"`).toString();
                metadata = JSON.parse(output)[0] || {};
            } catch (err) {
                console.warn(`⚠️ No se pudieron leer metadatos de ${file} usando exiftool: ${err.message}`);
                continue;
            }

            // 1. Título
            const title = metadata.ObjectName || metadata.Headline || metadata.Title || path.parse(file).name.replace(/_/g, ' ');

            // 2. Descripción
            const description = metadata.ImageDescription || metadata.CaptionAbstract || metadata.Description || "";

            // 3. Fechas
            const rawDate = metadata.DateTimeOriginal || metadata.CreateDate || "";
            const rawSortDate = metadata.DateCreated || "";

            const formatDate = (raw) => {
                if (!raw) return "";
                // Convertir YYYY:MM:DD ... a YYYY-MM-DD
                return raw.split(' ')[0].replace(/:/g, '-');
            };

            const date = formatDate(rawDate);
            const sortDate = formatDate(rawSortDate);

            if (!date) {
                console.warn(`⚠️ Advertencia: ${file} no tiene fecha de captura.`);
            }

            // 4. Tags
            let tags = [];
            const rawTags = metadata.Keywords || metadata.Subject || "";
            if (rawTags) {
                tags = Array.isArray(rawTags) ? rawTags : [rawTags];
            }

            photoData.push({
                id: index + 1,
                src: `/photos/${file}`,
                alt: title,
                caption: title,
                note: description,
                date: date,
                sortDate: sortDate,
                tags: tags
            });
        }

        // Ordenar: Prioridad a sortDate, luego a date.
        photoData.sort((a, b) => {
            const dateA = new Date(a.sortDate || a.date).getTime();
            const bDate = new Date(b.sortDate || b.date).getTime();
            return bDate - dateA;
        });

        // Reasignar IDs después de ordenar
        photoData.forEach((photo, i) => photo.id = i + 1);

        const content = `// ESTE ARCHIVO ES GENERADO AUTOMÁTICAMENTE. NO EDITAR MANUALMENTE.
// Corre 'npm run generate-photos' para actualizarlo.

export type Photo = {
    id: number;
    src: string;
    alt: string;
    caption: string;
    note?: string;
    date: string;
    sortDate?: string;
    tags?: string[];
};

export const photos: Photo[] = ${JSON.stringify(photoData, null, 4)};
`;

        fs.writeFileSync(OUTPUT_FILE, content);
        console.log(`✅ ¡Éxito! Se procesaron ${photoData.length} fotos y se actualizó ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('❌ Error fatal al generar fotos:', error);
        process.exit(1);
    }
}

generatePhotos();
