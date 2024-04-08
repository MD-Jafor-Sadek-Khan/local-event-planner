import styled from "styled-components"
import { Layout, Menu, Input } from "antd"

const { Header } = Layout

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
export const LogoContainer = styled.div`
  flex: 1;
`

export const Logo = styled.h1`
  color: white;
`
export const OverFlowContainer = styled.div`
  display: flex;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
  align-items: center;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  justify-content: center;
  font-size: 12px;
  padding: ${({ padding }) => padding};
`

Menu.defaultProps = {
  theme: "dark",
  size: "medium",
}
export const MenuContainer = styled(Menu)`
  flex: 1;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  min-width: 0;
`
