import fs from "fs";
import path from "path";
import matter from "gray-matter";

const workshopsDirectory = path.join(process.cwd(), "content/workshops");

export type Workshop = {
    slug: string;
    title: string;
    date: string;
    description: string;
    flyer: string;
    content: string;
};

export function getAllWorkshops(): Workshop[] {
    if (!fs.existsSync(workshopsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(workshopsDirectory);

    const workshops = fileNames.map((fileName) => {
        const fullPath = path.join(workshopsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        const slug = fileName.replace(".md", "");

        return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            flyer: data.flyer,
            content,
        };
    });

    return workshops.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getUpcomingWorkshop(): Workshop | null {
    const workshops = getAllWorkshops();
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Filter for future workshops or today's workshops
    const upcoming = workshops
        .filter((w) => new Date(w.date) >= now)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return upcoming.length > 0 ? upcoming[0] : null;
}

export function getPastWorkshops(): Workshop[] {
    const workshops = getAllWorkshops();
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    return workshops
        .filter((w) => new Date(w.date) < now)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
