import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import exifr from 'exifr';

const BLOG_DIR = './content/blog';
const WORKSHOPS_DIR = './content/workshops';
const PHOTOS_DIR = './public/photos';
const OUTPUT_FILE = './documentacion/DICCIONARIO_ETIQUETAS.md';

async function getTagsFromDir(dir, extension = '.md') {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter(f => f.endsWith(extension));
    let tags = new Set();

    for (const file of files) {
        const content = fs.readFileSync(path.join(dir, file), 'utf8');
        const { data } = matter(content);
        if (data.tags && Array.isArray(data.tags)) {
            data.tags.forEach(t => tags.add(t.toLowerCase().trim()));
        } else if (data.tags && typeof data.tags === 'string') {
            tags.add(data.tags.toLowerCase().trim());
        }
    }
    return Array.from(tags);
}

async function getTagsFromPhotos() {
    if (!fs.existsSync(PHOTOS_DIR)) return [];
    const files = fs.readdirSync(PHOTOS_DIR).filter(file => /\.(jpe?g|png|webp)$/i.test(file));
    let tags = new Set();

    for (const file of files) {
        try {
            const metadata = await exifr.parse(path.join(PHOTOS_DIR, file), { iptc: true, xmp: true }) || {};
            const photoTags = metadata.Keywords || metadata.Subject || [];
            const tagArray = Array.isArray(photoTags) ? photoTags : [photoTags];
            tagArray.forEach(t => {
                if (typeof t === 'string') tags.add(t.toLowerCase().trim());
            });
        } catch (e) {
            // Ignorar errores de lectura en fotos individuales
        }
    }
    return Array.from(tags);
}

async function main() {
    console.log('🔍 Escaneando etiquetas...');

    const blogTags = await getTagsFromDir(BLOG_DIR);
    const workshopTags = await getTagsFromDir(WORKSHOPS_DIR);
    const photoTags = await getTagsFromPhotos();

    const allTags = new Set([...blogTags, ...workshopTags, ...photoTags]);
    const sortedTags = Array.from(allTags).sort();

    const timestamp = new Date().toLocaleString('es-ES');

    let content = `# Diccionario de Etiquetas\n`;
    content += `Última actualización: ${timestamp}\n\n`;
    content += `Esta es una lista automática de todas las etiquetas detectadas en el blog. Úsala como referencia para mantener la consistencia.\n\n`;

    if (sortedTags.length === 0) {
        content += `*No se detectaron etiquetas todavía.*\n`;
    } else {
        content += `| Etiqueta | Usada en |\n`;
        content += `| :--- | :--- |\n`;

        sortedTags.forEach(tag => {
            const sources = [];
            if (blogTags.includes(tag)) sources.push('Artículos');
            if (workshopTags.includes(tag)) sources.push('Workshops');
            if (photoTags.includes(tag)) sources.push('Fotos');
            content += `| **${tag}** | ${sources.join(', ')} |\n`;
        });
    }

    if (!fs.existsSync('./documentacion')) fs.mkdirSync('./documentacion');
    fs.writeFileSync(OUTPUT_FILE, content);

    console.log(`✅ Diccionario generado en ${OUTPUT_FILE}`);
    console.log(`Etiquetas totales encontradas: ${sortedTags.length}`);
}

main();
