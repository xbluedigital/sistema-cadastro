import { ref } from 'vue'
import type { CepForm, CepAddress, CepError } from '../types/Cep'
import { unformatCep } from '../utils/formatters/cepFormatter'
import { isValidCep } from '../utils/validators/cepValidator'

export const useCep = () => {
  const formData = ref<CepForm>({
    cep: ''
  })

  const addressData = ref<CepAddress | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Search for address information by CEP
   */
  const searchCep = async () => {
    // Reset previous results and errors
    addressData.value = null
    error.value = null

    // Validate CEP format
    if (!isValidCep(formData.value.cep)) {
      error.value = 'CEP inválido. Digite um CEP válido com 8 dígitos.'
      return
    }

    isLoading.value = true

    try {
      // Clean CEP (remove mask)
      const cleanedCep = unformatCep(formData.value.cep)
      const url = `https://viacep.com.br/ws/${cleanedCep}/json/`

      // Call ViaCEP API using fetch
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Erro ao buscar CEP')
      }

      const data = await response.json() as CepAddress | CepError

      // Check if CEP was not found
      if ('erro' in data && data.erro) {
        error.value = 'CEP não encontrado. Verifique o CEP digitado.'
        return
      }

      // Store address data
      addressData.value = data as CepAddress
    } catch (err) {
      console.error('Erro ao buscar CEP:', err)
      error.value = err instanceof Error 
        ? err.message 
        : 'Erro ao buscar CEP. Tente novamente.'
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Clear form and results
   */
  const clearForm = () => {
    formData.value.cep = ''
    addressData.value = null
    error.value = null
  }

  return {
    formData,
    addressData,
    isLoading,
    error,
    searchCep,
    clearForm
  }
}
