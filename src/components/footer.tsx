import { footerData, primaryMenuItems, socialsData } from "@/assets/data"
import { PageRules } from "@/assets/rules";
import NavItemWidget from "@/assets/widgets/nav-item"
import ProfilePictureWidget from "@/assets/widgets/profile-picture";
import { FooterStyle, NavigationStyle } from "@/styles/components"
import { AssetsStyle, PageStyle } from "@/styles/general"
import { useEffect, useRef, useState } from "react";
// resources
import background from '../assets/images/footer-background.png'
import phone from '../assets/images/footer.png'

const FooterComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const divHeight = ref.current.offsetHeight;
      setHeight(divHeight);
    }
  }, []);
  return (
    <FooterStyle.wrapper>
      <FooterStyle.downloadWrapper ref={ref} offset={height / 2}>
        <FooterStyle.download backgroundImage={background}>
          <PageStyle.grid>
            <FooterStyle.content>
              <h3>Download for free</h3>
              <h3>Start saving Today</h3>
              <AssetsStyle.button
                format='solid'
                color='white'
                spacing={3}
              >
                Create Account
              </AssetsStyle.button>
            </FooterStyle.content>
            <FooterStyle.footerImageWrapper>
              <FooterStyle.footerImage src={phone} alt='Phone' />
            </FooterStyle.footerImageWrapper>
          </PageStyle.grid>
        </FooterStyle.download>
      </FooterStyle.downloadWrapper>

      <PageStyle.grid spacing='60px' amount={5}>
        {footerData.map((item, index) => (
          <div key={index}>
            {item.map((item, index) => (
              <FooterStyle.listContainer key={index}>
                <FooterStyle.title>{item.title}</FooterStyle.title>
                <FooterStyle.listWrapper>
                  {item.data.map((item, index) => (
                    <FooterStyle.listItem key={index}>
                      {item.title}
                      {item.comingSoon && <FooterStyle.comingSoon>Coming Soon</FooterStyle.comingSoon>}
                    </FooterStyle.listItem>
                  ))}
                </FooterStyle.listWrapper>
              </FooterStyle.listContainer>
            ))}
          </div>
        ))}
      </PageStyle.grid>
      <FooterStyle.bottom>
        <FooterStyle.copyrightSocials>
          <div>&copy; 2022 Ardilla. All right reserved</div>
          <FooterStyle.socials>
            {socialsData.map((item, index) => (
              <FooterStyle.social src={item.logo} key={index} alt={item.name} />
            ))}
          </FooterStyle.socials>
        </FooterStyle.copyrightSocials>
        <p>
          Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users
        </p>
      </FooterStyle.bottom>
    </FooterStyle.wrapper>
  )
}

export default FooterComponent