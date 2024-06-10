import { Button, Typography } from "antd"

const { Text } = Typography

interface FormButtonProps {
  text: string
  formId: string
  isLoading?: boolean
}

export function FormButton({
  text,
  formId,
  isLoading = false,
}: FormButtonProps) {
  return (
    <Button
      type="primary"
      size="large"
      style={{ width: "100%" }}
      htmlType="submit"
      form={formId}
      loading={isLoading}
    >
      <Text strong style={{ color: "white" }}>
        {text}
      </Text>
    </Button>
  )
}
