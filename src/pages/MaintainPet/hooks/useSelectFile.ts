import React from "react"

interface handleChooseFileProps {
  inputFileRef: React.RefObject<HTMLInputElement>
}

type Photo = {
  preview: string
  raw: File
}

export function useSelectFile() {
  const [photo, setPhoto] = React.useState<Photo | null>(null)

  function handleChooseFile({ inputFileRef }: handleChooseFileProps) {
    inputFileRef.current?.click()
  }

  function handleOnChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    const file = files?.[0]

    if (file) {
      setPhoto({ preview: URL.createObjectURL(file), raw: file })
    }
  }

  return { handleChooseFile, handleOnChangeFile, photo }
}
