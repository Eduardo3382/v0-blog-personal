export type Photo = {
    id: number;
    src: string;
    alt: string;
    caption: string;
    note?: string;
    date: string;
};

export const photos: Photo[] = [
    {
        id: 1,
        src: "/photos/Farol_de_buenosaires.jpg",
        alt: "Farol de Buenos Aires",
        caption: "Farol histórico en una caminata por Buenos Aires",
        date: "2024-05-15",
    },
    {
        id: 2,
        src: "/photos/La_biblia_y_el_calefon.png",
        alt: "La biblia y el calefón",
        caption: "Impactante respiradero del 900 con cámaras de seguridad actuales",
        note: "Lo viejo, lo nuevo, y el caos de cable, me recordó la estrofa la biblia y el calefón.",
        date: "2024-06-10",
    },
    {
        id: 3,
        src: "/photos/IMG_5706.jpeg",
        alt: "Momento capturado",
        caption: "Escenas de la vida diaria",
        date: "2024-07-20",
    },
    {
        id: 4,
        src: "/photos/IMG_7499.JPEG",
        alt: "Taller o evento",
        caption: "Taller de tecnología y creatividad",
        date: "2024-08-05",
    },
    {
        id: 5,
        src: "/photos/IMG_7500.JPEG",
        alt: "Escena nocturna",
        caption: "Reflejos en la ciudad",
        date: "2024-09-12",
    },
];
