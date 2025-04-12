import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  cli: {
    entry: {
      patterns: ['src/**/*.tsx'],
      outFile: 'src/uno.css',
    },
  },
  theme: {
    colors: {
      'la-rioja': {
        '50': '#fafaeb',
        '100': '#f2f5d2',
        '200': '#e6ebab',
        '300': '#d1dc7a',
        '400': '#bccb50',
        '500': '#a6b834',
        '600': '#7c8c24',
        '700': '#5e6b20',
        '800': '#4c561e',
        '900': '#40491e',
        '950': '#22280b',
      },
    },
  },
});
