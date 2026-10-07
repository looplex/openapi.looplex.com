/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redoc descarta o worker de busca no unmount; o double-mount do StrictMode (dev)
  // deixava a store com o worker terminado e a busca sem resultados.
  reactStrictMode: false
};

export default nextConfig;
