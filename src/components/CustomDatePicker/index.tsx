import { DatePicker } from "antd"

// Styles
import "./index.scss"

export function CustomDatePicker({ label }: { label: string }) {
  const onChange = (date: Date, dateString: string | string[]) => {
    console.log(date, dateString)
  }

  return (
    <div className="custom-date-picker">
      <p>{label}</p>
      <DatePicker onChange={onChange} />
    </div>
  )
}
