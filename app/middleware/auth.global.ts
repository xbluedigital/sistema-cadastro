export default defineNuxtRouteMiddleware(async (to, from) => {
  // Executar apenas no lado do cliente
  if (process.server) return

  const nuxtApp = useNuxtApp()
  const currentUser = useState<any>('currentUser')

  // Verificar se o plugin está disponível
  if (!nuxtApp.$supabase) {
    console.warn('Supabase não está disponível ainda')
    return
  }

  // Verificar sessão no Supabase
  const { data: { session } } = await nuxtApp.$supabase.auth.getSession()

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = ['/login']
  const isPublicRoute = publicRoutes.includes(to.path)

  // Se o usuário está logado
  if (session?.user) {
    // Atualizar estado global do usuário
    if (!currentUser.value) {
      currentUser.value = {
        id: session.user.id,
        email: session.user.email || '',
        name: session.user.user_metadata?.name || ''
      }
    }

    // Se está tentando acessar a página de login, redirecionar para home
    if (to.path === '/login') {
      return navigateTo('/')
    }
  } else {
    // Usuário não está logado
    // Limpar estado do usuário
    currentUser.value = null

    // Se está tentando acessar uma rota protegida, redirecionar para login
    if (!isPublicRoute) {
      return navigateTo('/login')
    }
  }
})
