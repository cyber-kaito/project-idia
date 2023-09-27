/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "f005.backblazeb2.com",
            port: "",
            pathname: "/file/assets-idia-moe/",
         },
      ],
   },
};

module.exports = nextConfig;
