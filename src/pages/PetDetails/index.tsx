import { Button, Flex, Image } from "antd"

// Assets
import EditSvg from "../../assets/edit.svg?react"

// Styles
import "./index.scss"
import { GoBackButton } from "../../components/GoBackButton"

export function PetDetails() {
  return (
    <div className="pet-details">
      <Flex vertical className="pet-details__container" gap={50}>
        <Flex justify="space-between">
          <GoBackButton />
          <Button
            icon={<EditSvg />}
            iconPosition="start"
            type="primary"
            className="pet-details__edit"
          >
            Editar
          </Button>
        </Flex>
        <Flex gap={32} className="pet-details__info-container">
          <Image
            width={336}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div className="pet-details__info-content">
            <Flex>
              <Flex vertical gap={8} className="pet-details__info">
                <p>Nome:</p>
                <p>Leona</p>
              </Flex>
              <Flex vertical gap={8} className="pet-details__info">
                <p>Nome:</p>
                <p>Leona</p>
              </Flex>
              <Flex vertical gap={8} className="pet-details__info">
                <p>Nome:</p>
                <p>Leona</p>
              </Flex>
            </Flex>
            <Flex vertical gap={8} className="pet-details__info">
              <p>Sobre um pet</p>
              <p>
                Leona é uma gata companheira e carinhosa. Está sempre pronta
                para brincar e adora ursinhos de pelúcia.
              </p>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </div>
  )
}
