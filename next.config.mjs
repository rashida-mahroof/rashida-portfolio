/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
     
    "output": "export"  //if you are running in local host, comment this line
};

export default nextConfig;
