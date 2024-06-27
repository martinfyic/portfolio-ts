/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codezen-blog.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "udemy-certificate.s3.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
