import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

// Services
import { register } from "../../../services/authService"

interface SignUpData {
  name: string
  email: string
  password: string
  password_confirmation: string
  phone_number: string
  document: string
}

export function useSignUp() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  async function handleCreateAccount({
    name,
    email,
    password,
    password_confirmation,
    phone_number,
    document,
  }: SignUpData) {
    try {
      setIsLoading(true)

      await register({
        name,
        email,
        password,
        password_confirmation,
        phone_number,
        document,
      })

      toast.success("Conta criada com sucesso!")
      setIsLoading(false)
      navigate("/login")
    } catch (error) {
      setIsLoading(false)
      if (error instanceof AxiosError) {
        if (error?.response?.data.data) {
          const dataError = error.response.data.data
          const objKeys = Object.keys(dataError)
          toast.error(dataError[objKeys[0]][0])
          return
        }

        if (error?.response?.data.message) {
          toast.error(error.response.data.message)
          return
        }
      }

      toast.error("Erro ao criar conta, tente novamente mais tarde")
    }
  }

  return {
    isLoading,
    handleCreateAccount,
  }
}
