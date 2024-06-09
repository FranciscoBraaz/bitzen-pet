import { Flex, Layout } from "antd"
import { CustomTabs } from "../CustomTabs"

// Assets
import LogoSvg from "../../assets/logo-full.svg?react"

// Styles
import "./index.scss"
import { CustomDropdown } from "../CustomDropdown"

const tabs = [
  {
    key: "home",
    label: "Início",
  },
]

export function Header() {
  return (
    <Layout.Header className="header">
      <Flex className="header__content" justify="space-between" align="center">
        <Flex gap={72}>
          <LogoSvg />
          <CustomTabs activeTab="home" items={tabs} onChange={() => {}} />
        </Flex>
        <CustomDropdown />
      </Flex>
      <div className="header__divider" />
      <div className="header__page-title">
        <h1>Seus pets</h1>
      </div>
    </Layout.Header>
  )
}
