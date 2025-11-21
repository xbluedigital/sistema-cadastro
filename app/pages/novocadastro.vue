<template>
  <div class="min-h-screen py-12 px-4">
    <FormFuncionario :is-novo="true" />
  </div>
</template>

<script setup lang="ts">
import FormFuncionario from '~/components/shared/FormFuncionario.vue'

definePageMeta({
  layout: 'default-layout'
})
</script>
