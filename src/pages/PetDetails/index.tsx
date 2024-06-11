import { Button, Flex, Image, Typography } from "antd"

// Assets
import EditSvg from "../../assets/edit.svg?react"

// Styles
import "./index.scss"
import { GoBackButton } from "../../components/GoBackButton"
import { useGetPetDetails } from "./hooks/useGetPetDetails"
import { useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { SkeletonDetails } from "./components/SkeletonDetails"
import dayjs from "dayjs"

export function PetDetails() {
  const { id = "" } = useParams()
  const { userData } = useAuth()

  const { data, isError, isLoading } = useGetPetDetails(id, userData?.token)

  console.log(data)
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
        {isLoading && <SkeletonDetails />}
        {isError && (
          <Typography.Text type="danger">Erro ao buscar pets</Typography.Text>
        )}
        {!isLoading && !isError && (
          <Flex gap={32} className="pet-details__info-container">
            <Image src={data?.image_url} />
            <div className="pet-details__info-content">
              <Flex>
                <Flex vertical gap={8} className="pet-details__info">
                  <p>Nome:</p>
                  <p>{data?.name}</p>
                </Flex>
                <Flex vertical gap={8} className="pet-details__info">
                  <p>Idade:</p>
                  <p>{dayjs(data?.birthdate).format("DD/MM/YYYY")}</p>
                </Flex>
                <Flex vertical gap={8} className="pet-details__info">
                  <p>Cor:</p>
                  <p>{data?.color}</p>
                </Flex>
              </Flex>
              <Flex vertical gap={8} className="pet-details__info">
                <p>Sobre um pet</p>
                <p>{data?.description ?? "Não informado"}</p>
              </Flex>
            </div>
          </Flex>
        )}
      </Flex>
    </div>
  )
}
