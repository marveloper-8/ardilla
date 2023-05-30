'use client'
import { accessData, careerLandingData, cultureData, expectationsData, faqData, hireData, howItWorks, interestTimeData, interestValues, peopleData, perksData, products, rolesData, supportersData, tractionData, trustData, valuesData } from '@/assets/data'
import NavigationComponent from '@/components/navigation'
import Box from '@mui/material/Box';
// styles
import { AssetsStyle, PageStyle, TextStyle } from '@/styles/general'
// resources
import FooterComponent from '@/components/footer'
import { useEffect, useRef, useState } from 'react';
import InputWidget from '@/assets/widgets/input';
import { InterestStyle } from '@/styles/interest';
import culture from '@/assets/images/culture.png'
import more from '@/assets/images/more.png'
import portalPhone from '@/assets/images/portal-phone.png'
import image from '@/assets/images/image.png'
import portalBackground from '@/assets/images/portal-background.png'
import portalBackground2 from '@/assets/images/portal-background.2.png'
import send from '@/assets/icons/send.2.svg'
import code from '@/assets/icons/code.svg'
import { formatNumber, percentage } from '@/assets/functions';
import { HomeStyle } from '@/styles/home';
import moment from 'moment';
import FAQWidget from '@/assets/widgets/faq-item';
import { CareerStyle } from '@/styles/career';
import { LandingStyle } from '@/styles/landing';

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