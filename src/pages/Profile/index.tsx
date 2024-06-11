import { useEffect } from "react"
import { Button, Flex, Form, Typography } from "antd"
import { FormInput } from "../../components/FormInput"

// Assets
import Edit from "../../assets/edit.svg?react"
import Logout from "../../assets/logout.svg?react"

// Custom hooks
import { useLogout } from "./hooks/useLogout"
import { useAuth } from "../../hooks/useAuth"
import { useUpdateUser } from "./hooks/useUpdateUser"

// Styles
import "./index.scss"

const requiredRules = [
  {
    required: true,
    message: "Por favor, insira seu email",
  },
]

export function Profile() {
  const { loading, handleLogout } = useLogout()
  const { userData } = useAuth()
  const { isLoading: isUpdatingUser, handleUpdateUser } = useUpdateUser()

  const [form] = Form.useForm()

  useEffect(() => {
    if (!userData) return
    const { user } = userData
    if (user) {
      form.setFieldValue("name", user.name)
      form.setFieldValue("email", user.email)
    }
  }, [userData, form])

  return (
    <div className="profile">
      <Flex className="profile__container" vertical gap={32} align="center">
        <Form
          form={form}
          initialValues={{
            email: userData?.user.email,
            name: userData?.user.name,
          }}
          onFinish={handleUpdateUser}
        >
          <header className="profile__form-header">
            <Typography.Title level={2}>Meus dados</Typography.Title>
          </header>
          <Flex vertical gap={32}>
            <Form.Item name="name" rules={requiredRules}>
              <FormInput label="Nome" placeholder="Nome do pet" />
            </Form.Item>
            <Form.Item name="email" rules={requiredRules}>
              <FormInput label="Email" placeholder="example@example.com" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isUpdatingUser}>
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
            loading={loading}
            onClick={handleLogout}
          >
            Sair da minha conta
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}
