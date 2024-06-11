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

export async function createPet({
  name,
  color,
  birthdate,
  description,
  image,
}: {
  name: string
  color: string
  birthdate: string
  description: string
  image: File
}) {
  const formData = new FormData()
  formData.append("name", name)
  formData.append("color", color)
  formData.append("birthdate", birthdate)
  formData.append("description", description)
  formData.append("image", image)

  try {
    await api.post("api/pets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  } catch (error) {
    console.error(error)
  }
}
