import { FAQContentRules } from "@/assets/rules";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

export const InputStyle = {
  text: styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid var(--color-white);
    font-size: 32px;
    font-family: 'Cabinet Grotesk';
    padding: 7px 0;
    outline: none;
  `,
  label: styled.label`
    margin: 50px 0 18px 0;
    display: flex;
    color: var(--color-grey);
  `,
};

export const FaqStyle = {
  wrapper: styled.div<FAQContentRules>`
    background: var(--color-grey-2);
    padding: 32px 37px;
    color: var(--color-2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    cursor: pointer;
    transition: .5s ease;
    @media screen and (max-width: 800px){
      padding: 10px;
    };
    ${props => `
      ${props.active && `
        border-radius: 16px 16px 0 0;
      `};
    `};
  `,
  content: styled.div<FAQContentRules>`
    background: var(--color-4);
    color: var(--color-2);
    border-radius: 0 0 16px 16px;
    margin-bottom: 32px;
    font-size: 16px;
    transition: .5s ease;
    overflow: hidden;
    ${props => `
      ${props.active ? `
        padding: 32px 37px;
        height: auto;
        @media screen and (max-width: 800px){
          padding: 10px;
        };
      ` : `
        padding: 0 37px;
        height: 0;
        @media screen and (max-width: 800px){
          padding: 0 10px;
        };
      `};
    `};
  `,
  icon: styled(AiOutlinePlus)`
    color: var(--color-black);
    margin-left: 50px;
  `,
};