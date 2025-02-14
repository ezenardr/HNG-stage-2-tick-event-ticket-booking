/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bgzikggjygaxzweedpkr.supabase.co"
      },{
        protocol: "https",
        hostname: "barcode.tec-it.com"
      }
    ]
  }
};

export default nextConfig;
