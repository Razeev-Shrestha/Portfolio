import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'www.rajeevshrestha.info.np',
      changeFrequency: 'daily',
      priority: 1.0,
      lastModified: new Date().toISOString(),
    },
  ]
}

export default sitemap
