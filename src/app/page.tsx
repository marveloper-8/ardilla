'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// components
import NavigationComponent from '@/components/navigation'
import FooterComponent from '@/components/footer'
// styles
import { AssetsStyle, PageStyle, TextStyle } from '@/styles/general'
import { HomeStyle } from '@/styles/home'
// resources
import { accessData, products, supportersData, tractionData, trustData } from '@/assets/data'
import phone from '@/assets/images/phone.png'
import transparencyImage from '@/assets/images/transparency.png'
import send from '@/assets/icons/send.svg'
import send_white from '@/assets/icons/send-white.svg'
import arrow from '@/assets/images/arrow.png'
import preview from '@/assets/images/preview.png'
import { CareerStyle } from '@/styles/career';
import play from '@/assets/images/play.png'
import PeopleWidget from '@/assets/widgets/people';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container: any = containerRef.current;
    const indicator = indicatorRef.current;

    const updateIndicator = () => {
      const scrollProgress = container.scrollTop / (container.scrollHeight - container.clientHeight);
      const scaleXValue = Math.max(scrollProgress, 0.10);
      gsap.set(indicator, { scaleX: scaleXValue });
    };

    updateIndicator()

    container.addEventListener('scroll', updateIndicator);
    return () => {
      container.removeEventListener('scroll', updateIndicator);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const divHeight = ref.current.offsetHeight;
      setHeight(divHeight);
    }
  }, []);

  return (
    <PageStyle.page>
      
      <NavigationComponent />
      
      <PageStyle.section spacing={0} center full>
        <PageStyle.header>
          <TextStyle.title>Your Access To More</TextStyle.title>
          <HomeStyle.subtitle>Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</HomeStyle.subtitle>
        </PageStyle.header>
        <div>
          <AssetsStyle.button
            format='solid'
            color='white'
            spacing={1}
          >
            Get Started
          </AssetsStyle.button>
        </div>
        <HomeStyle.landingImage
          src={phone}
          alt='Landing Image'
          priority
        />
      </PageStyle.section>
      
      <PageStyle.section spacing={1} curved backgroundColor='var(--color-6)' color='var(--color-5)'>
        <PageStyle.header>
          <h2>Products</h2>
        </PageStyle.header>
        <HomeStyle.productScrollContainer height={height}>
          <HomeStyle.productScrollWrapper ref={containerRef}>
            {products.map((item, index) => (  
              <HomeStyle.productScrollItem key={index}>
                <PageStyle.grid values='60% 40%' ref={ref}>
                  <div>
                    <HomeStyle.productTitle>{item.title}</HomeStyle.productTitle>
                    <h4>{item.subtitle}</h4>
                    <HomeStyle.productSubsubtitle>{item.subsubtitle}</HomeStyle.productSubsubtitle>
                    <HomeStyle.productListWrapper>
                      {item.data.map((item, index) => (
                        <HomeStyle.productListItem key={index}>
                          <HomeStyle.check />
                          {item}
                        </HomeStyle.productListItem>
                      ))}
                    </HomeStyle.productListWrapper>
                  </div>
                  <HomeStyle.productImageWrapper>
                    {item.comingSoon && <HomeStyle.productComingSoon>Coming Soon</HomeStyle.productComingSoon>}
                    <HomeStyle.productImageContent>

                    <HomeStyle.landingImage
                      src={item.image}
                      alt='Product'
                      priority
                    />
                    </HomeStyle.productImageContent>
                  </HomeStyle.productImageWrapper>
                </PageStyle.grid>
              </HomeStyle.productScrollItem>
              
            ))}
          </HomeStyle.productScrollWrapper>
        </HomeStyle.productScrollContainer>
        <HomeStyle.productScrollIndicatorWrapper>
          <HomeStyle.productScrollIndicator ref={indicatorRef} />
        </HomeStyle.productScrollIndicatorWrapper>
      </PageStyle.section>
      
      <PageStyle.section spacing={2} backgroundColor='var(--color-white)' color='var(--color-5)'>
        <PageStyle.grid>
          <HomeStyle.transparencyLeft>
            <PageStyle.header>
              <h2>We’re Keen On <TextStyle.text color='var(--color-7)'>Transparency</TextStyle.text></h2>
              <h4>Calculate your interests everytime you save on our platform</h4>
            </PageStyle.header>
            <AssetsStyle.button
              format='solid'
              color='default'
              spacing={1}
            >
              Get Started
            </AssetsStyle.button>
          </HomeStyle.transparencyLeft>
          <HomeStyle.transparencyRight>
            <HomeStyle.transparencyImage
              src={transparencyImage}
              alt='Product'
              priority
            />
          </HomeStyle.transparencyRight>
        </PageStyle.grid>
      </PageStyle.section>
      
      <PageStyle.section spacing={3} backgroundColor='var(--color-6)' color='var(--color-5)' backgroundImage={arrow}>
        <HomeStyle.investmentContent>
          <PageStyle.header spacing={1}>
            <HomeStyle.investmentTitle>Unlimited <TextStyle.text color='var(--color-teal)'>Investment Opportunities</TextStyle.text></HomeStyle.investmentTitle>
            <HomeStyle.investmentSubtitle>Plan towards your future by investing with ardilla, Grow your money confidently and securely with the available investment oppurtuinities</HomeStyle.investmentSubtitle>
          </PageStyle.header>
          <AssetsStyle.button
            format='outline'
            color='default'
            spacing={2}
          >
            <AssetsStyle.label>
              Invest with ardilla (Coming Soon) <AssetsStyle.icon src={send} alt='Ardilla' />
            </AssetsStyle.label>
          </AssetsStyle.button>
        </HomeStyle.investmentContent>
      </PageStyle.section>
      
      <PageStyle.section spacing={4}>
        <PageStyle.header>
          <h2>Access More With Your Money</h2>
          <HomeStyle.accessSubtitle>
            Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your finger tips. Why not take advantage today?
          </HomeStyle.accessSubtitle>
        </PageStyle.header>
        <AssetsStyle.button
          format='outline'
          color='white'
          spacing={2}
        >
          <AssetsStyle.label>
            Learn more about savings <AssetsStyle.icon src={send_white} alt='Ardilla' />
          </AssetsStyle.label>
        </AssetsStyle.button>
        <HomeStyle.accessContent>
          <PageStyle.grid spacing='145px 170px'>
            {accessData.map((item, index) => (
              <div key={index}>
                <AssetsStyle.icon alt={item.title} src={item.icon} type={1} />
                <HomeStyle.accessTitle>{item.title}</HomeStyle.accessTitle>
                <HomeStyle.accessDescription>{item.description}</HomeStyle.accessDescription>
                <b>Learn More</b>
              </div>
            ))}
          </PageStyle.grid>
        </HomeStyle.accessContent>
      </PageStyle.section>
      
      <PageStyle.section spacing={5} backgroundColor='var(--color-9)' color='var(--color-5)'>
        <PageStyle.header>
          <h2>Don&apos;t Take Our <TextStyle.text color='var(--color-7)'>Word</TextStyle.text> For It</h2>
          <p>Listen to testimonials from Ardilla users building wealth</p>
        </PageStyle.header>
        <PageStyle.grid amount={3} spacing='50px'>
          {trustData.map((item, index) => <PeopleWidget backgroundImage={item} key={index} />)}
        </PageStyle.grid>
      </PageStyle.section>
      
      <PageStyle.section spacing={6} center backgroundColor='var(--color-10)' color='var(--color-5)'>
        <HomeStyle.supportersWrapper>
          <HomeStyle.supporters alt>
            <HomeStyle.supporters>
              {supportersData.map((item, index) => (
                <AssetsStyle.icon
                  last={index === supportersData.length - 1}
                  alternative={index === 0}
                  alt={item.name}
                  src={item.logo}
                  type={2}
                  key={index}
                />
              ))}
            </HomeStyle.supporters>
            <HomeStyle.supportersTag>Press reviews</HomeStyle.supportersTag>
          </HomeStyle.supporters>
        </HomeStyle.supportersWrapper>

        <HomeStyle.preview>
          <HomeStyle.previewTitle>Also Available on the Web</HomeStyle.previewTitle>
          <HomeStyle.previewSubtitle>
            Increase your bread & butter on the app or on the web.The Ardilla app services are also available on the web.
          </HomeStyle.previewSubtitle>
          <HomeStyle.previewImage src={preview} alt='Preview' />
        </HomeStyle.preview>
      </PageStyle.section>
      
      <PageStyle.section spacing={7} center>
        <PageStyle.header spacing={2}>
          <h2>Traction</h2>
          <p>Our products and investments grossed 1.1 billion in 2022</p>
        </PageStyle.header>
        <PageStyle.grid amount={3} spacing='50px'>
          {tractionData.map((item, index) => (
            <HomeStyle.tractionTab
              color={item.colors.label}
              background={item.colors.background}
              key={index}
              alt={index === 0}
              backgroundImage={item.background}
            >
              <HomeStyle.tractionLabel color={item.colors.label}>
                {item.label} &nbsp;<TextStyle.text background={item.colors.labelValue} color='var(--color-white)'> {item.labelValue} &nbsp; &nbsp;</TextStyle.text>
              </HomeStyle.tractionLabel>
              <h2>{item.value}</h2>
            </HomeStyle.tractionTab>
          ))}
        </PageStyle.grid>
      </PageStyle.section>

      <FooterComponent />
    </PageStyle.page>
  )
}

export default Home