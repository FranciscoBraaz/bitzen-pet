// Custom hooks
import { useCodeInput } from "./hooks/useCodeInput"

// Styles
import "./index.scss"

export function CodeInput({
  length,
  onComplete,
}: {
  length: number
  onComplete: (value: string) => void
}) {
  const { values, inputsRef, handleChange, handleKeyDown, handlePaste } =
    useCodeInput({ length, onComplete })

  return (
    <div className="code-input-container" onPaste={handlePaste}>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          className="code-input"
        />
      ))}
    </div>
  )
}
