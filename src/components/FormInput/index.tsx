import { Flex, Input, Typography } from "antd"

// Styles
import "./index.scss"

const { Text } = Typography

interface FormInputsProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  type?: string
}

export function FormInput({
  label,
  placeholder,
  type = "text",
  ...props
}: FormInputsProps) {
  return (
    <Flex className="form-input" vertical gap={7}>
      <Text>{label}</Text>
      {type === "password" ? (
        <Input.Password
          placeholder={placeholder}
          className="form-input__password"
          {...props}
        />
      ) : (
        <Input placeholder={placeholder} {...props} />
      )}
    </Flex>
  )
}
