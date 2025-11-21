<template>
  <footer class="bg-surface border-t border-border mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">S</span>
            </div>
            <span class="text-text-primary font-bold text-xl">Sistema de Cadastro</span>
          </div>
          <p class="text-text-secondary text-sm">
            Sistema de cadastro moderno e eficiente para gerenciar seus dados.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-text-primary font-semibold mb-4">Links Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-text-secondary hover:text-primary-500 transition-colors text-sm"
              >
                Início
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/novocadastro"
                class="text-text-secondary hover:text-primary-500 transition-colors text-sm"
              >
                Novo Cadastro
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-text-primary font-semibold mb-4">Contato</h3>
          <ul class="space-y-2 text-sm text-text-secondary">
            <li class="flex items-center space-x-2">
              <span>📧</span>
              <span>contato@neofluxx.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <span>📞</span>
              <span>(11) 9999-9999</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-border mt-8 pt-8 text-center">
        <p class="text-text-tertiary text-sm">
          © {{ currentYear }} Neofluxx. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
