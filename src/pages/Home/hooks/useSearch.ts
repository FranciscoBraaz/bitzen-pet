import React from "react"

function useSearch() {
  const [search, setSearch] = React.useState("")

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  return { search, handleSearch }
}

export default useSearch
