import { Link, Outlet } from "react-router-dom"
import { Menu } from "antd"
import { MenuOutlined, UserOutlined } from "@ant-design/icons"
import { appMenuItems, userMenuItems } from "../../Utils/navigation.utils"
import {
  LayoutContainer,
  Logo,
  LogoContainer,
  MenuContainer,
  NavigationContainer,
  OverFlowContainer,
} from "./navigation.styled"

const Navigation = () => {
  return (
    <LayoutContainer>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <Logo>Logo</Logo>
        </LogoContainer>

        <MenuContainer
          justifyContent="center"
          mode="horizontal"
          overflowedIndicator={
            <OverFlowContainer padding="12px 22px" borderRadius={8}>
              <MenuOutlined />
            </OverFlowContainer>
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
        </MenuContainer>

        <MenuContainer
          justifyContent="flex-end"
          mode="horizontal"
          overflowedIndicator={
            <OverFlowContainer padding="15px 15px" borderRadius={50}>
              <UserOutlined />
            </OverFlowContainer>
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
        </MenuContainer>
      </NavigationContainer>
      <Outlet />
    </LayoutContainer>
  )
}

export default Navigation
