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
  padding: 20px 0;
`

export const Logo = styled.h1`
  color: white;
`

export const AppMenuContainer = styled(Menu)`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row-reverse;
  align-items: center;
  min-width: 0;
`
Menu.defaultProps = {
  theme: "dark",
}

export const UserMenuContainer = styled(AppMenuContainer)`
  justify-content: flex-end;
  flex-direction: row;
`

export const OverFlowContainer = styled.div`
  display: flex;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  font-size: 12px;
  padding: 20px 20px;
`
