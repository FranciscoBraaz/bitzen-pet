import { Flex, Form } from "antd"
import moment from "moment"

// Components
import { FormInput } from "../../components/FormInput"
import { TextArea } from "../../components/TextArea"

// Styles
import "./index.scss"
import { CustomDatePicker } from "../../components/CustomDatePicker"

export function MaintainPet() {
  return (
    <div className="maintain-pet">
      <Flex className="maintain-pet__container" gap={32}>
        <div className="maintain-pet__select-photo">
          <input type="file" />
        </div>
        <Flex vertical gap={32} className="maintain-pet__form-container">
          <Form>
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
        </Flex>
      </Flex>
    </div>
  )
}
