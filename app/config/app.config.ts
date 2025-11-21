/**
 * Configurações globais da aplicação
 */

export const APP_NAME = 'Neofluxx Sistema de Cadastro'
export const APP_SHORT_NAME = 'Neofluxx'
export const APP_DESCRIPTION = 'Sistema de cadastro moderno e eficiente'

/**
 * Constantes de contato
 */
export const CONTACT = {
  EMAIL: 'contato@neofluxx.com',
  PHONE: '(11) 9999-9999'
} as const

/**
 * URLs e links
 */
export const SOCIAL_LINKS = {
  FACEBOOK: '#',
  TWITTER: '#',
  LINKEDIN: '#'
} as const

/**
 * Configurações de validação
 */
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
} as const
