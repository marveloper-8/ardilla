import { FC, useState } from "react";
// types
import { NavigationRules } from "@/assets/rules";
// widgets
import NavItemWidget from "@/assets/widgets/nav-item"
import ProfilePictureWidget from "@/assets/widgets/profile-picture";
// components
import { NavigationStyle } from "@/styles/components"
// styles
import { AssetsStyle } from "@/styles/general"
// resources
import { primaryMenuItems } from "@/assets/data"
import logo from '@/assets/icons/logo.svg'
import logo2 from '@/assets/icons/logo.2.svg'
import menu from '@/assets/icons/menu.svg'

const NavigationComponent: FC<NavigationRules> = ({alt, landing}) => {
  const [openNavigation, setOpenNavigation] = useState(false)
  return (
    <NavigationStyle.wrapper alt={alt} landing={landing}>
      <NavigationStyle.section orientation='mobile'>
        <AssetsStyle.logo src={logo} alt='Ardilla' />
      </NavigationStyle.section>
      <NavigationStyle.menu src={menu} alt='menu' orientation='mobile' onClick={() => setOpenNavigation(true)} />
      <NavigationStyle.menuWrapper alt={openNavigation}>
        <NavigationStyle.close onClick={() => setOpenNavigation(false)}>&times; close</NavigationStyle.close>
        <NavigationStyle.section>
          <AssetsStyle.logo src={logo2} alt='Ardilla' orientation='mobile' />
          <AssetsStyle.logo src={logo} alt='Ardilla' orientation='desktop' />
          {!landing && primaryMenuItems.map((item, index) => <NavItemWidget key={index} data={item} />)}
        </NavigationStyle.section>
        {landing ? <div>&bull; Features</div> : (
          <NavigationStyle.section>
            <NavItemWidget data={{
              title: 'Sign In',
              beta: false,
              data: false
            }} />
            <NavigationStyle.item>
              <AssetsStyle.button
                format='solid'
                color={alt ? 'white' : 'default'}
                alt={alt}
                spacing={0}
              >
                Create Account
              </AssetsStyle.button>
            </NavigationStyle.item>
            <ProfilePictureWidget />
          </NavigationStyle.section>
        )}
      </NavigationStyle.menuWrapper>
    </NavigationStyle.wrapper>
  )
}

export default NavigationComponent