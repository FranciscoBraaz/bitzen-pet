import { Tabs } from "antd"

// Styles
import "./index.scss"

type TabItem = {
  key: string
  label: string
}

interface CustomTabs {
  activeTab: string | undefined
  items: TabItem[]
  onChange: (key: string) => void
}

export function CustomTabs({ activeTab, items, onChange }: CustomTabs) {
  return (
    <Tabs
      className="custom-tabs"
      centered
      size="large"
      indicator={{ size: 60 }}
      tabBarStyle={{ width: 60, margin: "0px" }}
      defaultActiveKey={activeTab}
      items={items}
      onChange={onChange}
    />
  )
}
