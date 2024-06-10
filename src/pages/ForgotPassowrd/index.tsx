import { FormInput } from "../../components/FormInput"
import { Form, Layout } from "antd"
import { FormWrapper } from "../../components/FormWrapper"

// Styles
import "./index.scss"
import { useNavigate } from "react-router-dom"

const { Content } = Layout

export function ForgotPassword() {
  const navigate = useNavigate()

  function handleSubmit() {
    navigate("/codigo-de-recuperacao")
  }

  return (
    <Layout>
      <Content className="forgot-password">
        <FormWrapper
          title="Esqueceu sua senha?"
          description="Vamos te ajudar nisso! Primeiro, digite seu e-mail cadastrado ao criar a sua conta."
          formId="forgot-password"
          buttonText="Próximo"
          hasBackButton
        >
          <Form
            id="forgot-password"
            initialValues={{ email: "", passowrd: "" }}
            onFinish={handleSubmit}
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
          </Form>
        </FormWrapper>
      </Content>
    </Layout>
  )
}
