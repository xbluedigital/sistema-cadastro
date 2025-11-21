<template>
  <div class="w-full max-w-md mx-auto">
    <div class="bg-surface rounded-lg border border-border shadow-xl">
      <!-- Tabs -->
      <div class="flex border-b border-border">
        <button
          @click="activeTab = 'login'"
          :class="[
            'flex-1 py-4 px-6 font-semibold transition-all duration-300',
            activeTab === 'login'
              ? 'text-primary-500 border-b-2 border-primary-500 bg-surface-light'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
          ]"
        >
          Entrar
        </button>
        <button
          @click="activeTab = 'signup'"
          :class="[
            'flex-1 py-4 px-6 font-semibold transition-all duration-300',
            activeTab === 'signup'
              ? 'text-primary-500 border-b-2 border-primary-500 bg-surface-light'
              : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
          ]"
        >
          Criar Conta
        </button>
      </div>

      <!-- Tab Content -->
      <div class="p-8">
        <!-- Login Tab -->
        <div v-if="activeTab === 'login'" class="space-y-6">
          <h2 class="text-2xl font-bold text-text-primary mb-6">
            Bem-vindo de volta!
          </h2>
          
          <BaseInput
            v-model="loginForm.email"
            type="email"
            label="Email"
            placeholder="seu@email.com"
            required
          />
          
          <PasswordInput
            v-model="loginForm.password"
            label="Senha"
            placeholder="••••••••"
            required
          />
          
          <BaseButton
            variant="primary"
            size="lg"
            full-width
            @click="handleLogin"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Entrando...' : 'Entrar' }}
          </BaseButton>
          
          <p v-if="error" class="text-error text-sm text-center">
            {{ error }}
          </p>
        </div>

        <!-- Signup Tab -->
        <div v-if="activeTab === 'signup'" class="space-y-6">
          <h2 class="text-2xl font-bold text-text-primary mb-6">
            Crie sua conta
          </h2>
          
          <BaseInput
            v-model="signupForm.email"
            type="email"
            label="Email"
            placeholder="seu@email.com"
            required
          />
          
          <PasswordInput
            v-model="signupForm.password"
            label="Senha"
            placeholder="••••••••"
            required
          />
          
          <PasswordInput
            v-model="signupForm.confirmPassword"
            label="Confirmar Senha"
            placeholder="••••••••"
            required
          />
          
          <BaseButton
            variant="primary"
            size="lg"
            full-width
            @click="handleSignup"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Criando...' : 'Criar Conta' }}
          </BaseButton>
          
          <p v-if="error" class="text-error text-sm text-center">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/components/ui/BaseInput.vue'
import PasswordInput from '~/components/ui/PasswordInput.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { useAuth } from '~/composables/useAuth'

const activeTab = ref<'login' | 'signup'>('login')

const { loginForm, signupForm, login, signup, isLoading, error } = useAuth()

const handleLogin = async () => {
  try {
    await login()
  } catch (err) {
    console.error('Erro no login:', err)
  }
}

const handleSignup = async () => {
  try {
    await signup()
  } catch (err) {
    console.error('Erro no cadastro:', err)
  }
}
</script>
