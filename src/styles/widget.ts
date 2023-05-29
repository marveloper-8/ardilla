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
  wrapper: styled.div`
    background: var(--color-grey-2);
    padding: 32px 37px;
    color: var(--color-2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    font-size: 16px;
    cursor: pointer;
  `,
  icon: styled(AiOutlinePlus)`
    color: var(--color-black);
  `,
};