import { SearchOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"
import React from "react"

// Styles
import "./index.scss"

export function SearchBar() {
  return (
    <div className="search-bar">
      <Input
        placeholder="Pesquisar um pet"
        prefix={<SearchOutlined />}
        className="search-bar__input"
      />
      <Button type="primary" className="search-bar__button">
        Buscar
      </Button>
    </div>
  )
}
