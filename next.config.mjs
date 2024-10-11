/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/df2qckxtp/image/upload/**', // Asegúrate de que coincida con la ruta de tus imágenes
        },
      ],
    },
  };
  
  export default nextConfig;
  