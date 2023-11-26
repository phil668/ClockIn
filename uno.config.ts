import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
  ],
  theme: {
    colors: {
      'body': 'var( --color-body)',
      'text': 'var( --color-text)',
      'primary': 'var( --color-primary)',
      'info': 'var( --color-info)',
      'success': 'var( --color-success)',
      'warning': 'var( --color-warning)',
      'danger': 'var( --color-danger)',
      'disabled': 'var( --color-disabled)',
      'text-disabled': 'var( --color-disabled)',
    },
  },
})
