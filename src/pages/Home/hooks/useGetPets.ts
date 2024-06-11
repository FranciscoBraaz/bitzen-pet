import { getPets } from "../../../services/petsService"
import { useQuery } from "@tanstack/react-query"

async function fetchPets({ search = "" }: { search: string }) {
  try {
    const data = await getPets({
      signal: new AbortController().signal,
      search,
    })

    return data?.data
  } catch (error) {
    console.error(error)
  }
}

export const useGetPets = (search: string, token: string | undefined = "") => {
  return useQuery({
    queryKey: ["fetch-pets", search],
    queryFn: () => fetchPets({ search }),
    staleTime: 1000 * 60, // 1 minute
    enabled: !!token,
    refetchOnWindowFocus: true,
    /* eslint-disable-next-line */
    // @ts-ignore
    keepPreviousData: true,
  })
}
