/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "antd",
    "rc-util",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",

  ],
  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY
  },
};

export default nextConfig;
