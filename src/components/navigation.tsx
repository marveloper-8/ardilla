import { FC } from "react";
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
import logo from '../assets/icons/logo.svg'

const NavigationComponent: FC<NavigationRules> = ({alt, landing}) => {
  return (
    <NavigationStyle.wrapper alt={alt} landing={landing}>
      <NavigationStyle.section>
        <AssetsStyle.logo src={logo} alt='Ardilla' />
        {!landing && primaryMenuItems.map((item, index) => <NavItemWidget key={index} data={item} />)}
      </NavigationStyle.section>
      {landing ? <div>&bull; Features</div> : (
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
      )}
    </NavigationStyle.wrapper>
  )
}

export default NavigationComponent