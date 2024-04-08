import { useState } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Input } from "antd"
import { MenuOutlined, UserOutlined } from "@ant-design/icons"
import { appMenuItems, userMenuItems } from "../../Utils/navigation.utils"

const { Header } = Layout
const { Search } = Input

const Navigation = () => {
  const [loading, setLoading] = useState(false)

  const handleSearch = (value) => {
    setLoading(true)
    setTimeout(() => {
      console.log("Searching for:", value)
      setLoading(false)
    }, 1000)
  }
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ color: "white" }}>Logo</h1>
      </div>

      {/* <Search
        placeholder="input search loading with enterButton"
        loading={loading}
        enterButton
        style={{ flex: 1, justifyContent: "flex-end", minWidth: 0 }}
        onSearch={handleSearch}
      /> */}

      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          minWidth: 0,
        }}
        overflowedIndicator={
          <span
            style={{
              display: "flex",
              boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.5)",
              alignItems: "center",
              borderRadius: "8px",
              justifyContent: "center",
              fontSize: "12px",
              padding: "12px 22px",
            }}
          >
            <MenuOutlined />
          </span>
        }
      >
        {appMenuItems.map((menuItem) => {
          const { key, label, route, icon } = menuItem
          return (
            <Menu.Item key={key}>
              <Link to={route}>
                {icon}&nbsp;{label}
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>

      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          minWidth: 0,
        }}
        overflowedIndicator={
          <span
            style={{
              display: "flex",
              boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.5)",
              alignItems: "center",
              borderRadius: "50px",
              justifyContent: "center",
              padding: "15px 15px",
            }}
          >
            <UserOutlined />
          </span>
        }
      >
        {userMenuItems.map((menuItem) => {
          const { key, label, route } = menuItem
          return (
            <Menu.Item key={key}>
              <Link to={route}>{label}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Header>
  )
}

export default Navigation
