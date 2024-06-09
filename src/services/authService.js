import { api } from "./api"

export async function register({
  name,
  email,
  password,
  password_confirmation,
  document,
  phone_number,
}) {
  return await api.post("/api/register", {
    name,
    email,
    password,
    password_confirmation,
    document,
    phone_number,
  })
}

export async function login({ email, password }) {
  const response = await api.post("/api/login", {
    email,
    password,
  })

  return response.data
}
