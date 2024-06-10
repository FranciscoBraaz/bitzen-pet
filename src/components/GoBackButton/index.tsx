import { Button } from "antd"

// Assets
import ArrowLeft from "../../assets/arrow-left.svg?react"

// Styles
import "./index.scss"

export function GoBackButton() {
  return (
    <Button
      icon={<ArrowLeft />}
      iconPosition="start"
      type="text"
      className="go-back-button"
    >
      Voltar
    </Button>
  )
}
