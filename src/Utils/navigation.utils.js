import {
  HomeOutlined,
  UserOutlined,
  CommentOutlined,
  CalendarOutlined,
  FormOutlined,
  PoweroffOutlined,

} from "@ant-design/icons"
import {Link} from 'react-router-dom'


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
    route: "events/", 
  },
  {
    key: "3",
    label: "Schedules",
    icon: <CalendarOutlined />,
    route: "/schedules", 
  },
  {
    key: "4",
    label: "Create Event",
    icon: <FormOutlined />,
    route: "/create-event", 
  },
]

export const userMenuItems = [
  {
    key: "1",
    label: "LogIn",
    icon: <HomeOutlined />,
    route: "/login", 
  },
  {
    key: "2",
    label: "SignUp",
    icon: <UserOutlined />,
    route: "/signup", 
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
