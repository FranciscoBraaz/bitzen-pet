import { Button, Flex } from "antd"
import { useNavigate } from "react-router-dom"

// Assets
import EyeSvg from "../../../../assets/eye.svg?react"
import TrashSvg from "../../../../assets/trash.svg?react"

// Custom hooks
import { useRemoveModal } from "../../hooks/useRemoveModal"

// Components
import { ConfirmRemove } from "../ConfirmRemove"

// Styles
import "./index.scss"

interface PetListItemProps {
  id: string
  avatar: string
  name: string
  age: string
  color: string
}

export function PetListItem({
  id,
  avatar,
  name,
  age,
  color,
}: PetListItemProps) {
  const navigate = useNavigate()
  const { open, handleOpen, handleClose, handleRemove, isLoading } =
    useRemoveModal()

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
            onClick={() => navigate(`/detalhes/${id}`)}
          />
          <Button type="default" icon={<TrashSvg />} onClick={handleOpen} />
        </Flex>
      </div>
      <ConfirmRemove
        open={open}
        handleCancel={handleClose}
        handleOk={() => handleRemove({ id })}
        confirmLoading={isLoading}
      />
    </div>
  )
}
