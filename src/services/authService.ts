import { api } from "./api"

interface RegisterData {
  name: string
  email: string
  password: string
  password_confirmation: string
  document: string
  phone_number: string
}

interface LoginData {
  email: string
  password: string
}

export async function register({
  name,
  email,
  password,
  password_confirmation,
  document,
  phone_number,
}: RegisterData) {
  return await api.post("/api/register", {
    name,
    email,
    password,
    password_confirmation,
    document,
    phone_number,
  })
}

export async function login({ email, password }: LoginData) {
  const response = await api.post("/api/login", {
    email,
    password,
  })

  return response.data
}

export async function forgotPassword({ email }: { email: string }) {
  return await api.post("/api/forgot-password", { email })
}

export async function updateUser({
  name,
  email,
}: {
  name: string
  email: string
}) {
  return await api.put("/api/user", { name, email })
}

export async function logout() {
  return await api.post("/api/logout")
}
