import { useRef, useState } from "react"

interface UseCodeInputProps {
  length: number
  onComplete: (code: string) => void
}

export function useCodeInput({ length, onComplete }: UseCodeInputProps) {
  const [values, setValues] = useState(Array(length).fill(""))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) {
    const { value } = event.target
    if (/^\d*$/.test(value)) {
      const newValues = [...values]
      newValues[index] = value
      setValues(newValues)

      if (value && index < length - 1) {
        inputsRef.current[index + 1]?.focus()
      }

      if (newValues.every((num) => num !== "")) {
        onComplete(newValues.join(""))
      }
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLDivElement>) {
    const paste = event.clipboardData.getData("text")
    if (/^\d{4}$/.test(paste)) {
      const newValues = paste.split("")
      setValues(newValues)
      inputsRef.current[length - 1]?.focus()

      if (newValues.every((num) => num !== "")) {
        onComplete(newValues.join(""))
      }
    }
  }

  return {
    values,
    inputsRef,
    handleChange,
    handleKeyDown,
    handlePaste,
  }
}
