export interface Funcionario {
  id: number
  nome: string
  cargo: string | null
  endereco: string | null
  email: string | null
  salario: number | null
  created_at: string
}

export interface FuncionarioCreate {
  nome: string
  cargo?: string
  endereco?: string
  email?: string
  salario?: number
}

export interface FuncionarioUpdate {
  nome?: string
  cargo?: string
  endereco?: string
  email?: string
  salario?: number
}
