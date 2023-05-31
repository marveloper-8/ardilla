import styled from "styled-components";
import Image from 'next/image'
import { AiFillCheckCircle } from "react-icons/ai";
import { CareerRules, ProductRules, TabImageRules, TabRules } from "@/assets/rules";

export const HomeStyle = {
  subtitle: styled.p`
    padding: 0 25%;
    @media screen and (max-width: 1400px){
      padding: 0 50px;
    };
  `,
  item: styled.span`
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
  `,
  landingImage: styled(Image)`
    width: 90%;
    height: auto;
    margin-top: 40px;
    @media screen and (max-width: 1400px){
      width: 100%;
    };
  `,


  productImageWrapper: styled.div`
    background-color: var(--color-7-1);
    padding: 65px 75px 0 75px;
    border-radius: 24px 24px 0px 0px;
    overflow: hidden;
    text-align: center;
    display: flex;
    position: relative;
    height: 550px;
    @media screen and (max-width: 1400px){
      height: 400px;
      margin-top: 30px;
    };
  `,
  productImageContent: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 0 20px;
  `,
  productImage: styled(Image)`
    height: auto;
    width: 100%;
  `,
  productScrollContainer: styled.div<ProductRules>`
    overflow: hidden;
    height: ${props => props.height}px;
    margin-bottom: 100px;
  `,
  productScrollIndicatorWrapper: styled.div`
    height: 8px;
    width: 100%;
    background-color: var(--color-9);
    border-radius: 16px;
    overflow: hidden;
  `,
  productScrollIndicator: styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--color-2);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s;
    border-radius: 16px;
  `,
  productScrollWrapper: styled.div`
    height: 100%;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  `,
  productScrollItem: styled.div`
    scroll-snap-align: start;
    margin-bottom: 100px;
  `,
  productComingSoon: styled.div`
    background-color: var(--color-7-2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px;
    color: var(--color-white);
    font-weight: bolder;
    font-size: 40px;
    z-index: 10;
  `,
  productTitle: styled.h3`
    color: var(--color-7);
  `,
  productSubsubtitle: styled.p`
    color: var(--color-grey);
    margin-top: 10px;
  `,
  productListWrapper: styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 65px;
    @media screen and (max-width: 800px){
      margin-top: 40px;
    };
  `,
  productListItem: styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    font-size: 16px;
    @media screen and (max-width: 800px){
      margin-bottom: 15px;
    };
  `,
  check: styled(AiFillCheckCircle)`
    margin-right: 30px;
    color: var(--color-7);
  `,


  transparencyImage: styled(Image)`
    height: auto;
    width: 100%;
  `,
  transparencyLeft: styled.div`
    @media screen and (max-width: 800px){
      order: 2;
    };
  `,
  transparencyRight: styled.div`
    @media screen and (max-width: 800px){
      order: 1;
      margin-bottom: 50px;
    };
  `,


  investmentContent: styled.div`
    padding: 0 400px 160px 0;
    @media screen and (max-width: 1400px){
      padding-right: 200px;
    };
    @media screen and (max-width: 1200px){
      padding-right: 100px;
    };
    @media screen and (max-width: 1000px){
      padding-right: 0px;
    };
  `,
  investmentTitle: styled.h2`
    margin-bottom: 25px;
  `,
  investmentSubtitle: styled.h4`
    padding-right: 300px;
    line-height: 50px;
    @media screen and (max-width: 1000px){
      padding-right: 150px;
    };
    @media screen and (max-width: 600px){
      padding-right: 0;
    };
  `,

  accessSubtitle: styled.p`
    padding-right: 50%;
    @media screen and (max-width: 800px){
      padding-right: 0;
    };
  `, 
  accessContent: styled.div`
    padding: 115px 170px;
    background-color: var(--color-8);
    box-shadow: var(--box-shadow);
    border-radius: 4px 4px 0 0;
    margin-top: 80px;
    @media screen and (max-width: 1200px){
      padding: 50px;
    };
    @media screen and (max-width: 800px){
      padding: 20px 20px 100px 30px;
    };
  `,
  accessTitle: styled.h3`
    font-size: 30px;
  `, 
  accessDescription: styled.p`
    padding-right: 100px;
    margin: 25px 0 35px 0;
    @media screen and (max-width: 1200px){
      padding: 0;
      margin: 10px 0;
    };
  `, 


  supportersWrapper: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  supporters: styled.div<CareerRules>`
    display: flex;
    align-items: flex-end;
    ${props => `
      ${props.alt && `
        @media screen and (max-width: 800px){
          display: block;
        };
      `};
    `};
  `,
  supportersTag: styled.div`
    padding: 20px 0 20px 35px;
    border-left: 1px solid var(--color-grey);
    font-size: 18px;
    margin-left: 50px;
    @media screen and (max-width: 800px){
      margin: 20px 0 0 0;
      border-left: none;
      border-top: 1px solid var(--color-grey);
      padding: 20px 0;
    };
  `,
  preview: styled.div`
    filter: var(--box-shadow-2);
    border-radius: 20px;
    background: var(--color-9);
    padding: 65px 210px 0 210px;
    margin-top: 105px;
    @media screen and (max-width: 1200px){
      padding-left: 100px;
      padding-right: 100px;
    };
    @media screen and (max-width: 800px){
      padding-left: 25px;
      padding-right: 25px;
      margin-top: 0;
    };
  `,
  previewTitle: styled.h2`
    font-size: 35px;
  `,
  previewSubtitle: styled.p`
    padding: 25px 25% 75px 25%;
    @media screen and (max-width: 1200px){
      padding-left: 100px;
      padding-right: 100px;
    };
    @media screen and (max-width: 1000px){
      padding-left: 0;
      padding-right: 0;
    };
  `,
  previewImage: styled(Image)`
    width: 100%;
    height: auto;
    margin: 0;
  `,

  tractionTab: styled.div<TabRules>`
    padding: 250px 42px 155px 42px;
    text-align: left;
    ${props => `
      background-color: ${props.background};
      color: ${props.color};
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-position: right bottom;
        background-size: contain;
        background-repeat: no-repeat;
        background-clip: border-box;
        // background-origin: content-box;
      `};
      border-radius: ${props.alt ? `
        70px 70px 0 70px
      ` : `
        70px 70px 70px 0
      `};
    `};
    @media screen and (max-width: 1600px){
      padding: 150px 30px 100px 30px;
    };
    @media screen and (max-width: 1400px){
      padding: 150px 20px 100px 20px;
    };
    @media screen and (max-width: 800px){
      border-radius: 70px 70px 70px 0;
    };
  `,
  tractionLabel: styled.h3<TabRules>`
    display: flex;
    align-items: center;
    font-size: 20px;
  `,
};