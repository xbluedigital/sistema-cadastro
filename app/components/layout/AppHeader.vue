<template>
  <header class="bg-surface border-b border-border sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div class="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span class="text-text-inverse font-bold text-xl">S</span>
            </div>
            <span class="text-text-primary font-bold text-xl">Sistema de Cadastro</span>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="text-text-secondary hover:text-primary-500 transition-colors duration-200"
          >
            Início
          </NuxtLink>
          <NuxtLink
            to="/novocadastro"
            class="text-text-secondary hover:text-primary-500 transition-colors duration-200"
          >
            Novo Cadastro
          </NuxtLink>
          
          <!-- User Menu -->
          <div v-if="currentUser" class="flex items-center space-x-4">
            <span class="text-text-primary text-sm">
              Olá, <span class="font-semibold">{{ currentUser.email }}</span>
            </span>
            <button
              @click="handleLogout"
              class="text-text-secondary hover:text-error transition-colors duration-200 text-sm font-medium"
            >
              Sair
            </button>
          </div>
          <NuxtLink
            v-else
            to="/login"
            class="text-text-secondary hover:text-primary-500 transition-colors duration-200"
          >
            Entrar
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-text-primary hover:text-primary-500 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-border bg-surface-dark"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          to="/"
          class="block px-3 py-2 rounded-md text-text-secondary hover:text-primary-500 hover:bg-surface-hover transition-colors"
          @click="closeMobileMenu"
        >
          Início
        </NuxtLink>
        <NuxtLink
          to="/novocadastro"
          class="block px-3 py-2 rounded-md text-text-secondary hover:text-primary-500 hover:bg-surface-hover transition-colors"
          @click="closeMobileMenu"
        >
          Novo Cadastro
        </NuxtLink>
        
        <!-- User Menu Mobile -->
        <div v-if="currentUser" class="border-t border-border pt-2 mt-2">
          <div class="px-3 py-2 text-text-primary text-sm">
            Olá, <span class="font-semibold">{{ currentUser.email }}</span>
          </div>
          <button
            @click="handleLogout"
            class="w-full text-left px-3 py-2 rounded-md text-text-secondary hover:text-error hover:bg-surface-hover transition-colors"
          >
            Sair
          </button>
        </div>
        <NuxtLink
          v-else
          to="/login"
          class="block px-3 py-2 rounded-md text-text-secondary hover:text-primary-500 hover:bg-surface-hover transition-colors"
          @click="closeMobileMenu"
        >
          Entrar
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const isMobileMenuOpen = ref(false)
const { currentUser, logout } = useAuth()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleLogout = async () => {
  try {
    await logout()
    closeMobileMenu()
  } catch (err) {
    console.error('Erro ao fazer logout:', err)
  }
}
</script>
