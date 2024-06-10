import { Button, Flex } from "antd"

// Assets
import PlusCircle from "../../assets/plus-circle.svg?react"

// Components
import { SearchBar } from "./components/SearchBar"
import { PetsList } from "./components/PetsList"

// Styles
import "./index.scss"

export function Home() {
  return (
    <div className="home">
      <Flex className="home__container" vertical gap={40}>
        <Flex justify="space-between" gap={16} className="home__actions">
          <SearchBar />
          <Button
            type="primary"
            icon={<PlusCircle />}
            iconPosition="start"
            className="home__actions__new-pet"
          >
            Cadastrar pet
          </Button>
        </Flex>
        <PetsList />
      </Flex>
    </div>
  )
}
