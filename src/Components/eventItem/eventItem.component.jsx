import { Avatar, Typography } from "antd"
import {
  CalendarTwoTone,
  ClockCircleTwoTone,
  EnvironmentTwoTone,
} from "@ant-design/icons"
import {
  EventItemContainer,
  BodyContainer,
  CoverImageContainer,
  MetaDetails,
  FooterContainer,
  FooterItemContainer,
  CoverImage,
} from "./eventItem.styled"

const EventItem = ({
  title,
  date,
  location,
  time,
  description,
  eventImageUrl,
  companyImageUrl,
}) => {
  const { Paragraph } = Typography

  return (
    <EventItemContainer
      cover={
        <CoverImageContainer>
          <CoverImage alt="example" src={eventImageUrl} />
        </CoverImageContainer>
      }
    >
      <BodyContainer>
        <MetaDetails
          avatar={<Avatar src={companyImageUrl} />}
          title={title}
          description={
            <Paragraph
              ellipsis={{ rows: 3, expandable: false, symbol: "more" }}
            >
              {description}
            </Paragraph>
          }
        />

        <FooterContainer>
          <FooterItemContainer>
            <EnvironmentTwoTone />
            &nbsp;{location}
          </FooterItemContainer>
          <FooterItemContainer>
            <ClockCircleTwoTone />
            &nbsp;{time}
          </FooterItemContainer>
          <FooterItemContainer>
            <CalendarTwoTone />
            &nbsp; {date}
          </FooterItemContainer>
        </FooterContainer>
      </BodyContainer>
    </EventItemContainer>
  )
}

export default EventItem
