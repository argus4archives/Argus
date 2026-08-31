import type { NextConfig } from 'next';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { version } = createRequire(import.meta.url)('./package.json') as {
  version: string;
};
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: path.join(__dirname),
  basePath: process.env.NEXT_PUBLIC_APP_BASEPATH
    ? `${process.env.NEXT_PUBLIC_APP_BASEPATH}`
    : '',
  assetPrefix: process.env.NEXT_PUBLIC_APP_BASEPATH
    ? `${process.env.NEXT_PUBLIC_APP_BASEPATH}/`
    : '',
  env: {
    APP_VERSION: version,
  },
  trailingSlash: true,
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
