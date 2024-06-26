import styled from "styled-components"
import { Card } from "antd"
import breakPoints from "../../Utils/styled-components/breakPoints"

const { laptop } = breakPoints
const { Meta } = Card

export const EventItemContainer = styled(Card)`
  width: 100%;
  height: 340px;
  border: 0;
  position: relative;
  border: 15px solid transparent;

  @media (max-width: ${laptop.max}px) {
    border: 5px solid transparent;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    margin: 20px 0;
    border-radius:10px;
  }
`

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
export const CoverImageContainer = styled.div`
  height: 200px;
  width: 100%;
  background-color: transparent;
  border-radius: 15px;
`

export const CoverImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`
export const MetaDetails = styled(Meta)`
  height: 100px;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  width: 100%;
  margin-top: 15px;
`

export const FooterItemContainer = styled.div`
  padding: 4px 6px;
  background-color: cream;
  color: #5c5c5c;
`
