import { Navigate, Outlet } from "react-router-dom"
import { Layout } from "antd"

// Components
import { Header } from "../Header"

// Styles
import "./index.scss"

interface RoutesLayoutProps {
  isPublic?: boolean
  isNotFound?: boolean
}

export function RoutesLayout({
  isPublic = false,
  isNotFound = false,
}: RoutesLayoutProps) {
  const loggedUserLocalStorage = localStorage.getItem("bitzen-user")
  const loggedUserSessionStore = sessionStorage.getItem("bitzen-user")
  const userIsLogged = loggedUserLocalStorage || loggedUserSessionStore

  if (isPublic) {
    if (userIsLogged || isNotFound) return <Navigate to="/" />
    return <Outlet />
  }

  if (!userIsLogged || isNotFound) return <Navigate to="/login" />

  if (isNotFound) return <Navigate to="/" />

  return (
    <Layout>
      <Header />
      <Layout.Content className="main">
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}
