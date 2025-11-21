/**
 * Remove all non-digit characters from CEP
 */
export const unformatCep = (cep: string): string => {
  return cep.replace(/\D/g, '')
}

/**
 * Format CEP as #####-###
 */
export const formatCep = (cep: string): string => {
  const cleaned = unformatCep(cep)
  
  if (cleaned.length <= 5) {
    return cleaned
  }
  
  return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`
}

/**
 * Apply CEP mask to input value
 */
export const applyCepMask = (value: string): string => {
  const cleaned = unformatCep(value)
  
  // Limit to 8 digits
  const limited = cleaned.slice(0, 8)
  
  return formatCep(limited)
}
