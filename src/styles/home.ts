import styled from "styled-components";
import Image from 'next/image'
import { AiFillCheckCircle } from "react-icons/ai";
import { TabImageRules, TabRules } from "@/assets/rules";

export const HomeStyle = {
  subtitle: styled.p`
    padding: 0 25%;
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
  `,

  productImageWrapper: styled.div`
    background-color: var(--color-7);
    padding: 65px 75px 0 75px;
    border-radius: 24px 24px 0px 0px;
    opacity: .8;
    overflow: hidden;
    text-align: center;
    display: flex;
  `,
  productImage: styled(Image)`
    height: 100%;
    width: auto;
    margin: 0;
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
  `,
  productListItem: styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    font-size: 16px;
  `,
  check: styled(AiFillCheckCircle)`
    margin-right: 30px;
    color: var(--color-7);
  `,

  transparencyImage: styled(Image)`
    height: auto;
    width: 100%;
  `,

  investmentContent: styled.div`
    padding: 0 400px 160px 0;
  `,
  investmentTitle: styled.h2`
    margin-bottom: 25px;
  `,
  investmentSubtitle: styled.h4`
    padding-right: 300px;
    line-height: 50px;
  `,

  accessSubtitle: styled.p`
    padding-right: 50%;
  `, 
  accessContent: styled.div`
    padding: 115px 170px;
    background-color: var(--color-8);
    box-shadow: var(--box-shadow);
    border-radius: 4px 4px 0 0;
    margin-top: 80px;
  `,
  accessTitle: styled.h3`
    font-size: 30px;
  `, 
  accessDescription: styled.p`
    padding-right: 100px;
    margin: 25px 0 35px 0;
  `, 

  trustImage: styled.div<TabImageRules>`
    ${props => `
      height: 30vw;
      border-radius: 15px;
      cursor: pointer;
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-position: right bottom;
        background-size: cover;
        background-repeat: no-repeat;
        background-clip: border-box;
        background-origin: content-box;
      `};
    `};
  `,

  supportersWrapper: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  supporters: styled.div`
    display: flex;
    align-items: flex-end;
  `,
  supportersTag: styled.div`
    padding: 20px 0 20px 35px;
    border-left: 1px solid var(--color-grey);
    font-size: 18px;
  `,
  preview: styled.div`
    filter: var(--box-shadow-2);
    border-radius: 20px;
    background: var(--color-9);
    padding: 65px 210px 0 210px;
    margin-top: 105px;
  `,
  previewTitle: styled.h2`
    font-size: 35px;
  `,
  previewSubtitle: styled.p`
    padding: 25px 25% 75px 25%;
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
  `,
  tractionLabel: styled.h3<TabRules>`
    display: flex;
    align-items: center;
    font-size: 20px;
  `,
};