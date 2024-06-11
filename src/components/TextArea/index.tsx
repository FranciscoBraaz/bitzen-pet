import { Input } from "antd"

// Styles
import "./index.scss"

interface TextAreaProps {
  label: string
  placeholder: string
}

export function TextArea({ label, placeholder, ...props }: TextAreaProps) {
  return (
    <div className="text-area">
      <p>{label}</p>
      <Input.TextArea
        style={{ padding: 12 }}
        placeholder={placeholder}
        autoSize={{
          minRows: 6,
          maxRows: 10,
        }}
        {...props}
      />
    </div>
  )
}
