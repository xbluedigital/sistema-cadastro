import { unformatCep } from '../formatters/cepFormatter'

/**
 * Validate if CEP has exactly 8 digits
 */
export const isValidCep = (cep: string): boolean => {
  const cleaned = unformatCep(cep)
  return cleaned.length === 8 && /^\d{8}$/.test(cleaned)
}

/**
 * Get CEP validation error message
 */
export const getCepErrorMessage = (cep: string): string | null => {
  if (!cep || cep.trim() === '') {
    return 'CEP é obrigatório'
  }
  
  const cleaned = unformatCep(cep)
  
  if (cleaned.length < 8) {
    return 'CEP deve conter 8 dígitos'
  }
  
  if (!isValidCep(cep)) {
    return 'CEP inválido'
  }
  
  return null
}
