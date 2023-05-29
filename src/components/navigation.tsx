import { primaryMenuItems } from "@/assets/data"
import { NavigationRules } from "@/assets/rules";
import NavItemWidget from "@/assets/widgets/nav-item"
import ProfilePictureWidget from "@/assets/widgets/profile-picture";
import { NavigationStyle } from "@/styles/components"
import { AssetsStyle } from "@/styles/general"
import { FC } from "react";
// resources
import logo from '../assets/icons/logo.svg'

const NavigationComponent: FC<NavigationRules> = ({alt}) => {

  return (
    <NavigationStyle.wrapper alt={alt}>
      <NavigationStyle.section>
        <AssetsStyle.logo src={logo} alt='Ardilla' />
        {primaryMenuItems.map((item, index) => <NavItemWidget key={index} data={item} />)}
      </NavigationStyle.section>
      <NavigationStyle.section>
        <NavItemWidget data={{
          title: 'Sign In',
          beta: false,
          data: false
        }} />
        <AssetsStyle.button
          format='solid'
          color={alt ? 'white' : 'default'}
          alt={alt}
          spacing={0}
        >
          Create Account
        </AssetsStyle.button>
        <ProfilePictureWidget />
      </NavigationStyle.section>
    </NavigationStyle.wrapper>
  )
}

export default NavigationComponent