import { ConfigProvider } from "antd"
import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Contexts
import { AuthProvider } from "./contexts/authContext"

// Pages
import SignIn from "./pages/SignIn"
import { ForgotPassword } from "./pages/ForgotPassowrd"
import { RecoveryCode } from "./pages/RecoveryCode"
import { RedefinePassword } from "./pages/RedefinePassword"
import { SignUp } from "./pages/SignUp"
import { Home } from "./pages/Home"
import { PetDetails } from "./pages/PetDetails"
import { MaintainPet } from "./pages/MaintainPet"
import { Profile } from "./pages/Profile"

// Components
import { RoutesLayout } from "./components/RoutesLayout"

// Styles
import "./styles/reset.css"
import "./styles/index.scss"
import "react-toastify/dist/ReactToastify.css"
import "react-loading-skeleton/dist/skeleton.css"

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
          fontFamily: "Poppins, sans-serif",
        },
      }}
    >
      <AuthProvider>
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

            <Route path="/" element={<RoutesLayout />}>
              <Route path="" element={<Home />} />
            </Route>
            <Route path="/detalhes/:id" element={<RoutesLayout />}>
              <Route path="" element={<PetDetails />} />
            </Route>
            <Route path="/cadastrar-pet" element={<RoutesLayout />}>
              <Route path="" element={<MaintainPet />} />
            </Route>
            <Route path="/editar-pet/:id" element={<RoutesLayout />}>
              <Route path="" element={<MaintainPet />} />
            </Route>
            <Route path="/perfil" element={<RoutesLayout />}>
              <Route path="" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  )
}

export default App
