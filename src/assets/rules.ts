import { StaticImageData } from 'next/image';
import { RefObject } from 'react';

export interface NavItemRules {
  title: string,
  data: boolean,
  beta: boolean
}

export interface ButtonRules {
  format: string,
  color: string,
  spacing: number,
  alt?: boolean
}

export interface SectionRules {
  spacing: number,
  curved?: boolean | null,
  center?: boolean | null,
  full?: boolean | null,
  backgroundColor?: string | null,
  color?: string | null,
  backgroundImage?: StaticImageData | null,
  type?: string | null,
}

export interface PageRules {
  ref?: RefObject<HTMLElement> | null;
}

export interface GridRules {
  values?: string | null,
  amount?: number | null,
  spacing?: string | null,
  row?: boolean | null,
  mobile?: boolean | null,
  mobile2?: boolean | null,
  alt?: boolean | null,
}

export interface ProductRules {
  height?: number | null,
}

export interface TextRules {
  color?: string | null,
  background?: string | null,
  backgroundImage?: StaticImageData | null,
}

export interface HeaderRules {
  spacing?: number | null,
}

export interface IconRules {
  type?: number | string | null,
  alternative?: boolean | null,
  alt2?: boolean,
  last?: boolean,
}

export interface LabelRules {
  alt?: boolean,
}

export interface TabImageRules {
  backgroundImage: StaticImageData,
  name?: string,
  position?: string,
  alt?: boolean,
}

export interface TabRules {
  color?: string | null,
  background?: string | null,
  alt?: boolean | null,
  alt2?: boolean | null,
  backgroundImage?: StaticImageData | null,
  active?: boolean,
}

export interface FooterRules {
  offset?: number | null,
  alt?: boolean
}

export interface InputRules {
  offset?: number | null,
}

export interface InputWidgetSelectRules {
  value: string,
  label: string
}

export interface InputWidgetValuesRules {
  type: string,
  value: string | number,
  label?: string,
  data?: Array<InputWidgetSelectRules> | null
}

export interface InputWidgetRules {
  onChange: Function,
  index: number,
  data: InputWidgetValuesRules
}

export interface NumberFormatterRules {
  value: string
}

export interface InterestsItemRules {
  active?: boolean,
  last?: boolean,
}

export interface PeopleRules {
  active?: boolean
}

export interface FAQRules {
  data: {
    question: string,
    answer: string
  }
}

export interface FAQContentRules {
  active?: boolean
}

export interface NavigationRules {
  alt?: boolean,
  landing?: boolean,
}

export interface ResponsivenessRules {
  orientation?: string,
}

export interface CareerRules {
  alt?: boolean,
  alternative?: boolean | null,
}

export interface Career2Rules {
  alternative?: boolean | null,
}

export interface CareerTextRules {
  color: string,
  shift: number
}

export interface LandingRules {
  offset?: number
}