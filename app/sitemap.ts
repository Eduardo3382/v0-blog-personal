import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllWorkshops } from '@/lib/workshops'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://eduardo.net.ar'

    // Página principal
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
    ]

    // Posts del blog
    const posts = getAllPosts()
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Workshops
    const workshops = getAllWorkshops()
    const workshopRoutes = workshops.map((workshop) => ({
        url: `${baseUrl}/workshops/${workshop.slug}`,
        lastModified: new Date(workshop.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...blogRoutes, ...workshopRoutes]
}
