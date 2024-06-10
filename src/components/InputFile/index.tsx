import React, { forwardRef } from "react"

// Styles
import "./index.scss"

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange }, inputFileRef) => {
    return (
      <input
        className="input-file"
        name="photo"
        type="file"
        ref={inputFileRef}
        onChange={onChange}
      />
    )
  },
)

export default InputFile
