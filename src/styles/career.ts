import styled from "styled-components";
import Image from 'next/image'
import { CareerRules, CareerTextRules, InterestsItemRules, TabImageRules, TabRules } from "@/assets/rules";

export const CareerStyle = {
  line: styled.div<CareerRules>`
    ${props => props.alt && 'text-align: right'};
    font-size: 80px;
  `,
  text: styled.div<CareerTextRules>`
    display: inline-block;
    padding: 50px 200px 0 0;
    border-radius: 6px;
    position: relative;
    ${props => `
      background: ${props.color};
      top: -${props.shift}px;
    `};
  `,
  
  culture: styled.div<CareerRules>`
    ${props => `
      padding: ${props.alt ? `40px 135px 70px 135px` : `120px 130px 100px 130px`};
    `};
  `,
  cultureImage: styled(Image)`
    width: 100%;
    height: auto;
  `,
  cultureParagraph: styled.p`
    padding-top: 24px;
  `,
  cultureTitle: styled.h3`
    font-size: 30px;
  `,

  valuesTitle: styled.h3`
    font-size: 60px;
  `,
  valuesWrapper: styled.div`
    margin-top: 95px;
  `,
  valuesTab: styled.div<TabRules>`
    border-radius: 0px 10px 0px 60px;
    color: var(--color-white);
    ${props => `
      background-color: ${props.background};
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-size: cover;
        background-repeat: no-repeat;
      `};
      ${props.alt ? `
        padding: 110px 37px 275px 37px;
        height: 90%;
      ` : `
        padding: 250px 37px 175px 37px;
      `};
    `};
  `,
  valuesTabTitle: styled.h3`
    font-size: 30px;
    padding-bottom: 65px;
  `,

  peopleWrapper: styled.div`
    margin-top: 165px;
    color: var(--color-grey);
    font-size: 14px;
  `,
  peopleComment: styled.p`
    padding-top: 30px;
  `,
  peoplePreview: styled.div<TabRules>`
    color: var(--color-white);
    border-radius: 20px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    ${props => `
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-size: cover;
        background-repeat: no-repeat;
      `};
    `};
  `,
  peoplePreviewBackground: styled.div`
    background: var(--gradient-color);
    opacity: 0.7;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  peoplePreviewContent: styled.div`
    position: relative;
  `,
  peopleTitle: styled.h3`
    font-size: 20px;
  `,
  peoplePreviewPlay: styled.div`
    text-align: center;
  `,
  peoplePreviePlayImage: styled(Image)`
    width: 60px;
    height: 60px;
    cursor: pointer;
  `,

  perksSubtitle: styled.p`
    font-size: 40px;
    line-height: 80px;
    padding: 0 22.5%;
    margin-bottom: 140px;
  `,
  perksTitle: styled.h3`
    font-size: 50px;
    transform: rotate(7.67deg);
  `,
  perksList: styled.div<TabRules>`
    padding: 180px 210px 100px 210px;
    ${props => `
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-size: contain;
        background-repeat: no-repeat;
        background-clip: border-box;
        // background-origin: content-box;
      `};
    `};
  `,
  perksIcon: styled(Image)`
    height: 30px;
    width: auto;
  `,
  perkTitle: styled.h3<CareerRules>`
    font-size: 20px;
    ${props => `
      padding: ${props.alt ? '25px 0 20px 0' : '10px 0'};
    `};
  `,
  perk: styled.div`
    text-align: left;
    color: var(--color-5);
  `,

  roles: styled.div`
    padding: 100px 0 50px 0;
  `,
  roleTitle: styled.h3`
    font-size: 32px;
  `,
  roleDescription: styled.p`
    padding: 40px 0;
  `,
  role: styled.div<TabRules>`
    padding: 50px;
    border-radius: 16px;
    color: var(--color-black);
    ${props => `
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-size: cover;
        background-repeat: no-repeat;
        background-clip: border-box;
        // background-origin: content-box;
      `};
    `};
  `,
  roleIndicators: styled.div`
    margin-bottom: 30px;
  `,
  roleIndicator: styled.div<CareerRules>`
    height: 4px;
    border-radius: 16px;
    ${props => `
      background: ${props.alt ? 'var(--color-2)' : 'var(--color-9)'};
    `};
  `,
  roleIcon: styled(Image)`
    height: 30px;
    width: auto;
    margin-top: 32px;
  `,

  hireParagraph: styled.p`
    line-height: 40px;
    font-size: 16px;
  `,

  image: styled(Image)`
    height: 600px;
    width: auto;
  `,
};