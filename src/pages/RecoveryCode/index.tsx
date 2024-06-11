import { Layout, Typography } from "antd"
import { FormWrapper } from "../../components/FormWrapper"

// Custom hooks
import { useRecoveryCode } from "./hooks/useRecoveryCode"

// Components
import { CodeInput } from "../../components/CodeInput"

// Styles
import "./index.scss"

const { Content } = Layout
const { Text } = Typography

export function RecoveryCode() {
  const { setCode, handleSubmit, errorMessage } = useRecoveryCode()

  return (
    <Layout>
      <Content className="recovery-code">
        <FormWrapper
          title="Confira o seu email"
          description="Insira nos campos abaixo o código que enviamos para você no seu endereço de e-mail."
          formId="recovery-code"
          buttonText="Próximo"
          hasBackButton
        >
          <form onSubmit={handleSubmit} id="recovery-code">
            <CodeInput
              length={4}
              onComplete={(value: string) => setCode(value)}
            />
            {errorMessage && (
              <Text className="recovery-code__error-message">
                {errorMessage}
              </Text>
            )}
          </form>
        </FormWrapper>
      </Content>
    </Layout>
  )
}
