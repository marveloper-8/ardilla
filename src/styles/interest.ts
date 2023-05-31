import styled from "styled-components";
import Image from 'next/image'
// types
import { InterestsItemRules, TabRules } from "@/assets/rules";

export const InterestStyle = {
  calculator: styled.form`
    padding-right: 225px;
    @media screen and (max-width: 1200px){
      padding: 0;
    };
  `,
  submitButton: styled.button`
    display: none;
  `,
  calculatorPreview: styled.div`
    padding: 60px 70px;
    border-radius: 16px 16px 0 0;
    background: var(--color-white);
    color: var(--color-grey);
    @media screen and (max-width: 1200px){
      padding: 30px;
    };
  `,
  calculatorPreviewItem: styled.div`
    margin-bottom: 30px;
  `,
  calculatorPreviewLabel: styled.p`
    color: var(--color-grey);
  `,
  calculatorPreviewValue: styled.h3`
    font-size: 25px;
    color: var(--color-5);
  `,
  calculatorPreviewValuePercentage: styled.a`
    font-size: 18px;
    font-weight: normal;
  `,
  chart: styled(Image)`
    height: auto;
    width: 100%;
  `,
  time: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 73px;
  `,
  futureTime: styled.b`
    color: var(--color-5);
  `,


  heading1: styled.h3`
    font-size: 60px;
    @media screen and (max-width: 1200px){
      font-size: 40px;
    };
  `,
  section1: styled.div`
    margin: 25px 0 180px 0;
    padding-right: 30%;
    @media screen and (max-width: 1200px){
      padding: 0;
      margin-bottom: 25px;
    };
  `,
  title1: styled.h3`
    font-size: 22px;
    margin-bottom: 16px;
  `,
  item1: styled.div<InterestsItemRules>`
    padding: 0 50px 50px 25px;
    ${props => `
      border-left: ${props.active ? `
        3px solid var(--color-2);
      ` : `
        3px solid transparent;
      `};
      @media screen and (max-width: 800px){
        ${!props.last && 'border-left: 3px solid var(--color-2);'};
      };
    `};
    position: relative;
  `,
  bullet: styled(Image)`
    height: 20px;
    width: 20px;
    position: absolute;
    top: -10px;
    left: -11.5px;
  `,

  heading2: styled.h3`
    font-size: 50px;
  `,
  section2: styled.div`
    margin: 20px 0 180px 0;
  `,
  howItWorksTab: styled.div<TabRules>`
    padding: 40px 55px 0 55px;
    display: flex;
    color: var(--color-black);
    border-radius: 16px;
    flex-direction: column;
    ${props => `
      background-color: ${props.background};
    `};
  `,
  howItWorksPhone: styled(Image)`
    height: auto;
    width: 100%;
    margin-top: 50px;
  `,
  howItWorksTitle: styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    gap: 16px;
  `,
  howItWorksNumber: styled.h3<TabRules>`
    padding: 6px;
    font-size: 16px;
    color: var(--color-white);
    border-radius: 100px;
    ${props => `
      background-color: ${props.background};
    `};
  `,

  section3: styled.div`
    padding-top: 40px;
  `,
};