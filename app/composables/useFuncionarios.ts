import { ref } from 'vue'
import type { Funcionario } from '~/types/Funcionario'

export const useFuncionarios = () => {
  const { $supabase } = useNuxtApp()
  
  const funcionarios = ref<Funcionario[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const listaFuncionarios = async () => {
    isLoading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await $supabase
        .from('funcionarios')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) {
        throw new Error(fetchError.message)
      }

      funcionarios.value = data || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro ao buscar funcionários'
      console.error('Erro ao buscar funcionários:', err)
    } finally {
      isLoading.value = false
    }
  }

  const criarFuncionario = async (funcionario: Omit<Funcionario, 'id' | 'created_at'>) => {
    isLoading.value = true
    error.value = null

    try {
      const { data, error: insertError } = await $supabase
        .from('funcionarios')
        .insert([funcionario])
        .select()
        .single()

      if (insertError) {
        throw new Error(insertError.message)
      }

      return { success: true, data }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro ao criar funcionário'
      console.error('Erro ao criar funcionário:', err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  return {
    funcionarios,
    isLoading,
    error,
    listaFuncionarios,
    criarFuncionario
  }
}
