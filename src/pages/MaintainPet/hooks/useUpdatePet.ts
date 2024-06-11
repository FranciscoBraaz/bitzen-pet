import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"

// Services
import { updatePet } from "../../../services/petsService"

interface EditPetProps {
  id: string
  name: string
  color: string
  birthdate: dayjs.Dayjs
  description: string
  image: File | undefined
}

export function useUpdatePet() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const handleEditPet = useMutation({
    mutationFn: async ({
      id,
      name,
      color,
      birthdate,
      description,
      image,
    }: EditPetProps) => {
      setIsLoading(true)
      const formattedDate = birthdate.format("YYYY-MM-DD")
      await updatePet({
        id,
        name,
        color,
        birthdate: formattedDate,
        description,
        image,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-pets"] })
      queryClient.invalidateQueries({ queryKey: ["fetch-pet"] })
      toast.success("Pet atualizado com sucesso")
      setIsLoading(false)
      navigate("/")
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

      toast.error("Houve um erro ao atualizar Pet, tente novamente mais tarde")
    },
  })

  return { isLoading, handleEditPet: handleEditPet.mutate }
}
