// uno.config.ts
import { defineConfig,presetWind } from 'unocss'
import { presetAttributify } from 'unocss'

export default defineConfig({
  // ...UnoCSS 选项
  presets: [presetWind(), presetAttributify()]
})