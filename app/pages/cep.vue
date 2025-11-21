<template>
  <div class="min-h-screen bg-background flex items-center justify-center p-4">
    <div class="w-full max-w-2xl space-y-6">
      <!-- Header -->
      <div class="text-center space-y-2">
        <h1 class="text-3xl font-bold text-text-primary">Consulta de CEP</h1>
        <p class="text-text-secondary">
          Digite o CEP para buscar informações de endereço
        </p>
      </div>

      <!-- Search Form -->
      <div class="bg-surface rounded-lg border border-border shadow-xl p-6 space-y-4">
        <div class="space-y-4">
          <BaseInput
            id="cep-input-001"
            v-model="formData.cep"
            type="text"
            label="CEP"
            placeholder="00000-000"
            :error="error || undefined"
            :disabled="isLoading"
            required
            hint="Digite apenas números ou no formato 00000-000"
            @input="handleCepInput"
            @keyup.enter="handleSearch"
          />

          <div class="flex gap-3">
            <BaseButton
              variant="primary"
              size="lg"
              full-width
              @click="handleSearch"
              :disabled="isLoading || !formData.cep"
            >
              {{ isLoading ? 'Buscando...' : 'Buscar CEP' }}
            </BaseButton>

            <BaseButton
              v-if="addressData || error"
              variant="outline"
              size="lg"
              @click="handleClear"
              :disabled="isLoading"
            >
              Limpar
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Results Card -->
      <div
        v-if="addressData"
        class="bg-surface rounded-lg border border-border shadow-xl p-6 space-y-4 animate-fade-in"
      >
        <h2 class="text-xl font-semibold text-text-primary border-b border-border pb-2">
          Informações do Endereço
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- CEP -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">CEP</p>
            <p class="text-text-primary font-medium">{{ addressData.cep }}</p>
          </div>

          <!-- Logradouro -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Logradouro</p>
            <p class="text-text-primary font-medium">
              {{ addressData.logradouro || '—' }}
            </p>
          </div>

          <!-- Complemento -->
          <div v-if="addressData.complemento" class="space-y-1">
            <p class="text-sm text-text-secondary">Complemento</p>
            <p class="text-text-primary font-medium">{{ addressData.complemento }}</p>
          </div>

          <!-- Bairro -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Bairro</p>
            <p class="text-text-primary font-medium">
              {{ addressData.bairro || '—' }}
            </p>
          </div>

          <!-- Cidade -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Cidade</p>
            <p class="text-text-primary font-medium">{{ addressData.localidade }}</p>
          </div>

          <!-- UF -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">UF</p>
            <p class="text-text-primary font-medium">{{ addressData.uf }}</p>
          </div>

          <!-- Estado -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Estado</p>
            <p class="text-text-primary font-medium">{{ addressData.estado }}</p>
          </div>

          <!-- Região -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Região</p>
            <p class="text-text-primary font-medium">{{ addressData.regiao }}</p>
          </div>

          <!-- IBGE -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Código IBGE</p>
            <p class="text-text-primary font-medium">{{ addressData.ibge }}</p>
          </div>

          <!-- DDD -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">DDD</p>
            <p class="text-text-primary font-medium">{{ addressData.ddd }}</p>
          </div>

          <!-- GIA -->
          <div v-if="addressData.gia" class="space-y-1">
            <p class="text-sm text-text-secondary">GIA</p>
            <p class="text-text-primary font-medium">{{ addressData.gia }}</p>
          </div>

          <!-- SIAFI -->
          <div class="space-y-1">
            <p class="text-sm text-text-secondary">Código SIAFI</p>
            <p class="text-text-primary font-medium">{{ addressData.siafi }}</p>
          </div>
        </div>
      </div>

      <!-- Error Card -->
      <div
        v-if="error && !addressData"
        class="bg-red-500/10 border border-red-500/50 rounded-lg p-4 animate-fade-in"
      >
        <div class="flex items-start gap-3">
          <svg
            class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="text-red-400 text-sm">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCep } from '../composables/useCep'
import { applyCepMask } from '../utils/formatters/cepFormatter'
import BaseInput from '../components/ui/BaseInput.vue'
import BaseButton from '../components/ui/BaseButton.vue'

definePageMeta({
  layout: 'default-layout'
})

const { formData, addressData, isLoading, error, searchCep, clearForm } = useCep()

/**
 * Handle CEP input with automatic formatting
 */
const handleCepInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const masked = applyCepMask(target.value)
  formData.value.cep = masked
  
  // Clear error when user starts typing
  if (error.value) {
    error.value = null
  }
}

/**
 * Handle search button click
 */
const handleSearch = async () => {
  await searchCep()
}

/**
 * Handle clear button click
 */
const handleClear = () => {
  clearForm()
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
