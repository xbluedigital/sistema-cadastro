<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h1 class="text-5xl font-bold text-text-primary">
          Bem-vindo ao Sistema de Cadastro
        </h1>
        <p class="text-xl text-text-secondary max-w-2xl mx-auto">
          Gerencie seus cadastros de forma simples e eficiente com nossa plataforma moderna.
        </p>
        <div class="flex gap-4 justify-center mt-8">
          <NuxtLink to="/login">
            <BaseButton variant="primary" size="lg">
              Fazer Login
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/novocadastro">
            <BaseButton variant="outline" size="lg">
              Novo Cadastro
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Funcionários Table Section -->
    <section class="py-8 px-4">
      <div class="max-w-7xl mx-auto">
        <FuncionariosTable />
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-4 bg-surface">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-text-primary text-center mb-12">
          Recursos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-background p-6 rounded-lg border border-border">
            <div class="w-12 h-12 bg-pastel-purple-light rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🔒</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary mb-2">Seguro</h3>
            <p class="text-text-secondary">Seus dados protegidos com as melhores práticas de segurança.</p>
          </div>
          <div class="bg-background p-6 rounded-lg border border-border">
            <div class="w-12 h-12 bg-pastel-green-light rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">⚡</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary mb-2">Rápido</h3>
            <p class="text-text-secondary">Interface moderna e responsiva para melhor experiência.</p>
          </div>
          <div class="bg-background p-6 rounded-lg border border-border">
            <div class="w-12 h-12 bg-pastel-blue-light rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📊</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary mb-2">Completo</h3>
            <p class="text-text-secondary">Todas as ferramentas que você precisa em um só lugar.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import FuncionariosTable from '~/components/shared/FuncionariosTable.vue'

definePageMeta({
  layout: 'default-layout'
})
</script>
