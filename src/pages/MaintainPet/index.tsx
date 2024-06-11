import { useRef } from "react"
import { Button, Flex, Form, Image } from "antd"
import dayjs from "dayjs"

// Assets
import Camera from "../../assets/camera.svg?react"

// Custom hooks
import { useSelectFile } from "./hooks/useSelectFile"

// Components
import { FormInput } from "../../components/FormInput"
import { TextArea } from "../../components/TextArea"
import { CustomDatePicker } from "../../components/CustomDatePicker"
import InputFile from "../../components/InputFile"

// Styles
import "./index.scss"
import { useCreatePet } from "./hooks/useCreatePet"

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
  const inputFileRef = useRef<HTMLInputElement>(null)
  const { handleChooseFile, handleOnChangeFile, photo } = useSelectFile()
  const { isLoading, handleCreatePet } = useCreatePet()

  return (
    <div className="maintain-pet">
      <Flex className="maintain-pet__container" gap={32}>
        {photo ? (
          <Image src={photo.preview} alt="Foto selecionada" />
        ) : (
          <div
            className="maintain-pet__select-photo"
            onClick={() => handleChooseFile({ inputFileRef })}
          >
            <Camera />
            <p>
              Clique para adicionar <br /> uma imagem
            </p>
            <InputFile onChange={handleOnChangeFile} ref={inputFileRef} />
          </div>
        )}

        <Flex vertical gap={32} className="maintain-pet__form-container">
          <Form
            id="submit-pet-info"
            onFinish={(values: FormValues) =>
              handleCreatePet({ ...values, image: photo?.raw })
            }
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
            loading={isLoading}
          >
            Salvar
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}
