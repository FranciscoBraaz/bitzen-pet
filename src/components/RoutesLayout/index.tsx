import { Navigate, Outlet } from "react-router-dom"

// Styles
import "./index.scss"
import { Layout } from "antd"
import { Header } from "../Header"

interface RoutesLayoutProps {
  isPublic?: boolean
  isNotFound?: boolean
}

export function RoutesLayout({
  isPublic = false,
  isNotFound = false,
}: RoutesLayoutProps) {
  const loggedUserStringified = localStorage.getItem("bitzen-user")
  if (isPublic) {
    if (loggedUserStringified || isNotFound) return <Navigate to="/" />
    return <Outlet />
  }

  if (!loggedUserStringified || isNotFound) return <Navigate to="/login" />

  if (isNotFound) return <Navigate to="/" />

  return (
    <Layout>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </Layout>
  )
}
