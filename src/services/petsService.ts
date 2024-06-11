import { AxiosResponse } from "axios"
import { api } from "./api"

interface GetPetDetailsProps {
  signal: AbortSignal
  id: string
}

interface GetPetDetailsResponse {
  data: PetData
  message: string
}

interface GetPetsProps {
  signal: AbortSignal
  search: string
}

interface PetData {
  id: string
  name: string
  birthdate: string
  color: string
  description: string
  image_url: string
}

interface PetsResponse {
  data: { data: PetData[] }
  message: string
}

export async function getPets({ signal, search }: GetPetsProps) {
  try {
    const response: AxiosResponse<PetsResponse> = await api.get(
      `api/pets?search=${search}`,
      { signal },
    )

    return response.data.data
  } catch (error) {
    console.error(error)
    throw error
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
    throw error
  }
}

export async function updatePet({
  id,
  name,
  color,
  birthdate,
  description,
  image,
}: {
  id: string
  name: string
  color: string
  birthdate: string
  description: string
  image: File | undefined
}) {
  const formData = new FormData()
  formData.append("name", name)
  formData.append("color", color)
  formData.append("birthdate", birthdate)
  formData.append("description", description)
  formData.append("_method", "PUT")
  if (image) {
    formData.append("image", image)
  }

  try {
    await api.post(`api/pets/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getPetById({ signal, id }: GetPetDetailsProps) {
  try {
    const response: AxiosResponse<GetPetDetailsResponse> = await api.get(
      `api/pets/${id}`,
      {
        signal,
      },
    )

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function deletePet({ id }: { id: string }) {
  try {
    await api.delete(`api/pets/${id}`)
  } catch (error) {
    console.error(error)
    throw error
  }
}
