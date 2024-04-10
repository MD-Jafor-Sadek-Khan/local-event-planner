import {
  HomeOutlined,
  UserOutlined,
  CommentOutlined,
  CalendarOutlined,
  FormOutlined,
  PoweroffOutlined,
} from "@ant-design/icons"
import { Link } from "react-router-dom"

export const appMenuItems = [
  {
    key: "1",
    label: <Link to={"/"}>Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: <Link to={"events/"}>Events</Link>,
    icon: <CommentOutlined />,
  },
  {
    key: "3",
    label: <Link to={"/schedules"}>Schedules</Link>,
    icon: <CalendarOutlined />,
  },
  {
    key: "4",
    label: <Link to={"/create-event"}>Create Event</Link>,
    icon: <FormOutlined />,
  },
]

export const userMenuItems = [
  {
    key: "1",
    label: <Link to={"/login"}>LogIn</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: <Link to={"/signup"}>SignUp</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "3",
    label: <Link to={"/profile"}>Profile</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "4",
    label: <Link to={"/logout"}>LogOut</Link>,
    icon: <PoweroffOutlined />,
  },
]
