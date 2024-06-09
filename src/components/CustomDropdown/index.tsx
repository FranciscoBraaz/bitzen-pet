import { useNavigate } from "react-router-dom"
import { Avatar, Dropdown, Space } from "antd"
import { CaretDownOutlined } from "@ant-design/icons"

// Styles
import "./index.scss"

const options = [
  {
    key: "perfil",
    label: "Perfil",
  },
]

export function CustomDropdown() {
  const navigate = useNavigate()

  return (
    <Dropdown
      menu={{
        onClick: (item) => {
          navigate(`/${item.key}`)
        },
        items: options,
      }}
    >
      <a
        onClick={(e) => {
          e.preventDefault()
          navigate("/perfil")
        }}
      >
        <Space>
          <Avatar
            style={{
              color: "#8C8C8C",
              fontWeight: "bold",
              backgroundColor: "#E6E6E6",
              verticalAlign: "middle",
            }}
            size="large"
          >
            AM
          </Avatar>
          <CaretDownOutlined
            style={{ width: 16, height: 16, color: "#8C8C8C" }}
          />
        </Space>
      </a>
    </Dropdown>
  )
}
