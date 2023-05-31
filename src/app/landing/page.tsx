'use client'
// components
import NavigationComponent from '@/components/navigation'
import FooterComponent from '@/components/footer'
// styles
import { AssetsStyle, PageStyle, TextStyle } from '@/styles/general'
import { LandingStyle } from '@/styles/landing';
// resources
import { expectationsData } from '@/assets/data'
import more from '@/assets/images/more.png'
import portalPhone from '@/assets/images/portal-phone.png'
import portalBackground from '@/assets/images/portal-background.png'
import portalBackground2 from '@/assets/images/portal-background.2.png'
import send from '@/assets/icons/send.2.svg'

const Home = () => {

  return (
    <PageStyle.page>
      
      <PageStyle.section center backgroundImage={portalBackground} full type='landing' spacing={0} backgroundColor='var(--color-2)' color='var(--color-white)'>
        <NavigationComponent landing />
        <LandingStyle.landingPhone src={portalPhone} alt='preview' />
        <LandingStyle.landingSection>
          <LandingStyle.landingTitle>
            Your portal to <TextStyle.text backgroundImage={more}>more</TextStyle.text>
          </LandingStyle.landingTitle>
          <LandingStyle.landingSubtitle>Wealth building is possible. You just need the right partner. With better financial tools, Ardilla has made it so much easier for you to start building wealth. Take advantage of the Ardilla platform by signing up with your email address.</LandingStyle.landingSubtitle>
          <LandingStyle.form>
            <AssetsStyle.input
              placeholder='someone@example.com'
              type='email'
            />
            <AssetsStyle.button
              format='solid'
              color='default'
              spacing={4}
            >
              <AssetsStyle.label alt>
                Access More <AssetsStyle.icon alt2 src={send} alt='Ardilla' />
              </AssetsStyle.label>
            </AssetsStyle.button>
          </LandingStyle.form>
        </LandingStyle.landingSection>
        <LandingStyle.landingBottom />
      </PageStyle.section>
      
      <PageStyle.section type='landing' spacing={1} backgroundColor='var(--color-white)' color='var(--color-5)'>
        <LandingStyle.title2 backgroundImage={portalBackground2}>
          <LandingStyle.circle />
          <LandingStyle.circle alt />
          What you can expect
        </LandingStyle.title2>
        <LandingStyle.tabWrapper>
          {expectationsData.map((item, index) => (
            <LandingStyle.tab key={index} backgroundImage={item.backgroundImage} alt={item.alt}>
              <LandingStyle.tabText>{item.title}</LandingStyle.tabText>
            </LandingStyle.tab>
          ))}
        </LandingStyle.tabWrapper>
      </PageStyle.section>

      <FooterComponent alt />
    </PageStyle.page>
  )
}

export default Home