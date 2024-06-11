import { AxiosResponse } from "axios"
import { api } from "./api"

interface GetPetsProps {
  signal: AbortSignal
  search: string
}

interface PetData {
  id: string
  name: string
  age: string
  color: string
  image_url: string
}

interface PetsResponse {
  data: { data: PetData[] }
  message: string
}

export async function getPets({ signal, search }: GetPetsProps) {
  try {
    const { data }: AxiosResponse<PetsResponse> = await api.get(
      `api/pets?search=${search}`,
      { signal },
    )

    return data.data
  } catch (error) {
    console.error(error)
  }
}
