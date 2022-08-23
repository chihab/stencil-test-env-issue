import { Config } from '@stencil/core';

export const config: Config = {
  testing: {
    testEnvironment: '@happy-dom/jest-environment',
  },
  namespace: 'sample',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
