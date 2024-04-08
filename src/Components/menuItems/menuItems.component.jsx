import { Menu } from "antd"
import { Link } from "react-router-dom"

const MenuItems = ({ itemsArray = [], withIcon = false }) => {
  const {Item} = Menu
  return (
    <>
      {itemsArray.map((menuItem) => {
        const { key, label, route } = menuItem
        const icon = withIcon ? menuItem.icon : null
        return (
          <Item key={key}>
            <Link to={route}>
              {icon}&nbsp;{label}
            </Link>
          </Item>
        )
      })}
    </>
  )
}

export default MenuItems
