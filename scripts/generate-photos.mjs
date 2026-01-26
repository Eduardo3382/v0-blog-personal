import fs from 'fs';
import path from 'path';
import exifr from 'exifr';

const PHOTOS_DIR = './public/photos';
const OUTPUT_FILE = './lib/photos.ts';

async function generatePhotos() {
    console.log('📷 Generando lista de fotos con exifr (XMP DateCreated)...');

    try {
        const files = fs.readdirSync(PHOTOS_DIR)
            .filter(file => /\.(jpe?g|png|webp)$/i.test(file));

        const photoData = [];

        for (const [index, file] of files.entries()) {
            const filePath = path.join(PHOTOS_DIR, file);
            const fileNameNoExt = path.parse(file).name.replace(/_/g, ' ');

            let metadata = {};
            try {
                metadata = await exifr.parse(filePath, {
                    iptc: true,
                    xmp: true,
                    exif: true,
                }) || {};
            } catch (err) {
                console.warn(`⚠️ No se pudieron leer metadatos de ${file}: ${err.message}`);
            }

            const getText = (val) => {
                if (!val) return "";
                if (typeof val === 'string') return val;
                if (typeof val === 'object') return val.value || val[Object.keys(val)[0]] || "";
                return String(val);
            };

            // 1. Título
            const title = getText(metadata.ObjectName || metadata.Headline || metadata.title || metadata.Title) || fileNameNoExt;

            // 2. Descripción  
            const description = getText(metadata.ImageDescription || metadata.Caption || metadata.UserComment || metadata.description || metadata.Description);

            // 3. Fechas
            let date = "";
            let sortDate = "";

            if (metadata.CreateDate || metadata.DateTimeOriginal) {
                const d = new Date(metadata.CreateDate || metadata.DateTimeOriginal);
                date = d.toISOString().split('T')[0];
            } else {
                console.warn(`⚠️ Advertencia: ${file} no tiene fecha de captura.`);
            }

            // XMP DateCreated - exifr lo lee como "DateCreated" directamente
            if (metadata.DateCreated) {
                const sd = new Date(metadata.DateCreated);
                sortDate = sd.toISOString().split('T')[0];
            }

            // 4. Tags
            let tags = [];
            if (metadata.Keywords) {
                tags = Array.isArray(metadata.Keywords) ? metadata.Keywords : [metadata.Keywords];
            } else if (metadata.Subject) {
                tags = Array.isArray(metadata.Subject) ? metadata.Subject : [metadata.Subject];
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

        // Ordenar: Prioridad a sortDate, luego a date
        photoData.sort((a, b) => {
            const dateA = new Date(a.sortDate || a.date).getTime();
            const dateB = new Date(b.sortDate || b.date).getTime();
            return dateB - dateA;
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
