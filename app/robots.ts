import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.rajeevshrestha.info.np/sitemap.xml',
  }
}

export default robots
