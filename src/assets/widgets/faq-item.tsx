'use client'
import { accessData, interestTimeData, products, supportersData, tractionData, trustData } from '@/assets/data'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// styles
import { AssetsStyle, PageStyle, TextStyle } from '@/styles/general'
// resources
import { FC, useState } from 'react';
import { FaqStyle, InputStyle } from '@/styles/widget';
import { FAQRules } from '../rules';

const FAQWidget: FC<FAQRules> = ({ data }) => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <FaqStyle.wrapper>
      <p>{data.question}</p>
      <FaqStyle.icon />
    </FaqStyle.wrapper>
  )
}

export default FAQWidget