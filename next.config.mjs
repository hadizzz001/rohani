/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
          {
            source: '/',
            destination: '/en/index.html',
            permanent: true, // Use `true` for 301 redirects or `false` for 302
          },
        ];
      },
};

export default nextConfig;
