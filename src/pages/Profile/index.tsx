import { Button, Flex, Form, Typography } from "antd"
import { FormInput } from "../../components/FormInput"

// Assets
import Edit from "../../assets/edit.svg?react"
import Logout from "../../assets/logout.svg?react"

// Styles
import "./index.scss"

export function Profile() {
  return (
    <div className="profile">
      <Flex className="profile__container" vertical gap={32} align="center">
        <Form>
          <header className="profile__form-header">
            <Typography.Title level={2}>Meus dados</Typography.Title>
          </header>
          <Flex vertical gap={32}>
            <Form.Item name="name">
              <FormInput label="Nome" placeholder="Nome do pet" />
            </Form.Item>
            <Form.Item name="email">
              <FormInput label="Email" placeholder="example@example.com" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Flex>
        </Form>
        <Flex
          justify="space-between"
          align="center"
          gap={16}
          className="profile__container-action"
        >
          <Typography.Text>Senha</Typography.Text>
          <Button
            type="text"
            icon={<Edit />}
            className="profile__button-action profile__button-action--password"
          >
            Alterar
          </Button>
        </Flex>
        <Flex className="profile__container-action">
          <Button
            type="text"
            icon={<Logout />}
            className="profile__button-action profile__button-action--logout"
          >
            Sair da minha conta
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}
