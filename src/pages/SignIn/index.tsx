import React from "react"
import { Layout, Form, Flex, Typography, Checkbox } from "antd"
import { NavLink } from "react-router-dom"

// Custom hooks
import { useSignIn } from "./hooks/useLogin"

// Components
import { FormWrapper } from "../../components/FormWrapper"
import { FormInput } from "../../components/FormInput"

// Styles
import "./index.scss"

function SignIn() {
  const { isLoading, handleCreateAccount } = useSignIn()

  return (
    <Layout>
      <Layout.Content className="sign-in">
        <FormWrapper
          title="Entrar na plataforma"
          description="Não tem uma conta?"
          link={{ text: "Cadastre-se gratuitamente", to: "/cadastro" }}
          formId="sign-in"
          buttonText="Entrar na plataforma"
          isLoading={isLoading}
        >
          <Form
            id="sign-in"
            initialValues={{ email: "", passowrd: "" }}
            onFinish={handleCreateAccount}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira seu email",
                },
              ]}
            >
              <FormInput label="Email" placeholder="Seu email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua senha",
                },
              ]}
            >
              <FormInput
                label="Senha"
                placeholder="Seu senha"
                type="password"
              />
            </Form.Item>
            <Flex justify="space-between">
              <Form.Item name="checkbox" valuePropName="checked">
                <Checkbox>Manter conectado</Checkbox>
              </Form.Item>
              <Typography.Link strong>
                <NavLink to="/esqueceu-senha">Esqueceu sua senha?</NavLink>
              </Typography.Link>
            </Flex>
          </Form>
        </FormWrapper>
      </Layout.Content>
    </Layout>
  )
}

export default SignIn
