import Image from 'next/image'
import styled from "styled-components";
// types
import { FooterRules, NavigationRules, TabImageRules, ResponsivenessRules } from "@/assets/rules";

export const NavigationStyle = {
  wrapper: styled.nav<NavigationRules>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${props => `
      ${props.alt && `background: var(--color-2)`};
      ${props.landing ? 'margin-bottom: 108px' : `
        padding: 20px 20vw;
        @media screen and (max-width: 1700px){
          padding: 20px 135px;
        };
        @media screen and (max-width: 1400px){
          padding: 20px 20px;
        };
      `};
    `};
  `,
  menuWrapper: styled.nav<NavigationRules>`
    @media screen and (max-width: 1200px){
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: var(--color-white);
      color: var(--color-2);
      padding: 40px;
      z-index: 100;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: .5s ease all;
    };
    @media screen and (min-width: 1200px){
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    };
    ${props => `
      ${props.alt ? `
        left: 0;
      ` : `
        left: 110vw;
      `};
    `};
  `,
  close: styled.div<ResponsivenessRules>`
    display: none;
    @media screen and (max-width: 1200px){
      display: block;
      position: absolute;
      top: 65px;
      right: 50px;
    };
  `,
  section: styled.section<ResponsivenessRules>`
    display: flex;
    align-items: center;
    gap: 58px;
    @media screen and (max-width: 1200px){
      display: block;
      text-align: left;
    };
    ${props => `
      ${props.orientation === 'mobile' && `
        @media screen and (min-width: 1200px){
          display: none;
        };
      `};
    `};
  `,
  item: styled.span`
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
    @media screen and (max-width: 1200px){
      margin-bottom: 25px;
    };
  `,
  menu: styled(Image)<ResponsivenessRules>`
    width: 32px;
    height: 32px;
    @media screen and (max-width: 1200px){
      display: block;
    };
    @media screen and (min-width: 1200px){
      display: none;
    };
  `,
};

export const FooterStyle = {
  wrapper: styled.footer<FooterRules>`
    ${props => `
      ${props.alt ? `
        color: var(--color-2);
        padding: 115px 135px 75px 135px;
        background-color: var(--color-white);
        @media screen and (max-width: 800px){
          padding: 20px;
          text-align: left;
        };
      ` : `
        padding: 0 150px 40px 150px;
        background: var(--color-2);
      `}
    `};
    @media screen and (max-width: 1600px){
      padding-left: 100px;
      padding-right: 100px;
    };
    @media screen and (max-width: 1400px){
      padding-left: 50px;
      padding-right: 50px;
    };
    @media screen and (max-width: 800px){
      padding-left: 20px;
      padding-right: 20px;
    };
  `,
  downloadWrapper: styled.div<FooterRules>`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: -${props => props.offset}px;
    left: 0;
  `,
  download: styled.div<TabImageRules>`
    background-color: var(--color-5);
    border-radius: 16px;
    color: var(--color-white);
    width: 70%;
    ${props => `
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-position: right bottom;
        background-size: cover;
        background-repeat: no-repeat;
        background-clip: border-box;
        // background-origin: content-box;
      `};
    `};
    @media screen and (max-width: 1600px){
      width: 80%;
    };
    @media screen and (max-width: 1300px){
      width: 100%;
    };
  `,
  footerImage: styled(Image)`
    width: 80%;
    height: auto;
    margin-top: 65px;
  `,
  footerImageWrapper: styled.div`
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 800px){
      display: none;
    };
  `,
  content: styled.div`
    padding: 75px 40px 60px 85px;
    @media screen and (max-width: 1200px){
      padding: 30px 40px;
      padding-right: 0;
    };
    @media screen and (max-width: 1200px){
      padding: 20px;
    };
  `,
  title: styled.h2`
    font-size: 13px;
    line-height: 32px;
  `,
  listContainer: styled.div`
    margin-bottom: 20px;
  `,
  listWrapper: styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 16px;
  `,
  listItem: styled.li`
    margin-bottom: 2px;
    line-height: 32px;
  `,
  comingSoon: styled.span`
    border: 1px solid var(--color-white);
    border-radius: 62px;
    padding: 5px 5px;
    margin-left: 15px;
    font-size: 5px;
  `,
  bottom: styled.div<FooterRules>`
    ${props => !props.alt && `
      border-top: 1px solid var(--color-grey);
      padding-top: 25px;
    `};
  `,
  copyrightSocials: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 500;
    @media screen and (max-width: 800px){
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      gap: 20px;
      margin-bottom: 25px;
    };
  `,
  socials: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 800px){
      align-self: flex-start;
    };
  `,
  copyright: styled.div`
    @media screen and (max-width: 800px){
      align-self: flex-start;
    };
  `,
  social: styled(Image)`
    width: 30px;
    height: 30px;
  `,
};