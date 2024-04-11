import { Avatar, Typography, ConfigProvider } from "antd"
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
} from "./eventItemCard.styled"
import { Link } from "react-router-dom"

const EventItemCard = ({
  title,
  date,
  location,
  time,
  description,
  eventImageUrl,
  companyImageUrl,
  id,
}) => {
  const { Paragraph } = Typography

  return (
    <Link to={`${id}`}>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "transparent",
          },
        }}
      >
        <EventItemContainer
          hoverable
          cover={
            <CoverImageContainer>
              <CoverImage alt={`${title} event`} src={eventImageUrl} />
            </CoverImageContainer>
          }
        >
          <BodyContainer>
            <MetaDetails
              avatar={
                <Avatar
                  src={companyImageUrl}
                  alt={`${title} events organizer `}
                />
              }
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
      </ConfigProvider>
    </Link>
  )
}

export default EventItemCard
