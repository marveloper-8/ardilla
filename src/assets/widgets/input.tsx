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
import { InputStyle } from '@/styles/widget';
import { InputWidgetRules, InputWidgetSelectRules } from '../rules';

const InputWidget: FC<InputWidgetRules> = ({ onChange, index, data }) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const selectStyle = {
    color: 'var(--color-white)',
    '&:focus': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color-white)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--color-white)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-white)',
      },
    },
  }

  return (
    <>
      {data.label && <InputStyle.label>{data.label}</InputStyle.label>}
      <FormControl
        fullWidth
        sx={{ '& .MuiInputBase-root': { 
          color: 'var(--color-white)',
          borderColor: 'var(--color-white)'
        } }}
      >
        {data.type === 'select' ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.value}
            style={{
              color: 'white'
            }}
            sx={selectStyle}
            IconComponent={() => <AssetsStyle.caretDown type='dropdown' alternative={isFocused} />}
            onChange={(e) => onChange(e.target.value, index)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {data.data && data.data.map((item: InputWidgetSelectRules, index: number) => (
              <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        ) : (
          <InputStyle.text
            value={data.value}
            onChange={(e) => onChange(e.target.value, index)}
          />
        )}
        
        
      </FormControl>
    </>
  )
}

export default InputWidget