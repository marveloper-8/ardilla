import styled from "styled-components";
import Image from 'next/image'
import { CareerRules, CareerTextRules, LandingRules, TabImageRules, TabRules } from "@/assets/rules";

export const LandingStyle = {
  landingPhone: styled(Image)<LandingRules>`
    width: 375px;
    height: auto;
    position: absolute;
    right: 0;
    z-index: 10;
    bottom: -100px;
  `,
  landingSection: styled.div`
    padding: 0 27.5%;
  `,
  landingTitle: styled.h2`
    font-size: 100px;
  `,
  landingSubtitle: styled.p`
    padding: 0 100px;
  `,
  form: styled.form`
    background: var(--color-white);
    border-radius: 100px;
    padding: 5px 7px;
    display: flex;
    margin-top: 75px;
    align-items: center;
  `,
  landingBottom: styled.div`
    border-radius: 30px 30px 0 0;
    height: 50px;
    background: var(--color-white);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  `,

  title2: styled.div<TabRules>`
    display: inline-block;
    padding: 16px 50px 17px 46px;
    text-align: center;
    font-weight: bold;
    font-size: 23px;
    mix-blend-mode: multiply;
    border-radius: 30px;
    background-color: var(--color-2);
    color: var(--color-white);
    font-size: 30px;
    position: relative;
    ${props => `
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-repeat: no-repeat;
        background-clip: border-box;
        background-size: cover;
      `}
    `};
  `,
  circle: styled.div<TabRules>`
    border: 6px solid var(--color-white);
    position: absolute;
    ${props => `
      ${props.alt ? `
        width: 29px;
        height: 29px;
        border-radius: 29px;
        bottom: 0;
        right: 0;
        background: var(--gradient-color-2);
      ` : `
        width: 19px;
        height: 19px;
        border-radius: 19px;
        top: 0;
        left: 0;
        background: var(--gradient-color-2);
      `};
    `};
  `,
  tabWrapper: styled.div`
    padding-top: 115px;
    padding-bottom: 40px;
    overflow-x: scroll;
    white-space: nowrap;
  `,
  tab: styled.div<TabRules>`
    width: 300px;
    height: 200px;
    font-weight: bold;
    font-size: 20px;
    margin-right: 25px;
    display: inline-block;
    border-radius: 12px;
    ${props => `
      color: ${props.alt ? '' : 'var(--color-white)'};
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-repeat: no-repeat;
        background-clip: border-box;
        background-size: cover;
      `}
    `};
  `,
  tabText: styled.div`
    white-space: normal;
    padding: 37.5px 45px 83px 30px;
  `,
};