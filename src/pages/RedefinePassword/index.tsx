import React from "react"
import { FormInput } from "../../components/FormInput"
import { Form, Layout } from "antd"
import { FormWrapper } from "../../components/FormWrapper"

// Styles
import "./index.scss"
import { useNavigate } from "react-router-dom"

const { Content } = Layout

export function RedefinePassword() {
  const navigate = useNavigate()

  function handleSubmit() {
    navigate("/login")
  }

  return (
    <Layout>
      <Content className="redefine-password">
        <FormWrapper
          title="Crie uma nova senha"
          description="Crie uma nova senha de acesso à sua conta"
          formId="redefine-password"
          buttonText="Próximo"
          hasBackButton
        >
          <Form
            id="redefine-password"
            initialValues={{ email: "", passowrd: "" }}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua nova senha",
                },
              ]}
            >
              <FormInput
                label="Nova senha"
                placeholder="Crie uma nova senha"
                type="password"
              />
            </Form.Item>
            <Form.Item
              name="confirm-password"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua nova senha",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error("As senhas não coincidem"))
                  },
                }),
              ]}
            >
              <FormInput
                label="Confirmar nova senha"
                placeholder="Repita a nova senha"
                type="password"
              />
            </Form.Item>
          </Form>
        </FormWrapper>
      </Content>
    </Layout>
  )
}
