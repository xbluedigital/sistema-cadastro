<template>
  <div class="w-full">
    <!-- Header -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-text-primary">Lista de Funcionários</h2>
      <p class="text-text-secondary mt-1">Gerencie todos os funcionários cadastrados</p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      <p class="text-text-secondary mt-4">Carregando funcionários...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-error/10 border border-error rounded-lg p-4 text-error">
      {{ error }}
    </div>

    <!-- Empty State -->
    <div v-else-if="funcionarios.length === 0" class="text-center py-12 bg-surface rounded-lg border border-border">
      <div class="text-6xl mb-4">👥</div>
      <h3 class="text-xl font-semibold text-text-primary mb-2">Nenhum funcionário cadastrado</h3>
      <p class="text-text-secondary">Adicione o primeiro funcionário para começar</p>
    </div>

    <!-- Table -->
    <div v-else class="bg-surface rounded-lg border border-border overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-surface-dark">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Nome
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Cargo
              </th>
              <th class="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-4 text-right text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Salário
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr 
              v-for="funcionario in funcionarios" 
              :key="funcionario.id"
              class="hover:bg-surface-hover transition-colors"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-text-primary">{{ funcionario.nome }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-text-secondary">{{ funcionario.cargo || '-' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-text-secondary">{{ funcionario.email || '-' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="text-sm font-medium text-text-primary">
                  {{ formatSalario(funcionario.salario) }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer Info -->
    <div v-if="funcionarios.length > 0" class="mt-4 text-sm text-text-secondary">
      Total: {{ funcionarios.length }} funcionário{{ funcionarios.length !== 1 ? 's' : '' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useFuncionarios } from '~/composables/useFuncionarios'

const { funcionarios, isLoading, error, listaFuncionarios } = useFuncionarios()

const formatSalario = (valor: number | null): string => {
  if (valor === null) return '-'
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

onMounted(async () => {
  await listaFuncionarios()
})
</script>
