import { Button, Flex } from "antd"

// Assets
import EyeSvg from "../../../../assets/eye.svg?react"
import TrashSvg from "../../../../assets/trash.svg?react"

// Styles
import "./index.scss"
import { useNavigate } from "react-router-dom"

interface PetListItemProps {
  avatar: string
  name: string
  age: string
  color: string
}

export function PetListItem({ avatar, name, age, color }: PetListItemProps) {
  const navigate = useNavigate()

  return (
    <div className="pet-list-item">
      <div>
        <span>Pet</span>
        <img
          src={avatar}
          alt={name}
          style={{ width: 88, height: 88, borderRadius: 8 }}
        />
      </div>
      <div>
        <span>Nome</span>
        <p>{name}</p>
      </div>
      <div>
        <span>Idade</span>
        <p>{age}</p>
      </div>
      <div>
        <span>Cor</span>
        <p>{color}</p>
      </div>
      <div>
        <span />
        <Flex gap={16} className="pet-list-item__container-buttons">
          <Button
            type="default"
            icon={<EyeSvg />}
            onClick={() => navigate("/detalhes")}
          />
          <Button type="default" icon={<TrashSvg />} />
        </Flex>
      </div>
    </div>
  )
}
