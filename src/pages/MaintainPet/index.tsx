import { Button, Flex, Form, Image } from "antd"
import { useRef } from "react"
import moment from "moment"

// Assets
import Camera from "../../assets/camera.svg?react"

// Components
import { FormInput } from "../../components/FormInput"
import { TextArea } from "../../components/TextArea"
import { CustomDatePicker } from "../../components/CustomDatePicker"
import InputFile from "../../components/InputFile"

// Styles
import "./index.scss"
import { useSelectFile } from "./hooks/useSelectFile"

export function MaintainPet() {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const { handleChooseFile, handleOnChangeFile, photo } = useSelectFile()

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
          <Form id="submit-pet-info">
            <Form.Item name="name">
              <FormInput label="Nome" placeholder="Nome do pet" />
            </Form.Item>
            <Form.Item name="color">
              <FormInput label="Cor" placeholder="Cor do pet" />
            </Form.Item>
            <Form.Item
              name="date-birth"
              getValueProps={(i) => ({ value: moment(i) })}
            >
              <CustomDatePicker label="Data de nascimento" />
            </Form.Item>
            <Form.Item name="about">
              <TextArea
                label="Sobre o pet"
                placeholder="Escreva um pequeno texto sobre o pet"
              />
            </Form.Item>
          </Form>
          <Button type="primary" htmlType="submit" form="submit-pet-info">
            Salvar
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}
