import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => [
    {
      destination: 'https://github.com/hendraaagil/gilbot-web',
      source: '/source',
      permanent: false,
    },
    {
      destination: 'https://t.me/gilchatbot',
      source: '/chat',
      permanent: false,
    },
    {
      destination: 'https://t.me/hendraaagil',
      source: '/support',
      permanent: false,
    },
  ],
}

export default withMDX(config)
