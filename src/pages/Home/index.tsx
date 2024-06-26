import { Button, Flex, Typography } from "antd"
import { useNavigate } from "react-router-dom"

// Assets
import PlusCircle from "../../assets/plus-circle.svg?react"

// Custom hooks
import { useAuth } from "../../hooks/useAuth"
import { useGetPets } from "./hooks/useGetPets"
import useSearch from "./hooks/useSearch"

// Components
import { SearchBar } from "./components/SearchBar"
import { PetsList } from "./components/PetsList"

// Styles
import "./index.scss"

export function Home() {
  const { userData } = useAuth()
  const { search, handleSearch } = useSearch()
  const { data, isLoading, isFetching, isError } = useGetPets(
    search,
    userData?.token,
  )
  const navigate = useNavigate()

  return (
    <div className="home">
      <Flex className="home__container" vertical gap={40}>
        <Flex justify="space-between" gap={16} className="home__actions">
          <SearchBar handleSearch={handleSearch} />
          <Button
            type="primary"
            icon={<PlusCircle />}
            iconPosition="start"
            className="home__actions__new-pet"
            onClick={() => navigate("/cadastrar-pet")}
          >
            Cadastrar pet
          </Button>
        </Flex>
        {isError && (
          <Typography.Text type="danger">Erro ao buscar pets</Typography.Text>
        )}
        <PetsList data={data} isLoading={isLoading} isFetching={isFetching} />
      </Flex>
    </div>
  )
}
