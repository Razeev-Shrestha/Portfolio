import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'Rajeev Shrestha',
    short_name: 'Rajeev Shrestha',
    description: "Rajeev Shrestha's personal website",
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    display: 'standalone',
    orientation: 'portrait',
    start_url: '/',
    lang: 'en-US',
  }
}

export default manifest
