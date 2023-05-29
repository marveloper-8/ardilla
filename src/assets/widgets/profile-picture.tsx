import { NavigationStyle } from "@/styles/components"
import { NavItemRules } from "../rules"
// resources
import { AssetsStyle } from "@/styles/general"
import profile from '@/assets/images/profile.png'

const ProfilePictureWidget = () => {
  return (
    <NavigationStyle.item>
      <AssetsStyle.profilePictureWrapper>
        <AssetsStyle.profilePicture src={profile} alt='Profile Picture' />
      </AssetsStyle.profilePictureWrapper>
      <AssetsStyle.arrowDown />
    </NavigationStyle.item>
  )
}

export default ProfilePictureWidget