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
        // Cores primárias - Laranja pastel (mantém identidade visual)
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
        // Cores secundárias - Roxo pastel
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a78bfa',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Cores de background - tons claros com contraste
        background: {
          DEFAULT: '#f8f9fa',    // Cinza muito claro (melhor que branco puro)
          dark: '#e9ecef',       // Cinza claro
          light: '#ffffff',      // Branco puro
          card: '#ffffff',       // Branco para cards (destaque)
        },
        // Cores de surface (superfícies elevadas)
        surface: {
          DEFAULT: '#ffffff',
          dark: '#f8f9fa',
          light: '#ffffff',
          hover: '#f1f3f5',
        },
        // Cores de texto - com contraste adequado
        text: {
          primary: '#212529',     // Quase preto (excelente contraste)
          secondary: '#495057',   // Cinza escuro (bom contraste)
          tertiary: '#6c757d',    // Cinza médio (contraste moderado)
          muted: '#adb5bd',       // Cinza claro (para hints)
          inverse: '#ffffff',     // Branco (para fundos escuros)
        },
        // Cor de destaque (accent) - Laranja pastel
        accent: {
          DEFAULT: '#fb923c',     // Laranja pastel
          light: '#fbbf24',       // Amarelo pastel
          dark: '#f97316',        // Laranja saturado
          hover: '#fdba74',       // Laranja claro hover
        },
        // Estados e feedback - cores vibrantes mas suaves
        success: '#10b981',      // Verde com bom contraste
        warning: '#f59e0b',      // Amarelo/laranja
        error: '#ef4444',        // Vermelho com bom contraste
        info: '#3b82f6',         // Azul com bom contraste
        // Borders - bordas visíveis mas suaves
        border: {
          DEFAULT: '#dee2e6',    // Cinza claro visível
          light: '#e9ecef',      // Cinza muito claro
          dark: '#ced4da',       // Cinza médio
          accent: '#fb923c',     // Laranja para destaques
        },
        // Cores temáticas pastéis (para cards coloridos)
        pastel: {
          pink: {
            DEFAULT: '#ffc9e5',
            light: '#ffe4f1',
            dark: '#ff9ed4',
            text: '#831843',     // Texto escuro para fundo rosa
          },
          purple: {
            DEFAULT: '#e4d4f4',
            light: '#f0e7f9',
            dark: '#d1b3f0',
            text: '#5b21b6',     // Texto escuro para fundo roxo
          },
          green: {
            DEFAULT: '#d4f4dd',
            light: '#e7f9ed',
            dark: '#b8efcc',
            text: '#14532d',     // Texto escuro para fundo verde
          },
          yellow: {
            DEFAULT: '#ffeab6',
            light: '#fff5d9',
            dark: '#ffd66b',
            text: '#78350f',     // Texto escuro para fundo amarelo
          },
          blue: {
            DEFAULT: '#d4e4f4',
            light: '#e7f1f9',
            dark: '#b3d4f0',
            text: '#1e3a8a',     // Texto escuro para fundo azul
          },
          peach: {
            DEFAULT: '#ffe4d4',
            light: '#fff1e7',
            dark: '#ffc9a8',
            text: '#7c2d12',     // Texto escuro para fundo pêssego
          },
        },
      },
      // Sombras personalizadas - mais pronunciadas para melhor hierarquia
      boxShadow: {
        'glow-orange': '0 0 20px rgba(251, 146, 60, 0.4)',
        'glow-orange-lg': '0 0 40px rgba(251, 146, 60, 0.5)',
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
      // Gradientes personalizados suaves
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #c084fc 0%, #a78bfa 100%)',
        'gradient-surface': 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        'gradient-pastel': 'linear-gradient(135deg, #ffe4f1 0%, #f0e7f9 50%, #e7f9ed 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
