import React from "react"
import { ConfigProvider } from "antd"
import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassowrd"
import { RecoveryCode } from "./pages/RecoveryCode"
import { RedefinePassword } from "./pages/RedefinePassword"
import { SignUp } from "./pages/SignUp"

// Components
import { RoutesLayout } from "./components/RoutesLayout"

// Styles
import "./styles/reset.css"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00B8C4",
          colorLink: "#00B8C4",
          colorText: "#595959",
          colorTextHeading: "#262626",
          colorPrimaryHover: "#00A3AD",
        },
      }}
    >
      <ToastContainer theme="colored" draggable={false} />
      <Router>
        <Routes>
          <Route path="/login" element={<RoutesLayout isPublic />}>
            <Route path="" element={<SignIn />} />
          </Route>
          <Route path="/cadastro" element={<RoutesLayout isPublic />}>
            <Route path="" element={<SignUp />} />
          </Route>
          <Route path="/esqueceu-senha" element={<RoutesLayout isPublic />}>
            <Route path="" element={<ForgotPassword />} />
          </Route>
          <Route
            path="/codigo-de-recuperacao"
            element={<RoutesLayout isPublic />}
          >
            <Route path="" element={<RecoveryCode />} />
          </Route>
          <Route path="/redefinir-senha" element={<RoutesLayout isPublic />}>
            <Route path="" element={<RedefinePassword />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  )
}

export default App