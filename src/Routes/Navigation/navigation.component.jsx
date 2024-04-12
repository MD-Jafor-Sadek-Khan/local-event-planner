import {  Outlet } from "react-router-dom"
import { MenuOutlined, UserOutlined } from "@ant-design/icons"
import { appMenuItems, userMenuItems } from "../../Utils/navigation.utils"
import {
  AppMenuContainer,
  LayoutContainer,
  Logo,
  LogoContainer,
  NavigationContainer,
  OverFlowContainer,
  UserMenuContainer,
} from "./navigation.styled"
import logo from "../../assets/icons/appLogo.svg"

const Navigation = () => {
  return (
    <LayoutContainer>
      <NavigationContainer>
        <AppMenuContainer
          mode="horizontal"
          items={appMenuItems}
          overflowedIndicator={
            <OverFlowContainer>
              <MenuOutlined />
            </OverFlowContainer>
          }
        />
        <LogoContainer to={"/"}>
          <Logo src={logo} />
        </LogoContainer>

        <UserMenuContainer
          items={userMenuItems}
          mode="horizontal"
          overflowedIndicator={
            <OverFlowContainer>
              <UserOutlined />
            </OverFlowContainer>
          }
        />
      </NavigationContainer>
      <Outlet />
    </LayoutContainer>
  )
}

export default Navigation
