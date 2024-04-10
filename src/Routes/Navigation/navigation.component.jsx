import { Link, Outlet } from "react-router-dom"
import { Menu } from "antd"
import { MenuOutlined, UserOutlined } from "@ant-design/icons"
import { appMenuItems, userMenuItems } from "../../Utils/navigation.utils"
import {
  AppMenuContainer,
  AppMenuOverFlowContainer,
  LayoutContainer,
  Logo,
  LogoContainer,
  NavigationContainer,
  UserMenuContainer,
  UserMenuOverFlowContainer,
} from "./navigation.styled"

const Navigation = () => {
  return (
    <LayoutContainer>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Logo>Logo</Logo>
        </LogoContainer>

        <AppMenuContainer
          mode="horizontal"
          items={appMenuItems}
          overflowedIndicator={
            <AppMenuOverFlowContainer>
              <MenuOutlined />
            </AppMenuOverFlowContainer>
          }
        />

        <UserMenuContainer
          items={userMenuItems}
          mode="horizontal"
          overflowedIndicator={
            <UserMenuOverFlowContainer>
              <UserOutlined />
            </UserMenuOverFlowContainer>
          }
        />
      </NavigationContainer>
      <Outlet />
    </LayoutContainer>
  )
}

export default Navigation
