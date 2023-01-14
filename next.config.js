/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com", "res.cloudinary.com"],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localeDetection: true,
  },
};

module.exports = nextConfig;
