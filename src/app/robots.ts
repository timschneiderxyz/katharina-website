/*  ========================================================================
    # Robots
    ========================================================================  */

import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: []
    },
    sitemap: 'https://katharina.xyz/sitemap.xml',
    host: 'https://katharina.xyz'
  };
};

export default robots;
