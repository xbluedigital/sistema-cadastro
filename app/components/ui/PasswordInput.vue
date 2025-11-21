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
        :type="showPassword ? 'text' : 'password'"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <!-- Toggle Password Visibility Button -->
      <button
        type="button"
        @click="togglePasswordVisibility"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary"
        :class="{ 'right-10': error }"
        tabindex="-1"
      >
        <!-- Eye Open Icon -->
        <svg
          v-if="showPassword"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        
        <!-- Eye Closed Icon -->
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </button>
      
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
  modelValue?: string
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  error: '',
  hint: '',
  disabled: false,
  required: false,
  fullWidth: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const isFocused = ref(false)
const showPassword = ref(false)
const inputId = computed(() => `password-input-${Math.random().toString(36).substr(2, 9)}`)

const wrapperClasses = computed(() => {
  const widthClass = props.fullWidth ? 'w-full' : ''
  return ['flex flex-col', widthClass].join(' ')
})

const inputClasses = computed(() => {
  const baseClasses = 'px-4 py-3 pr-12 rounded-lg border bg-surface text-text-primary placeholder:text-text-muted transition-all duration-300 outline-none w-full'
  
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

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
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
