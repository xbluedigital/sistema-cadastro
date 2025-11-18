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
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
