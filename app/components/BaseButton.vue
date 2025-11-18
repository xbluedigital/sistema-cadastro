<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  fullWidth: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300 inline-flex items-center justify-center'
  
  const variantClasses = {
    primary: 'bg-accent text-text-inverse hover:bg-accent-hover hover:shadow-glow-orange disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-surface text-text-primary hover:bg-surface-hover border border-border disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'bg-transparent border-2 border-accent text-text-primary hover:bg-surface-hover disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-text-primary hover:bg-surface-hover disabled:opacity-50 disabled:cursor-not-allowed',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    widthClass,
  ].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
