import { useRef } from "react"
import { Button, Flex, Image } from "antd"

// Assets
import Camera from "../../../../assets/camera.svg?react"

// Components
import InputFile from "../../../../components/InputFile"

interface PhotoProps {
  currentPhoto: string | undefined
  handleChooseFile: (props: {
    inputFileRef: React.RefObject<HTMLInputElement>
  }) => void
  handleOnChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function PetPhoto({
  currentPhoto,
  handleChooseFile,
  handleOnChangeFile,
}: PhotoProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)

  if (currentPhoto) {
    return (
      <Flex vertical style={{ maxWidth: "336px" }} gap={16}>
        <Image src={currentPhoto} alt="Foto selecionada" />
        <Button
          type="default"
          onClick={() => handleChooseFile({ inputFileRef })}
        >
          Alterar foto
        </Button>
        <InputFile onChange={handleOnChangeFile} ref={inputFileRef} />
      </Flex>
    )
  }

  return (
    <div
      className="maintain-pet__select-photo"
      onClick={() => handleChooseFile({ inputFileRef })}
    >
      <Camera />
      <p>
        Clique para adicionar <br /> uma imagem
      </p>
      <InputFile onChange={handleOnChangeFile} ref={inputFileRef} />
    </div>
  )
}
