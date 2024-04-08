import { Link } from "react-router-dom"
import { Layout, Menu, Input } from "antd"
import {
  HomeOutlined,
  UserOutlined,
  CommentOutlined,
  CalendarOutlined,
  FormOutlined,
  PoweroffOutlined,
  MenuOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons"
import { useState } from "react"

const { Header } = Layout
const { Search } = Input

const Navigation = () => {
  const appMenuItems = [
    {
      key: "1",
      label: "Home",
      icon: <HomeOutlined />,
      route: "/",
    },
    {
      key: "2",
      label: "Events",
      icon: <CommentOutlined />,
      route: "/events", // Corrected route for Events
    },
    {
      key: "3",
      label: "Schedules",
      icon: <CalendarOutlined />,
      route: "/schedules", // Corrected route for Schedules
    },
    {
      key: "4", // Changed key to "4" to avoid duplication
      label: "Create Event",
      icon: <FormOutlined />,
      route: "/create-event", // Corrected route for Create Event
    },
  ]

  const userMenuItems = [
    {
      key: "1",
      label: "LogIn",
      icon: <HomeOutlined />,
      route: "/login", // Corrected route for LogIn
    },
    {
      key: "2",
      label: "SignUp",
      icon: <UserOutlined />,
      route: "/signup", // Corrected route for SignUp
    },
    // {
    //   key: "3",
    //   label: "Profile",
    //   icon: <UserOutlined />,
    //   route: "/profile",
    // },
    // {
    //   key: "4",
    //   label: "LogOut",
    //   icon: <PoweroffOutlined />,
    //   route: "/logout",
    // },
  ]

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
        // defaultSelectedKeys={["1"]}
        style={{ flex: 1, justifyContent: "center", minWidth: 0 }}
        overflowedIndicator={<MenuUnfoldOutlined /> }
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
        // defaultSelectedKeys={["0"]}
        style={{ flex: 1, justifyContent: "flex-end", minWidth: 0 }}
        overflowedIndicator={<UserOutlined />}

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
