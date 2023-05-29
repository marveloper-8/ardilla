import { FooterRules, NavigationRules, TabImageRules } from "@/assets/rules";
import Image from 'next/image'
import styled from "styled-components";

export const NavigationStyle = {
  wrapper: styled.nav<NavigationRules>`
    padding: 20px 135px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${props => props.alt && `background: var(--color-2);`}
  `,
  section: styled.section`
    display: flex;
    align-items: center;
    gap: 58px;
  `,
  item: styled.span`
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
  `,
};

export const FooterStyle = {
  wrapper: styled.footer`
    padding: 0 150px 40px 150px;
    background: var(--color-2);
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
  `,
  footerImage: styled(Image)`
    width: 80%;
    height: auto;
    margin-top: 65px;
  `,
  footerImageWrapper: styled.div`
    display: flex;
    align-items: flex-end;
  `,
  content: styled.div`
    padding: 75px 40px 60px 85px;
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
  bottom: styled.div`
    border-top: 1px solid var(--color-grey);
    padding-top: 25px;
  `,
  copyrightSocials: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 500;
  `,
  socials: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
  `,
  social: styled(Image)`
    width: 30px;
    height: 30px;
  `,
};