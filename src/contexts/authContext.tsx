import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

type AuthProviderType = {
  children: React.ReactNode
}

type UserInfo = {
  document: string
  email: string
  name: string
  phone_number: string
}

export type UserData = {
  user: UserInfo
  token: string
}

interface AuthContextData {
  userData: UserData | null
  setUserData: (data: UserData) => void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderType) {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const loggedUser =
      localStorage.getItem("bitzen-user") ||
      sessionStorage.getItem("bitzen-user")

    if (loggedUser) {
      const loggedUserParsed = JSON.parse(loggedUser)
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${loggedUserParsed.token}`
      setUserData(loggedUserParsed)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}
