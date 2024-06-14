/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "codezen-blog.vercel.app",
      "res.cloudinary.com",
      "udemy-certificate.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
