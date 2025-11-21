<template>
  <div class="min-h-screen bg-background flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4 shadow-glow-orange">
          <span class="text-text-inverse font-bold text-3xl">N</span>
        </div>
        <h1 class="text-3xl font-bold text-text-primary">Neofluxx</h1>
        <p class="text-text-secondary mt-2">Sistema de Cadastro</p>
      </div>

      <!-- Login Form Component -->
      <LoginForm />

      <!-- Footer Link -->
      <div class="text-center mt-6">
        <NuxtLink
          to="/"
          class="text-text-secondary hover:text-primary-500 transition-colors text-sm"
        >
          ← Voltar para o início
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/shared/LoginForm.vue'

definePageMeta({
  layout: false
})
</script>
