import {
  HomeOutlined,
  UserOutlined,
  CommentOutlined,
  CalendarOutlined,
  FormOutlined,
  PoweroffOutlined,

} from "@ant-design/icons"

export const appMenuItems = [
  {
    key: "1",
    label: "Home",
    icon: <HomeOutlined />,
    route: "/",
  },
  {
    key: "2",
    label: "Events",
    icon: <CommentOutlined />,
    route: "/events", // Corrected route for Events
  },
  {
    key: "3",
    label: "Schedules",
    icon: <CalendarOutlined />,
    route: "/schedules", // Corrected route for Schedules
  },
  {
    key: "4", // Changed key to "4" to avoid duplication
    label: "Create Event",
    icon: <FormOutlined />,
    route: "/create-event", // Corrected route for Create Event
  },
]

export const userMenuItems = [
  {
    key: "1",
    label: "LogIn",
    icon: <HomeOutlined />,
    route: "/login", // Corrected route for LogIn
  },
  {
    key: "2",
    label: "SignUp",
    icon: <UserOutlined />,
    route: "/signup", // Corrected route for SignUp
  },
  {
    key: "3",
    label: "Profile",
    icon: <UserOutlined />,
    route: "/profile",
  },
  {
    key: "4",
    label: "LogOut",
    icon: <PoweroffOutlined />,
    route: "/logout",
  },
]
