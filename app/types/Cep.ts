export interface CepForm {
  cep: string
}

export interface CepAddress {
  cep: string
  logradouro: string
  complemento: string
  unidade: string
  bairro: string
  localidade: string
  uf: string
  estado: string
  regiao: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export interface CepError {
  erro: boolean
}
