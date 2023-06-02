import { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";
// rules
import { PopupRules } from "@/assets/rules";
// styles
import { FooterStyle, PopupStyle } from "@/styles/components"
// resources
import success from '@/assets/icons/success.svg'
import celebrate from '@/assets/icons/celebrate.svg'
import { socialsData3 } from "@/assets/data"

const PopupSuccessComponent: FC<PopupRules> = ({active, setActive}) => {
  return (
    <PopupStyle.wrapper active={active}>
      <PopupStyle.content>
        <PopupStyle.navigate onClick={() => setActive(!active)}><AiOutlineLeft /> Go Back</PopupStyle.navigate>
        <PopupStyle.contentInner>
          <PopupStyle.icon src={success} alt='success' />
          <PopupStyle.title>
            <PopupStyle.icon2 src={celebrate} alt='' />
            Great!! You’re on the waitlist
          </PopupStyle.title>
          <PopupStyle.subtitle>An email would be sent to you in regards, Thank You</PopupStyle.subtitle>
          <PopupStyle.socialsWrapper>
            <PopupStyle.socials>
              {socialsData3.map((item, index) => (
                <FooterStyle.social src={item.logo} key={index} alt={item.name} />
              ))}
            </PopupStyle.socials>
          </PopupStyle.socialsWrapper>
        </PopupStyle.contentInner>
      </PopupStyle.content>
    </PopupStyle.wrapper>
  )
}

export default PopupSuccessComponent