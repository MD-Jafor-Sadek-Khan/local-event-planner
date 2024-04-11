import styled from "styled-components"
import { Card, Button } from "antd"
import breakPoints from "../Utils/styled-components/breakPoints"

const { laptop } = breakPoints

export const MapContainerCard = styled(Card)`
  width: 47%;
  text-align: center;
  ${'' /* border-radius: 30px; */}
  z-index: 0;

  @media (max-width: ${laptop.max}px) {
    width: 100%;
    border-radius: 0;
  }
`

export const MapDescriptionContainer = styled.div`
  display: flex;
  margin: 20px 20px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (max-width: ${laptop.max}px) {
    margin: 20px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`

export const MapDescription = styled(Card.Meta)`
  text-align:start;
  margin-right: 20px;

  @media (max-width: ${laptop.max}px) {
    margin: 0;
  }
`

export const ButtonContainer = styled(Button)`
  margin: 10px 7px;
`
