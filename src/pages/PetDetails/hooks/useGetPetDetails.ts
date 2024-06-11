import { getPetById } from "../../../services/petsService"
import { useQuery } from "@tanstack/react-query"

async function fetchPetDetails({ id }: { id: string }) {
  try {
    const response = await getPetById({
      signal: new AbortController().signal,
      id,
    })

    return response?.data
  } catch (error) {
    console.error(error)
  }
}

export const useGetPetDetails = (
  id: string,
  token: string | undefined = "",
) => {
  return useQuery({
    queryKey: ["fetch-pet", id],
    queryFn: () => fetchPetDetails({ id }),
    staleTime: 1000 * 60, // 1 minute
    enabled: !!token,
    refetchOnWindowFocus: true,
    /* eslint-disable-next-line */
    // @ts-ignore
    keepPreviousData: true,
  })
}
