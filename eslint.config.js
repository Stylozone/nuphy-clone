import configs from '@phaicom/eslint-config'

export default
configs(
  {
    tailwind: true,
    nextjs: true,
    react: true,
    formatters: {
      html: true,
      css: true,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/app/globals.css',
      },
    },
    rules: {
      'next/no-html-link-for-pages': 'off',
    },
  },
  {
    files: ['**/ui/**/*.ts', '**/ui/**/*.tsx', '**/tools/theme-provider.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
)
