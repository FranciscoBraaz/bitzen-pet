import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { AxiosError } from "axios"

// Services
import { deletePet } from "../../../services/petsService"

export function useRemoveModal() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleRemove = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      setIsLoading(true)
      await deletePet({ id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch-pets"] })
      toast.success("O pet foi removido")
      setIsLoading(false)
      setOpen(false)
    },
    onError: (error) => {
      setIsLoading(false)
      setOpen(false)
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

  return {
    open,
    handleOpen,
    handleClose,
    isLoading,
    handleRemove: handleRemove.mutate,
  }
}
