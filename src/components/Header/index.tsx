import { Flex, Layout } from "antd"
import { CustomTabs } from "../CustomTabs"

// Assets
import LogoSvg from "../../assets/logo-full.svg?react"

// Styles
import "./index.scss"

const tabs = [
  {
    key: "home",
    label: "Início",
  },
]

export function Header() {
  return (
    <Layout.Header className="header">
      <Flex className="header__left" justify="space-between" align="center">
        <Flex gap={72}>
          <LogoSvg />
          <CustomTabs activeTab="home" items={tabs} onChange={() => {}} />
        </Flex>
      </Flex>
    </Layout.Header>
  )
}
