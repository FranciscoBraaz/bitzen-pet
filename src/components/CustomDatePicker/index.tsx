import { DatePicker } from "antd"

// Styles
import "./index.scss"

export function CustomDatePicker({ label, ...props }: { label: string }) {
  return (
    <div className="custom-date-picker">
      <p>{label}</p>
      <DatePicker
        format="DD/MM/YYYY"
        {...props}
        defaultValue={undefined}
        placeholder="Selecione"
      />
    </div>
  )
}
