import { List } from "antd"
import { PetListItem } from "../PetListItem"

// Styles
import "./index.scss"

const data = [
  {
    avatar:
      "https://images.pexels.com/photos/9160637/pexels-photo-9160637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Leona",
    age: "8 meses",
    color: "Rajado",
  },
  {
    avatar:
      "https://images.pexels.com/photos/1080953/pexels-photo-1080953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Leona",
    age: "8 meses",
    color: "Rajado",
  },
]

export function PetsList() {
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
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <PetListItem
              avatar={item.avatar}
              name={item.name}
              age={item.age}
              color={item.color}
            />
          </List.Item>
        )}
      />
    </section>
  )
}
