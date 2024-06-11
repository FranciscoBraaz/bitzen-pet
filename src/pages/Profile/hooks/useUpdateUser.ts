import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { AxiosError } from "axios"

// Services
import { updateUser } from "../../../services/authService"

// Custom hooks
import { useAuth } from "../../../hooks/useAuth"

interface EditUserProps {
  name: string
  email: string
}

export function useUpdateUser() {
  const { userData, setUserData } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateUser = useMutation({
    mutationFn: async ({ name, email }: EditUserProps) => {
      setIsLoading(true)

      await updateUser({
        name,
        email,
      })

      return { name, email }
    },
    onSuccess: ({ name, email }) => {
      const userLocalStorage = localStorage.getItem("bitzen-user")
      const userSessionStorage = sessionStorage.getItem("bitzen-user")
      if (userData) {
        const newUser = {
          user: { ...userData.user, name, email },
          token: userData?.token,
        }

        if (userLocalStorage) {
          localStorage.setItem("bitzen-user", JSON.stringify(newUser))
        }

        if (userSessionStorage) {
          sessionStorage.setItem("bitzen-user", JSON.stringify(newUser))
        }

        setUserData(newUser)
      }

      toast.success("Perfil atualizado")
      setIsLoading(false)
    },
    onError: (error) => {
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

      toast.error(
        "Houve um erro ao atualizar o perfil, tente novamente mais tarde",
      )
    },
  })

  return { isLoading, handleUpdateUser: handleUpdateUser.mutate }
}
