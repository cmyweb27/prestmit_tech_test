/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prestmit-tech-test.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/boldo_blue_logo.png",
      },
      {
        protocol: "https",
        hostname: "prestmit-tech-test.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/boldo_hero_img.png",
      },
      {
        protocol: "https",
        hostname: "prestmit-tech-test.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/Logo_prestmit_test.png",
      },
    ],
  },
};

module.exports = nextConfig;
