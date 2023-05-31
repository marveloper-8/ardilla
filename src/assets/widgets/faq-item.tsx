import { FC, useState } from 'react';
// styles
import { FaqStyle } from '@/styles/widget';
// types
import { FAQRules } from '../rules';

const FAQWidget: FC<FAQRules> = ({ data }) => {

  const [active, setActive] = useState(false);

  return (
    <>
      <FaqStyle.wrapper active={active} onClick={() => setActive(!active)}>
        <p>{data.question}</p>
        <FaqStyle.icon />
      </FaqStyle.wrapper>
      <FaqStyle.content active={active}>
        This is where answers to Frequently Asked Questions lie so users can read and gain understanding of what is being done on the app
      </FaqStyle.content>
    </>
    
  )
}

export default FAQWidget