import React from "react"
import { Layout, Form, Flex, Typography, Checkbox } from "antd"
import { NavLink } from "react-router-dom"

// Components
import { FormWrapper } from "../../components/FormWrapper"
import { FormInput } from "../../components/FormInput"

const { Content } = Layout
const { Link } = Typography

// Styles
import "./index.scss"

function SignIn() {
  return (
    <Layout>
      <Content className="sign-in">
        <FormWrapper
          title="Entrar na plataforma"
          description="Não tem uma conta?"
          link={{ text: "Cadastre-se gratuitamente", to: "/cadastro" }}
          formId="sign-in"
          buttonText="Entrar na plataforma"
        >
          <Form id="sign-in" initialValues={{ email: "", passowrd: "" }}>
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
              <Link strong>
                <NavLink to="/esqueceu-senha">Esqueceu sua senha?</NavLink>
              </Link>
            </Flex>
          </Form>
        </FormWrapper>
      </Content>
    </Layout>
  )
}

export default SignIn
