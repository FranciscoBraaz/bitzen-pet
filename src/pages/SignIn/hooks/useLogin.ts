import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

// Services
import { login } from "../../../services/authService"

interface SignInData {
  email: string
  password: string
}

export function useSignIn() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  async function handleCreateAccount({ email, password }: SignInData) {
    try {
      setIsLoading(true)

      const data = await login({
        email,
        password,
      })

      localStorage.setItem("bitzen-user", JSON.stringify(data))
      setIsLoading(false)
      navigate("/")
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      if (error.response.data.data) {
        const dataError = error.response.data.data
        const objKeys = Object.keys(dataError)
        toast.error(dataError[objKeys[0]][0])
        return
      }

      if (error.response.data.message) {
        toast.error(error.response.data.message)
        return
      }

      toast.error("Erro ao realizar login, tente novamente mais tarde")
    }
  }

  return {
    isLoading,
    handleCreateAccount,
  }
}
