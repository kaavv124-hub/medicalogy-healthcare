import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://medicalogy-healthcare.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/services',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/internships',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/careers',
      lastModified: new Date(),
    },
    {
      url: 'https://medicalogy-healthcare.vercel.app/contact',
      lastModified: new Date(),
    },
  ]
}