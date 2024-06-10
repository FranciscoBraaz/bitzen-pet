import { DatePicker } from "antd"

// Styles
import "./index.scss"

export function CustomDatePicker({ label }: { label: string }) {
  return (
    <div className="custom-date-picker">
      <p>{label}</p>
      <DatePicker />
    </div>
  )
}
