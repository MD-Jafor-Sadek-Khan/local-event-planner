import { styled } from "styled-components"
import { MapContainer } from "react-leaflet"
import breakPoints from "../Utils/styled-components/breakPoints"

const { laptop } = breakPoints

export const ResponsiveMapContainer = styled(MapContainer)`
  &.leaflet-container {
    height: 60vh;
  }

  @media (max-width: ${laptop.max}) {
    &.leaflet-container {
      height: 10vh !important;
    }
  }
`
