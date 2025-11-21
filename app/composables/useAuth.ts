import { ref } from 'vue'
import type { LoginForm, SignupForm, User } from '~/types/Auth'

export const useAuth = () => {
  const loginForm = ref<LoginForm>({
    email: '',
    password: ''
  })

  const signupForm = ref<SignupForm>({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const currentUser = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const login = async () => {
    isLoading.value = true
    error.value = null

    try {
      // TODO: Implementar lógica de login com API
      console.log('Login com:', loginForm.value)
      
      // Simulação de resposta
      // const response = await $fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: loginForm.value
      // })
      
      // currentUser.value = response.user
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro ao fazer login'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const signup = async () => {
    isLoading.value = true
    error.value = null

    try {
      // Validação de senha
      if (signupForm.value.password !== signupForm.value.confirmPassword) {
        throw new Error('As senhas não conferem')
      }

      // TODO: Implementar lógica de cadastro com API
      console.log('Cadastro com:', signupForm.value)
      
      // Simulação de resposta
      // const response = await $fetch('/api/auth/signup', {
      //   method: 'POST',
      //   body: {
      //     email: signupForm.value.email,
      //     password: signupForm.value.password
      //   }
      // })
      
      // currentUser.value = response.user
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro ao criar conta'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    currentUser.value = null
    loginForm.value = { email: '', password: '' }
    signupForm.value = { email: '', password: '', confirmPassword: '' }
  }

  return {
    loginForm,
    signupForm,
    currentUser,
    isLoading,
    error,
    login,
    signup,
    logout
  }
}
