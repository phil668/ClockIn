import { StyleProvider, Themes } from '@varlet/ui'
import { useDark, useMediaQuery, useToggle } from '@vueuse/core'
import { onMounted } from 'vue'

function useDarkMode() {
  const isDark = useDark()
  const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
  const toggleDark = useToggle(isDark)

  onMounted(() => {
    isDark.value = isPreferredDark.value
    StyleProvider(isDark.value ? Themes.dark : null)
  })

  // 切换varlet的主题
  function toggleTheme() {
    toggleDark()
    StyleProvider(isDark.value ? Themes.dark : null)
  }

  return { toggleTheme, isDark }
}

export { useDarkMode }
