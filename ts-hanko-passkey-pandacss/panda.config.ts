import type { Config } from '@pandacss/dev';

export default {
  preflight: true,
  include: ['./src/**/*.tsx'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
  strictTokens: true,
  strictPropertyValues: true,
} satisfies Config;
