import { ref } from 'vue'
import type { LoginForm, SignupForm, User } from '~/types/Auth'

// Mapeamento de mensagens de erro do Supabase para português
const errorMessages: Record<string, string> = {
  'Invalid login credentials': 'Email ou senha incorretos',
  'Email not confirmed': 'Email não confirmado. Verifique sua caixa de entrada',
  'User already registered': 'Este email já está cadastrado',
  'Password should be at least 6 characters': 'A senha deve ter no mínimo 6 caracteres',
  'Unable to validate email address: invalid format': 'Formato de email inválido',
  'Signup requires a valid password': 'É necessário fornecer uma senha válida',
  'missing email or phone': 'Por favor, informe o email',
  'User not found': 'Usuário não encontrado',
  'Invalid email': 'Email inválido',
  'Email rate limit exceeded': 'Muitas tentativas. Aguarde alguns minutos',
  'Password is too weak': 'Senha muito fraca. Use uma senha mais forte'
}

const translateError = (errorMessage: string): string => {
  return errorMessages[errorMessage] || errorMessage
}

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const router = useRouter()
  
  const loginForm = ref<LoginForm>({
    email: '',
    password: ''
  })

  const signupForm = ref<SignupForm>({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const currentUser = useState<User | null>('currentUser', () => null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const login = async () => {
    isLoading.value = true
    error.value = null

    try {
      const { data, error: loginError } = await $supabase.auth.signInWithPassword({
        email: loginForm.value.email,
        password: loginForm.value.password
      })

      if (loginError) {
        throw new Error(translateError(loginError.message))
      }

      if (data.user) {
        currentUser.value = {
          id: data.user.id,
          email: data.user.email || '',
          name: data.user.user_metadata?.name || ''
        }
        
        // Redirecionar para dashboard ou página principal após login
        await router.push('/')
      }
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

  const logout = async () => {
    isLoading.value = true
    error.value = null

    try {
      const { error: logoutError } = await $supabase.auth.signOut()
      
      if (logoutError) {
        throw new Error(translateError(logoutError.message))
      }

      currentUser.value = null
      loginForm.value = { email: '', password: '' }
      signupForm.value = { email: '', password: '', confirmPassword: '' }
      
      await router.push('/login')
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Erro ao fazer logout'
      throw err
    } finally {
      isLoading.value = false
    }
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
