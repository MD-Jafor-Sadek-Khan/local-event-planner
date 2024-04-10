import { Link, Outlet } from "react-router-dom"
import { MenuOutlined, UserOutlined } from "@ant-design/icons"
import { appMenuItems, userMenuItems } from "../../Utils/navigation.utils"
import {
  AppMenuContainer,
  LayoutContainer,
  Logo,
  NavigationContainer,
  OverFlowContainer,
  UserMenuContainer,
} from "./navigation.styled"

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
        <Link to={"/"}>
          <Logo>Logo</Logo>
        </Link>

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
