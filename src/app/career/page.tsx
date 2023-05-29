'use client'
import { accessData, careerLandingData, cultureData, faqData, howItWorks, interestTimeData, interestValues, peopleData, products, supportersData, tractionData, trustData, valuesData } from '@/assets/data'
import NavigationComponent from '@/components/navigation'
import Box from '@mui/material/Box';
// styles
import { AssetsStyle, PageStyle, TextStyle } from '@/styles/general'
// resources
import FooterComponent from '@/components/footer'
import { useState } from 'react';
import InputWidget from '@/assets/widgets/input';
import { InterestStyle } from '@/styles/interest';
import culture from '@/assets/images/culture.png'
import play from '@/assets/images/play.png'
import bullet from '@/assets/icons/bullet.svg'
import { formatNumber, percentage } from '@/assets/functions';
import { HomeStyle } from '@/styles/home';
import moment from 'moment';
import FAQWidget from '@/assets/widgets/faq-item';
import { CareerStyle } from '@/styles/career';

const Home = () => {
  

  return (
    <PageStyle.page>
      
      <NavigationComponent alt />
      
      <PageStyle.section type='career' spacing={0} backgroundColor='var(--color-2)' color='var(--color-white)'>
        <div>
          {careerLandingData.map((item, index) => (
            <CareerStyle.line key={index} alt={index === 1}>
              <CareerStyle.text shift={index * 5} color={item.color}>{item.title}</CareerStyle.text>
            </CareerStyle.line>
          ))}
        </div>
      </PageStyle.section>
      
      <PageStyle.section type='career' spacing={1} backgroundColor='var(--color-white)' color='var(--color-5)'>
        <CareerStyle.culture>
          <h2>The Ardilla Culture</h2>
        </CareerStyle.culture>
        <CareerStyle.cultureImage src={culture} alt='culture' />
        <CareerStyle.culture alt>
          <PageStyle.grid spacing='90px'>
            {cultureData.map((item, index) => (
              <div key={index}>
                <CareerStyle.cultureTitle>{item.title}</CareerStyle.cultureTitle>
                {item.paragraphs.map((item, index) => (
                  <CareerStyle.cultureParagraph key={index}>
                    {item}
                  </CareerStyle.cultureParagraph>
                ))}
              </div>
            ))}
          </PageStyle.grid>
        </CareerStyle.culture>
      </PageStyle.section>
      
      <PageStyle.section type='career' spacing={2} backgroundColor='var(--color-grey-2)' color='var(--color-5)'>
        <PageStyle.header>
          <CareerStyle.valuesTitle>Our Values</CareerStyle.valuesTitle>
        </PageStyle.header>
        <HomeStyle.accessSubtitle>At Ardilla, our mission is to help people across the continent build wealth and achieve well thought out financial goals. However, we cannot do it alone.</HomeStyle.accessSubtitle>
        <CareerStyle.valuesWrapper>
          <PageStyle.grid amount={4} spacing='20px'>
            {valuesData.map((item, index) => (
              <CareerStyle.valuesTab
                background={item.color}
                key={index}
                alt={index === 0 || index === 3}
                backgroundImage={item.background}
              >
                <CareerStyle.valuesTabTitle>{item.title}</CareerStyle.valuesTabTitle>
                <p>{item.description}</p>
              </CareerStyle.valuesTab>
            ))}
          </PageStyle.grid>
        </CareerStyle.valuesWrapper>
      </PageStyle.section>
      
      <PageStyle.section type='career' spacing={3} backgroundColor='var(--color-white)' color='var(--color-5)'>
        <CareerStyle.valuesTitle>People are what matters</CareerStyle.valuesTitle>
        <CareerStyle.peopleWrapper>
          <PageStyle.grid spacing='40px 80px'>
            {peopleData.map((item, index) => (
              <PageStyle.grid key={index} spacing='18px' values='60% 40%'>
                <CareerStyle.peoplePreview backgroundImage={item.image}>
                  <CareerStyle.peoplePreviewBackground />
                  <CareerStyle.peoplePreviewContent>
                    <PageStyle.grid amount={3} spacing='15px' row>
                      <div />
                      <CareerStyle.peoplePreviewPlay>
                        <CareerStyle.peoplePreviePlayImage src={play} alt='Play' />
                      </CareerStyle.peoplePreviewPlay>
                      <div>
                        <CareerStyle.peopleTitle>
                          {item.name}
                        </CareerStyle.peopleTitle>
                        <p>{item.position}</p>
                      </div>
                    </PageStyle.grid>
                  </CareerStyle.peoplePreviewContent>
                </CareerStyle.peoplePreview>
                <CareerStyle.peopleComment>{item.coomment}</CareerStyle.peopleComment>
              </PageStyle.grid>
            ))}
          </PageStyle.grid>
        </CareerStyle.peopleWrapper>
      </PageStyle.section>

      <FooterComponent />
    </PageStyle.page>
  )
}

export default Home