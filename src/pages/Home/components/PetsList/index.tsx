import { List } from "antd"

// Components
import { PetListItem } from "../PetListItem"
import { SkeletonList } from "../SkeletonList"

// Styles
import "./index.scss"

interface DataProps {
  id: string
  name: string
  age: string
  color: string
  image_url: string
}
interface PetsListProps {
  isLoading?: boolean
  data: DataProps[] | undefined
}

export function PetsList({ data, isLoading = false }: PetsListProps) {
  return (
    <section className="pets-list">
      <div className="pets-list__header">
        <h2>Lista de pets</h2>
      </div>
      <div className="pets-list__columns-title">
        <p>Pet</p>
        <p>Nome</p>
        <p>Idade</p>
        <p>Cor</p>
        <p></p>
      </div>
      {isLoading && <SkeletonList />}
      {!isLoading && (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              style={{
                backgroundColor:
                  (index + 1) % 2 === 0 ? "#fafafa" : "transparent",
              }}
            >
              <PetListItem
                id={item.id}
                avatar={item.image_url}
                name={item.name}
                age={item.age ?? "-"}
                color={item.color ?? "-"}
              />
            </List.Item>
          )}
        />
      )}
    </section>
  )
}
