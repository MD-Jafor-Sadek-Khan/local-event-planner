import styled from "styled-components"
import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"

const { Header } = Layout

export const LayoutContainer = styled(Layout)`
  display: flex;
`

export const NavigationContainer = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
export const LogoContainer = styled(Link)`
  flex: 1;
`

export const Logo = styled.h1`
  color: white;
`

export const AppMenuContainer = styled(Menu)`
  flex: 1;
  justify-content: "center";
  align-items: center;
  min-width: 0;
`
Menu.defaultProps = {
  theme: "dark",
}

export const UserMenuContainer = styled(AppMenuContainer)`
  justify-content: "flex-end";
`

export const AppMenuOverFlowContainer = styled.div`
  display: flex;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  font-size: 12px;
  padding: 12px 22px;
`

export const UserMenuOverFlowContainer = styled(AppMenuOverFlowContainer)`
  border-radius: 50px;
  padding: 15px 15px;
`
