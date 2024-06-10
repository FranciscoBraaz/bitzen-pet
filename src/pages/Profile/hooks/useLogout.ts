import React from "react"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios"
import { toast } from "react-toastify"

// Services
import { logout } from "../../../services/authService"

export function useLogout() {
  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate()

  async function handleLogout() {
    setLoading(true)

    try {
      await logout()

      localStorage.removeItem("bitzen-user")
      sessionStorage.removeItem("bitzen-user")
      navigate("/login")
    } catch (error) {
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

      toast.error("Erro realizar logout, tente novamente mais tarde")
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleLogout }
}
