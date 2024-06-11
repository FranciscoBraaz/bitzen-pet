import { Button, Flex, Form, Typography } from "antd"
import { useParams } from "react-router-dom"
import dayjs from "dayjs"

// Custom hooks
import { useSelectFile } from "./hooks/useSelectFile"
import { useCreatePet } from "./hooks/useCreatePet"
import { useGetPetDetails } from "../PetDetails/hooks/useGetPetDetails"
import { useAuth } from "../../hooks/useAuth"
import { useUpdatePet } from "./hooks/useUpdatePet"

// Components
import { FormInput } from "../../components/FormInput"
import { TextArea } from "../../components/TextArea"
import { CustomDatePicker } from "../../components/CustomDatePicker"
import { FormSkeleton } from "./components/FormSkeleton"
import { PetPhoto } from "./components/PetPhoto"

// Styles
import "./index.scss"

const requiredRules = [
  {
    required: true,
    message: "Campo obrigatório",
  },
]

interface FormValues {
  name: string
  color: string
  birthdate: dayjs.Dayjs
  description: string
}

export function MaintainPet() {
  const { id = "" } = useParams()
  const { userData } = useAuth()

  const { photo, handleChooseFile, handleOnChangeFile } = useSelectFile()
  const { isLoading: isLoadingCreate, handleCreatePet } = useCreatePet()
  const { isLoading: isLoadingUpdate, handleEditPet } = useUpdatePet()
  const {
    isLoading: isLoadingInfo,
    data,
    isError,
  } = useGetPetDetails(id, userData?.token)

  const isLoadingButton = isLoadingCreate || isLoadingUpdate

  return (
    <div className="maintain-pet">
      {id && isLoadingInfo && <FormSkeleton />}
      {isError && (
        <Typography.Text type="danger">Erro ao buscar pets</Typography.Text>
      )}
      {(!id || (id && !isLoadingInfo)) && (
        <Flex className="maintain-pet__container" gap={32}>
          <PetPhoto
            currentPhoto={photo?.preview ?? data?.image_url}
            handleChooseFile={handleChooseFile}
            handleOnChangeFile={handleOnChangeFile}
          />

          <Flex vertical gap={32} className="maintain-pet__form-container">
            <Form
              id="submit-pet-info"
              onFinish={(values: FormValues) => {
                if (id) {
                  handleEditPet({ ...values, image: photo?.raw, id })
                } else {
                  handleCreatePet({ ...values, image: photo?.raw })
                }
              }}
              initialValues={{
                name: data?.name,
                color: data?.color,
                birthdate: dayjs(data?.birthdate),
                description: data?.description,
              }}
            >
              <Form.Item name="name" rules={requiredRules}>
                <FormInput label="Nome" placeholder="Nome do pet" />
              </Form.Item>
              <Form.Item name="color" rules={requiredRules}>
                <FormInput label="Cor" placeholder="Cor do pet" />
              </Form.Item>
              <Form.Item
                name="birthdate"
                getValueProps={(date) => {
                  if (!date) return { value: undefined }
                  return { value: dayjs(date) }
                }}
                rules={[
                  {
                    type: "object",
                    required: true,
                    message: "Campo obrigatório",
                  },
                ]}
              >
                <CustomDatePicker label="Data de nascimento" />
              </Form.Item>
              <Form.Item name="description" rules={requiredRules}>
                <TextArea
                  label="Sobre o pet"
                  placeholder="Escreva um pequeno texto sobre o pet"
                />
              </Form.Item>
            </Form>
            <Button
              type="primary"
              htmlType="submit"
              form="submit-pet-info"
              loading={isLoadingButton}
            >
              Salvar
            </Button>
          </Flex>
        </Flex>
      )}
    </div>
  )
}
