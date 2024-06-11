import { Flex, Layout } from "antd"
import { CustomTabs } from "../CustomTabs"
import { useNavigate } from "react-router-dom"

// Assets
import Logo from "../../assets/logo.svg?react"

// Custom hooks
import { useHeader } from "./hooks/useHeader"
import { useAuth } from "../../hooks/useAuth"

// Components
import { CustomDropdown } from "../CustomDropdown"

// Styles
import "./index.scss"

const tabs = [
  {
    key: "home",
    path: "/",
    label: "Início",
  },
]

export function Header() {
  const navigate = useNavigate()
  const pathname = window.location.pathname
  const { pageTitle, handleTabChange } = useHeader()
  const { userData } = useAuth()

  return (
    <Layout.Header className="header">
      <Flex className="header__content" justify="space-between" align="center">
        <Flex gap={72}>
          <button
            className="header_logo-container"
            onClick={() => navigate("/")}
          >
            <Logo />
            <p>Bitzen Pet</p>
          </button>
          <CustomTabs
            activeTab={pathname === "/" ? "home" : undefined}
            items={tabs}
            onChange={handleTabChange}
          />
        </Flex>
        <CustomDropdown name={userData?.user.name.slice(0, 2)} />
      </Flex>
      <div className="header__divider" />
      <div className="header__page-title">
        <h1>{pageTitle}</h1>
      </div>
    </Layout.Header>
  )
}
