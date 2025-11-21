<template>
  <div class="w-full max-w-2xl mx-auto">
    <div class="bg-surface rounded-lg border border-border shadow-xl p-8">
      <h2 class="text-2xl font-bold text-text-primary mb-6">
        {{ isNovo ? 'Novo Funcionário' : 'Editar Funcionário' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Nome -->
        <BaseInput
          v-model="formData.nome"
          label="Nome"
          placeholder="Digite o nome completo"
          required
        />

        <!-- Cargo -->
        <BaseDropdown
          v-model="formData.cargo"
          label="Cargo"
          placeholder="Selecione o cargo"
          :options="cargoOptions"
        />

        <!-- Endereço -->
        <BaseInput
          v-model="formData.endereco"
          label="Endereço"
          placeholder="Digite o endereço completo"
        />

        <!-- Email -->
        <BaseInput
          v-model="formData.email"
          type="email"
          label="Email"
          placeholder="email@exemplo.com"
        />

        <!-- Salário -->
        <BaseInput
          v-model="formData.salario"
          type="number"
          label="Salário"
          placeholder="0.00"
          step="0.01"
        />

        <!-- Botão -->
        <BaseButton
          variant="primary"
          size="lg"
          full-width
          type="submit"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Salvando...' : (isNovo ? 'Salvar' : 'Editar') }}
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FuncionarioCreate } from '~/types/Funcionario'
import { useFuncionarios } from '~/composables/useFuncionarios'
import { useToast } from '~/composables/useToast'
import BaseInput from '~/components/ui/BaseInput.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseDropdown from '~/components/ui/BaseDropdown.vue'

interface Props {
  isNovo?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isNovo: true
})

const { criarFuncionario, isLoading } = useFuncionarios()
const toast = useToast()

const cargoOptions = [
  'Analista Administrativo',
  'Assistente de RH',
  'Gerente de Projetos',
  'Coordenador de Marketing',
  'Desenvolvedor de Software',
  'Analista Financeiro',
  'Técnico de Suporte',
  'Engenheiro de Produção',
  'Supervisor de Vendas',
  'Atendente Comercial',
  'Auxiliar Contábil',
  'Diretor Operacional',
  'Analista de Dados',
  'Designer Gráfico',
  'Recepcionista'
]

const initialFormData = (): FuncionarioCreate => ({
  nome: '',
  cargo: '',
  endereco: '',
  email: '',
  salario: undefined
})

const formData = ref<FuncionarioCreate>(initialFormData())

const resetForm = () => {
  formData.value = initialFormData()
}

const handleSubmit = async () => {
  if (!props.isNovo) {
    return
  }

  // Validação básica
  if (!formData.value.nome || !formData.value.cargo) {
    toast.error('Campos obrigatórios', 'Nome e Cargo são obrigatórios')
    return
  }

  // Converter undefined para null para compatibilidade com Supabase
  const dadosParaSalvar = {
    nome: formData.value.nome,
    cargo: formData.value.cargo || null,
    endereco: formData.value.endereco || null,
    email: formData.value.email || null,
    salario: formData.value.salario || null
  }

  const result = await criarFuncionario(dadosParaSalvar)

  if (result.success) {
    toast.success('Sucesso!', 'Funcionário cadastrado com sucesso')
    resetForm()
  } else {
    toast.error('Erro ao salvar', result.error || 'Ocorreu um erro ao salvar o funcionário')
  }
}
</script>
