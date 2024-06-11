import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPet } from "../../../services/petsService"
import { toast } from "react-toastify"
import { AxiosError } from "axios"
import dayjs from "dayjs"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface CreatePetProps {
  name: string
  color: string
  birthdate: dayjs.Dayjs
  description: string
  image: File | undefined
}

export function useCreatePet() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const handleCreatePet = useMutation({
    mutationFn: async ({
      name,
      color,
      birthdate,
      description,
      image,
    }: CreatePetProps) => {
      if (!image) {
        toast.info("Selecione uma imagem")
        return
      }
      setIsLoading(true)

      const formattedDate = birthdate.format("YYYY-MM-DD")
      await createPet({
        name,
        color,
        birthdate: formattedDate,
        description,
        image,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-pets"] })
      toast.success("Pet criado com sucesso")
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

      toast.error("Houve um erro ao criar Pet, tente novamente mais tarde")
    },
  })

  return { isLoading, handleCreatePet: handleCreatePet.mutate }
}
