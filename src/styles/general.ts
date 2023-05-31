import styled from "styled-components";
import Image from 'next/image'
// rules
import { AiFillCaretDown, AiOutlineDown } from "react-icons/ai";
// types
import { ButtonRules, GridRules, HeaderRules, IconRules, LabelRules, SectionRules, TextRules, ResponsivenessRules } from "@/assets/rules";

export const PageStyle = {
  page: styled.main`
    min-height: 100vh;
  `,
  section: styled.section<SectionRules>`
    ${props => `
      position: relative;
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-repeat: no-repeat;
        background-clip: border-box;
        ${props.type === 'landing' ? `
          background-size: cover;
        ` : `
          background-position: right bottom;
          background-size: 70%;
          background-origin: content-box;
        `};
      `};
      ${props.curved && `border-radius: 32px 32px 0px 0px`};
      ${props.backgroundColor && `background-color: ${props.backgroundColor}`};
      ${props.color && `color: ${props.color}`};
      ${props.full && `
        min-height: 91vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      `};
      ${props.center && `text-align: center`};
      ${props.type === 'landing' ? `
        ${props.spacing === 1 ? `
          padding: 85px 0 0 135px;
        ` : `
          padding: 70px 115px 245px 130px;
        `};
      ` : props.type === 'career' ? `
        ${props.spacing === 1 ? `
          padding: 0!important;
        ` : props.spacing === 2 ? `
          padding: 120px 135px 150px 135px;
        ` : props.spacing === 3 ? `
          padding: 120px 125px;
        ` : props.spacing === 4 ? `
          padding: 155px 45px 0 45px;
          ${props.backgroundImage && `
            background-image: url(${props.backgroundImage.src});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;
          `};
          @media screen and (max-width: 1200px){
            background-image: none;
          };
          padding-bottom: 0!important;
        ` : props.spacing === 5 ? `
          padding: 120px 145px 125px 130px;
        ` : props.spacing === 6 ? `
          padding: 140px 145px 220px 135px;
        ` : props.spacing === 7 ? `
          padding: 137px 136px 370px 120px;
          text-align: center;
          @media screen and (max-width: 1400px){
            padding-bottom: 370px!important;
          };
        ` : `
          padding: 135px 20% 165px 20%;
        `};
      ` : props.type === 'interest' ? `
        ${props.spacing === 1 ? `
          padding: 155px 135px 350px 135px;
          @media screen and (max-width: 1400px){
            padding-bottom: 200px!important;
          };
        ` : `
          padding: 105px 80px 0 135px;
          @media screen and (max-width: 1400px){
            padding-bottom: 0!important;
          };
        `};
      ` : `
        ${props.spacing === 1 ? `
          padding: 120px 130px 80px 130px;
        ` : props.spacing === 2 ? `
          padding: 130px 135px 195px 135px;
        ` : props.spacing === 3 ? `
          padding: 120px 200px 0 130px;
          @media screen and (max-width: 1400px){
            padding-bottom: 0!important;
          };
        ` : props.spacing === 4 ? `
          padding: 120px 135px 0 135px;
          @media screen and (max-width: 1400px){
            padding-bottom: 0!important;
          };
        ` : props.spacing === 5 ? `
          padding: 120px 75px 180px 75px;
        ` : props.spacing === 6 ? `
          padding: 110px 240px 150px 240px;
        ` : props.spacing === 7 ? `
          padding: 110px 135px 375px 135px;
          @media screen and (max-width: 1400px){
            padding-bottom: 200px!important;
          };
        ` : `
          padding: 65px 260px 0 260px;
          @media screen and (max-width: 1400px){
            padding-bottom: 0!important;
          };
        `};
      `};
      @media screen and (max-width: 1400px){
        padding: 50px;
      };
      ${props.type === 'landing' && 'font-family: "Clash Display"'};
      @media screen and (min-width: 1700px){
        padding-left: 20vw;
        padding-right: 20vw;
      };
      @media screen and (max-width: 1400px){
        padding-left: 20px;
        padding-right: 20px;
      };
    `};
  `,
  grid: styled.div<GridRules>`
    display: grid;
    ${props => `
      grid-template-${props.row ? 'rows' : 'columns'}: ${props.values ? `
        ${props.values}
      ` : `
        ${props.mobile2 ? `
          repeat(${props.amount ? props.amount : 2}, 1fr)!important;
        ` : `
          repeat(${props.amount ? props.amount : 2}, 1fr);
        `};
      `};
      ${props.spacing && `
        ${props.mobile ? `
          grid-gap: ${props.spacing}!important;
        ` : `
          grid-gap: ${props.spacing};
        `};
      `};
      @media screen and (max-width: 1200px){
        grid-gap: 100px 50px;
      };
      @media screen and (max-width: 1200px){
        grid-gap: 50px 25px;
        ${props.alt && `
          grid-template-columns: 1fr 1fr;
        `};
      };
      @media screen and (max-width: 800px){
        grid-template-${props.row ? 'rows' : 'columns'}: 1fr;
      };
    `};
  `,
  header: styled.header<HeaderRules>`
    ${props => `
      ${props.spacing === 1 ? `
        padding-bottom: 60px;
      ` : props.spacing === 2 ? `
        padding-bottom: 140px;
        @media screen and (max-width: 1400px){
          padding-bottom: 20px;
        };
      ` : `
        padding-bottom: 40px;
        @media screen and (max-width: 1400px){
          padding-bottom: 20px;
        };
      `};
    `};
  `,
};

export const TextStyle = {
  title: styled.h1`
    font-family: 'Cabinet Grotesk';
    font-style: normal;
    line-height: 110px;

    text-align: center;

    background: var(--title-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media screen and (max-width: 1400px){
      line-height: 75px;
    };
  `,
  text: styled.a<TextRules>`
    ${props => `
      ${props.backgroundImage && `
        background-image: url(${props.backgroundImage.src});
        background-repeat: no-repeat;
        background-clip: border-box;
        ${props.type === 'landing' ? `
          background-size: cover;
        ` : `
          background-position: right bottom;
          background-size: 70%;
          background-origin: content-box;
        `};
      `};
      ${props.color && `color: ${props.color}`};
      ${props.background && `
        background: ${props.background};
        padding: 7px 3.5px;
        position: relative;
        left: -6px;
      `};
    `};
  `
};

export const AssetsStyle = {
  logo: styled(Image)<ResponsivenessRules>`
    width: 80px;
    margin-right: 113px - 58px;
    ${props => `
      ${props.orientation === 'mobile' ? `
        @media screen and (max-width: 1200px){
          display: block;
          width: 150px;
          height: auto;
          margin-bottom: 50px;
        };
        @media screen and (min-width: 1200px){
          display: none;
        };
      ` : `
        @media screen and (max-width: 1200px){
          display: block;
        };
      `};
    `};
  `,
  icon: styled(Image)<IconRules>`
    ${props => `
      ${props.type === 1 ? `
        width: auto;
        height: 150px;
        position: relative;
        left: -75px;
        @media screen and (max-width: 800px){
          left: -60px;
        };
      ` : props.type === 2 ? `
        width: auto;
        height: 65px;
        @media screen and (max-width: 800px){
          height: 30px;
        };
        ${props.alternative ? `
          margin-right: 50px;
        ` : props.last ? `
          margin: 0;
        ` : `
          margin-right: 65px;
        `};
      ` : `
        width: 15px;
        height: 15px;
      `};
      ${props.alt2 && `
        height: 20px;
        width: auto;
      `};
    `};
  `,
  caretDown: styled(AiFillCaretDown)<IconRules>`
    ${props => `
      ${props.type === 'dropdown' && `
        margin-right: 15px;
        transition: transform 0.3s ease;
        ${props.alternative && `
          transform: rotate(180deg);
        `};
      `};
    `};
  `,
  arrowDown: styled(AiOutlineDown)`
  `,
  beta: styled.span`
    border: 1px solid var(--color-white);
    border-radius: 3px;
    padding: .5px 2px;
  `,
  button: styled.button<ButtonRules>`
    border-radius: 80px;
    font-size: 12px;
    outline: none;
    cursor: pointer;
    ${props => `
      ${props.format === 'outline' ? `
        ${props.color === 'white' ? `
          filter: var(--button-shadow);
          background: none;
          color: var(--color-white);
          border: 1px solid var(--color-white);
        ` : `
          filter: var(--button-shadow);
          background: none;
          color: var(--color-2);
          border: 1px solid var(--color-2);
        `};
      ` : `
        ${props.color === 'white' ? `
          filter: var(--button-shadow);
          background: var(--color-white);
          border: 1px solid var(--color-white);
          color: ${props.alt ? 'var(--color-2)' : 'var(--color-5)'};
        ` : `
          filter: var(--button-shadow);
          background: var(--color-2);
          border: 1px solid var(--color-2);
        `};
      `};
      ${props.spacing === 1 ? `
        padding: 18px 48px;
      ` : props.spacing === 2 ? `
        padding: 15px 27.5px;
      ` : props.spacing === 3 ? `
        padding: 20px 16px;
        margin-top: 25px;
        border-radius: 8px;
      ` : props.spacing === 4 ? `
        padding: 20px 30px;
        font-weight: bolder;
        font-size: 14px;
        font-family: 'Clash Display';
      ` : `
        padding: 15px 38px;
      `};
    `};
  `,
  input: styled.input`
    background: none;
    width: 100%;
    font-family: 'Clash Display';
    font-size: 14px;
    outline: none;
    border: none;
    padding: 20px 30px;
    &:placeholder{
      color: var(--color-grey);
    };
  `,
  label: styled.label<LabelRules>`
    align-items: center;
    display: flex;
    white-space: nowrap;
    ${props => `
      ${props.alt ? 'gap: 2px' : 'gap: 15px'};
    `};
  `,
  profilePictureWrapper: styled.div`
    background: var(--color-3);
    border: 1px solid var(--color-4);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 2.5px;
    box-shadow: var(--profile-picture-shadow);
  `,
  profilePicture: styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  `
};