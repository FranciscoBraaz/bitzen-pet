import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useRecoveryCode() {
  const navigate = useNavigate()
  const [code, setCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (code.length !== 4) {
      setErrorMessage("O código de recuperação deve conter 4 dígitos.")
      return
    }

    navigate("/redefinir-senha")
  }

  return {
    code,
    setCode,
    errorMessage,
    handleSubmit,
  }
}
