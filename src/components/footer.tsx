import { FC, useEffect, useRef, useState } from "react";
// rules
import { FooterRules } from "@/assets/rules";
// styles
import { FooterStyle } from "@/styles/components"
import { AssetsStyle, PageStyle } from "@/styles/general"
// resources
import background from '@/assets/images/footer-background.png'
import phone from '@/assets/images/footer.png'
import { footerData, socialsData, socialsData2 } from "@/assets/data"

const FooterComponent: FC<FooterRules> = ({alt}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const divHeight = ref.current.offsetHeight;
      setHeight(divHeight);
    }
  }, []);
  return (
    <FooterStyle.wrapper alt={alt}>
      {alt ? (
        <FooterStyle.copyrightSocials>
          <FooterStyle.copyright>&copy; 2022 Ardilla. All right reserved</FooterStyle.copyright>
          <FooterStyle.socials>
            {socialsData2.map((item, index) => (
              <FooterStyle.social src={item.logo} key={index} alt={item.name} />
            ))}
          </FooterStyle.socials>
        </FooterStyle.copyrightSocials>
      ) : (
        <>
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
              <FooterStyle.copyright>&copy; 2022 Ardilla. All right reserved</FooterStyle.copyright>
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
        </>
      )}
    </FooterStyle.wrapper>
  )
}

export default FooterComponent