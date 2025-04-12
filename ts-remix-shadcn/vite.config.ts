import { vitePlugin as remix } from '@remix-run/dev';
import type { UserConfig } from 'vite';

export default {
  clearScreen: false,
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
} satisfies UserConfig;
