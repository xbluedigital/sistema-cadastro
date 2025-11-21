<template>
  <div class="flex flex-col gap-2">
    <label 
      v-if="label" 
      :for="inputId"
      class="text-sm font-medium text-text-primary"
    >
      {{ label }}
    </label>
    <select
      :id="inputId"
      :value="modelValue"
      @input="handleInput"
      :class="selectClasses"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <span 
      v-if="error" 
      class="text-sm text-red-500"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string
  label?: string
  placeholder?: string
  error?: string
  options: string[]
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Selecione uma opção'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = `dropdown-${Math.random().toString(36).substring(2, 9)}`

const selectClasses = computed(() => {
  const baseClasses = 'w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2'
  const stateClasses = props.error 
    ? 'border-red-500 focus:ring-red-200 bg-red-50' 
    : 'border-border-light focus:ring-primary-100 bg-surface hover:border-primary-300'
  
  return `${baseClasses} ${stateClasses}`
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>
