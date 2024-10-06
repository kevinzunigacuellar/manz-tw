import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';
import transformerCompileClass from '@unocss/transformer-compile-class';
import presetWind from '@unocss/preset-wind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      presets: [presetWind()],
      transformers: [transformerCompileClass()],
    }),
  ],
});
