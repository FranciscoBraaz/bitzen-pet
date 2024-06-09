import { Navigate, Outlet } from "react-router-dom"

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
  const loggedUserStringified = localStorage.getItem("diversiFindUser")
  if (isPublic) {
    if (loggedUserStringified || isNotFound) return <Navigate to="/" />
    return <Outlet />
  }

  if (!loggedUserStringified || isNotFound) return <Navigate to="/login" />

  if (isNotFound) return <Navigate to="/" />

  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}
