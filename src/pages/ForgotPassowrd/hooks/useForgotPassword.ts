import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

// Services
import { forgotPassword } from "../../../services/authService"

interface ForgotPasswordData {
  email: string
}

export function useForgotPassword() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  async function handleForgotPassword({ email }: ForgotPasswordData) {
    try {
      setIsLoading(true)

      await forgotPassword({
        email,
      })

      toast.success("Email de recuperação de senha enviado com sucesso")
      setIsLoading(false)
      navigate("/")
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

      toast.error("Erro ao realizar login, tente novamente mais tarde")
    }
  }

  return {
    isLoading,
    handleForgotPassword,
  }
}
