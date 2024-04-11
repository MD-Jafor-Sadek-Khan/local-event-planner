import { useState } from "react"
import {
  ButtonContainer,
  MapContainerCard,
  MapDescription,
  MapDescriptionContainer,
} from "./mapCard.styles"
import { MAPTYPES, mapTypeUrls } from "../Utils/mapType.utils"
import Map from "../Map/map.component"
import { Flex } from "antd"

const MapCard = ({ eventDetails: { location, date, time } }) => {
  const [activeMapUrl, setActiveMapUrl] = useState(
    mapTypeUrls[MAPTYPES.normalView]
  )
  const handleMapTypeChange = (type) => {
    setActiveMapUrl(mapTypeUrls[type])
  }
  return (
    <>
      <MapContainerCard title={`Location: ${location}`} hoverable>
        <Map address={location} activeMapUrl={activeMapUrl} />
        <MapDescriptionContainer>
          <MapDescription
            title={`${location}`}
            description={`Date: ${date}
            || ${time}`}
          />
          <Flex>
            <ButtonContainer
              onClick={() => handleMapTypeChange(MAPTYPES.sateliteView)}
              size="large"
            >
              Satelite View
            </ButtonContainer>
            <ButtonContainer
              onClick={() => handleMapTypeChange(MAPTYPES.normalView)}
              size="large"
            >
              Normal View
            </ButtonContainer>
          </Flex>
        </MapDescriptionContainer>
      </MapContainerCard>
    </>
  )
}

export default MapCard
