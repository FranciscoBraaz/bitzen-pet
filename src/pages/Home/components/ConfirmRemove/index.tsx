import { Modal } from "antd"

interface ConfirmRemoveProps {
  open: boolean
  handleOk: () => void
  confirmLoading: boolean
  handleCancel: () => void
}

export function ConfirmRemove({
  open,
  handleOk,
  confirmLoading,
  handleCancel,
}: ConfirmRemoveProps) {
  return (
    <Modal
      title="Excluir item"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText="Sim, quero excluir"
    >
      <p>Tem certeza que deseja excluir este item?</p>
    </Modal>
  )
}
