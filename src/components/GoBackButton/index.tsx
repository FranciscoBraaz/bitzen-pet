import { Button } from "antd"
import { useNavigate } from "react-router-dom"

// Assets
import ArrowLeft from "../../assets/arrow-left.svg?react"

// Styles
import "./index.scss"

export function GoBackButton() {
  const navigate = useNavigate()

  return (
    <Button
      icon={<ArrowLeft />}
      iconPosition="start"
      type="text"
      className="go-back-button"
      onClick={() => navigate(-1)}
    >
      Voltar
    </Button>
  )
}
