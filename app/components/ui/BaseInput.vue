<template>
  <div :class="wrapperClasses">
    <label
      v-if="label"
      :for="inputId"
      class="block text-text-primary font-medium mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error ml-1">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div v-if="error" class="absolute right-3 top-1/2 -translate-y-1/2 text-error">
        ⚠
      </div>
    </div>
    
    <p v-if="error" class="mt-2 text-sm text-error">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="mt-2 text-sm text-text-tertiary">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  id?: string
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  modelValue: '',
  type: 'text',
  label: '',
  placeholder: '',
  error: '',
  hint: '',
  disabled: false,
  required: false,
  fullWidth: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const isFocused = ref(false)

// Use the provided ID or generate a stable one
const inputId = computed(() => {
  return props.id || `input-${Math.random().toString(36).substr(2, 9)}`
})

const wrapperClasses = computed(() => {
  const widthClass = props.fullWidth ? 'w-full' : ''
  return ['flex flex-col', widthClass].join(' ')
})

const inputClasses = computed(() => {
  const baseClasses = 'px-4 py-3 rounded-lg border bg-surface text-text-primary placeholder:text-text-muted transition-all duration-300 outline-none w-full'
  
  const stateClasses = props.error
    ? 'border-error focus:border-error focus:ring-2 focus:ring-error/20'
    : isFocused.value
    ? 'border-border-accent shadow-glow-orange'
    : 'border-border hover:border-border-light focus:border-border-accent'
  
  const disabledClasses = props.disabled
    ? 'opacity-50 cursor-not-allowed'
    : ''
  
  return [baseClasses, stateClasses, disabledClasses].join(' ')
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}
</script>
