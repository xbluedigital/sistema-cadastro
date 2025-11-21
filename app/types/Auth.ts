export interface LoginForm {
  email: string
  password: string
}

export interface SignupForm {
  email: string
  password: string
  confirmPassword: string
}

export interface User {
  id: string
  email: string
  name?: string
  createdAt?: Date
  updatedAt?: Date
}
