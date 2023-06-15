/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      destination: 'https://github.com/hendraaagil/gilbot-web',
      source: '/source',
      permanent: false,
    },
    {
      destination: 'https://wa.me/6285163036290?text=Halo',
      source: '/chat',
      permanent: false,
    },
  ],
}

module.exports = nextConfig
