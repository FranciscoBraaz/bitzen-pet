import { useEffect, useState } from "react"

type MapRoutes = {
  [key: string]: string
}

const mapRoutes: MapRoutes = {
  "/": "Seus pets",
  detalhes: "Detalhes",
  cadastrar: "Novo pet",
  editar: "Editar pet",
  perfil: "Perfil",
}

export function useHeader() {
  const pathname = window.location.pathname
  const [activeTab, setActiveTab] = useState("home")
  const [pageTitle, setPageTitle] = useState("Seus pets")

  function handleTabChange(key: string) {
    setActiveTab(key)
  }

  useEffect(() => {
    function handleChangePageTitle() {
      if (pathname === "/") {
        setPageTitle("Seus pets")
        return
      }

      const route = pathname.split("/")[1]

      Object.keys(mapRoutes).forEach((key: string) => {
        if (route.includes(key)) {
          setPageTitle(mapRoutes[key])
        }
      })
    }

    handleChangePageTitle()
  }, [pathname])

  return { activeTab, pageTitle, handleTabChange }
}
