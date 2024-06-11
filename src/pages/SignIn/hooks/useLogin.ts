import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

// Services
import { login } from "../../../services/authService"
import { api } from "../../../services/api"
import { useAuth } from "../../../hooks/useAuth"

interface SignInData {
  email: string
  password: string
  remember: boolean
}

export function useSignIn() {
  const navigate = useNavigate()
  const { setUserData } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  async function handleSignIn({ email, password, remember }: SignInData) {
    try {
      setIsLoading(true)

      const { data } = await login({
        email,
        password,
      })

      if (remember) {
        localStorage.setItem("bitzen-user", JSON.stringify(data))
      } else {
        sessionStorage.setItem("bitzen-user", JSON.stringify(data))
      }

      setUserData(data)
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
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
    handleSignIn,
  }
}
