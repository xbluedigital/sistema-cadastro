import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias - Laranja
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Laranja principal
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Cores secundárias - Cinza/Preto
        secondary: {
          50: '#f8f8f8',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
        // Cores de background
        background: {
          DEFAULT: '#0f0f0f',    // Preto principal
          dark: '#000000',       // Preto puro
          light: '#1a1a1a',      // Preto mais claro
          card: '#171717',       // Para cards/painéis
        },
        // Cores de surface (superfícies elevadas)
        surface: {
          DEFAULT: '#1f1f1f',
          dark: '#171717',
          light: '#262626',
          hover: '#2a2a2a',
        },
        // Cores de texto
        text: {
          primary: '#ffffff',     // Branco principal
          secondary: '#a3a3a3',   // Cinza claro
          tertiary: '#737373',    // Cinza médio
          muted: '#525252',       // Cinza escuro
          inverse: '#0f0f0f',     // Preto (para texto em fundo laranja)
        },
        // Cor de destaque (accent)
        accent: {
          DEFAULT: '#f97316',     // Laranja
          light: '#fb923c',       // Laranja claro
          dark: '#ea580c',        // Laranja escuro
          hover: '#fb923c',       // Estado hover
        },
        // Estados e feedback
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Borders
        border: {
          DEFAULT: '#262626',
          light: '#333333',
          dark: '#1a1a1a',
          accent: '#f97316',
        },
      },
      // Sombras personalizadas
      boxShadow: {
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.5)',
        'glow-orange-lg': '0 0 40px rgba(249, 115, 22, 0.6)',
      },
      // Gradientes personalizados
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        'gradient-surface': 'linear-gradient(135deg, #171717 0%, #262626 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
