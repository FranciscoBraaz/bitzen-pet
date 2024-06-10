import { Flex } from "antd"
import React from "react"
import { SearchBar } from "./components/SearchBar"

// Styles
import "./index.scss"

export function Home() {
  return (
    <div className="home">
      <Flex className="home__container">
        <section>
          <SearchBar />
        </section>
        <section></section>
      </Flex>
    </div>
  )
}
