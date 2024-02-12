/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: [
          'www.notion.so',
          'images.unsplash.com',
          's3.us-west-2.amazonaws.com',
          'www.google.com',
          'www.helpx.adobe.com',
          'www.hoochootong.com'
      ],
      format: ['image/png', 'image/webp', 'image/jpeg']
  }
}

module.exports = nextConfig
