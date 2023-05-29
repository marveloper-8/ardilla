import { NavigationStyle } from "@/styles/components"
import { NavItemRules } from "../rules"
// resources
import { AssetsStyle } from "@/styles/general"

const NavItemWidget = ({ data } : { data: NavItemRules }) => {
  return (
    <NavigationStyle.item>
      {data.title}
      {data.data && <AssetsStyle.caretDown />}
      {data.beta && <AssetsStyle.beta>Beta</AssetsStyle.beta>}
    </NavigationStyle.item>
  )
}

export default NavItemWidget