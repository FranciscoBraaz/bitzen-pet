import { useState } from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"

// Styles
import "./index.scss"

interface SearchBarProps {
  handleSearch: (search: string) => void
}

export function SearchBar({ handleSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState("")

  return (
    <div className="search-bar">
      <Input
        placeholder="Pesquisar um pet"
        prefix={<SearchOutlined />}
        className="search-bar__input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button
        type="primary"
        className="search-bar__button"
        onClick={() => handleSearch(keyword)}
      >
        Buscar
      </Button>
    </div>
  )
}
