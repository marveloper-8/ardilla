'use client'
import { accessData, faqData, howItWorks, interestTimeData, interestValues, products, supportersData, tractionData, trustData } from '@/assets/data'
import NavigationComponent from '@/components/navigation'
import Box from '@mui/material/Box';
// styles
import { AssetsStyle, PageStyle, TextStyle } from '@/styles/general'
// resources
import FooterComponent from '@/components/footer'
import { useState } from 'react';
import InputWidget from '@/assets/widgets/input';
import { InterestStyle } from '@/styles/interest';
import chart from '@/assets/icons/chart.svg'
import bullet from '@/assets/icons/bullet.svg'
import { formatNumber, percentage } from '@/assets/functions';
import { HomeStyle } from '@/styles/home';
import moment from 'moment';
import FAQWidget from '@/assets/widgets/faq-item';

const Home = () => {

  const [inputs, setInputs] = useState([
    {
      type: 'select',
      label: "How often are you saving?",
      value: interestTimeData[0].value,
      data: interestTimeData
    },
    {
      type: 'number',
      label: "How much are you saving?",
      value: '2,000'
    },
    {
      type: 'number',
      label: "How long are you saving for? (In months)",
      value: '3'
    }
  ])

  const onChange = (value: string, index: number) => {
    const inputList = [...inputs];
    const formattedValue = formatNumber(value)
    const sendValue = inputList[index]['type'] === 'number' ? String(formattedValue) : value;

    if(index === 0) inputList[2]['label'] = `How long are you saving for? (In ${value}s)`

    inputList[index]['value'] = sendValue;
    setInputs(inputList);
  };

  const time: any = inputs[0].value
  const amountToSave = inputs[1].value
  const timeSpan = inputs[2].value

  const amountCalculated = Number(formatNumber(amountToSave, true)) * Number(timeSpan)
  const profit = percentage(amountCalculated, 10)

  const preview = [
    {
      label: 'Total Balance',
      value: amountCalculated + profit,
    },
    {
      label: <a>Saving <b>₦{formatNumber(amountToSave)}</b> {time}ly for {timeSpan} {time}s will result in a balance of ₦6,600</a>,
    },
    {
      label: 'Interest',
      value: profit,
      showPercentage: true
    },
    {
      label: 'Total Savings',
      value: amountCalculated,
      showPercentage: true
    }
  ]

  const submitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`
      Total Savings: ₦ ${formatNumber(amountCalculated)} \n
      Total Balance: ₦ ${formatNumber(amountCalculated + profit)} \n
      Interest: ₦ ${formatNumber(profit)} \n
    `)
  };
  

  return (
    <PageStyle.page>
      
      <NavigationComponent />
      
      <PageStyle.section type='interest' spacing={0} full>
        <h3>Calculate Your Interests</h3>
        <PageStyle.grid>
          <InterestStyle.calculator onSubmit={submitFunction}>
            {inputs.map((item, index) => (
              <InputWidget
                key={index}
                index={index}
                data={item}
                onChange={onChange}
              />
            ))}
            <InterestStyle.submitButton type="submit" />
          </InterestStyle.calculator>
          <InterestStyle.calculatorPreview>
            {preview.map((item, index) => (
              <InterestStyle.calculatorPreviewItem key={index}>
                <InterestStyle.calculatorPreviewLabel>
                  {item.label}
                </InterestStyle.calculatorPreviewLabel>
                {item.value && (
                  <InterestStyle.calculatorPreviewValue>
                    N {formatNumber(String(item.value))}&nbsp;
                    {item.showPercentage && (
                      <InterestStyle.calculatorPreviewValuePercentage>
                        ( 2% )
                      </InterestStyle.calculatorPreviewValuePercentage>
                    )}
                  </InterestStyle.calculatorPreviewValue>
                )}
              </InterestStyle.calculatorPreviewItem>
            ))}
            <InterestStyle.chart src={chart} alt='Chart' />
            <InterestStyle.time>
              <div>{moment().format('MMMM YYYY')}</div>
              <InterestStyle.futureTime>
                {moment().add(timeSpan, time === 'month' ? 'months' : 'years').format('MMMM YYYY')}
              </InterestStyle.futureTime>
            </InterestStyle.time>
            <AssetsStyle.button
              format='solid'
              color='default'
              spacing={1}
            >
              Start Saving Now
            </AssetsStyle.button>
          </InterestStyle.calculatorPreview>
        </PageStyle.grid>
      </PageStyle.section>
      
      <PageStyle.section type='interest' spacing={1} backgroundColor='var(--color-white)' color='var(--color-5)'>

        <PageStyle.header>
          <InterestStyle.heading1>
            Interest you can count on
          </InterestStyle.heading1>
        </PageStyle.header>
        <InterestStyle.section1>
          <PageStyle.grid spacing='0 100px'>
            {interestValues.map((item, index) => (
              <InterestStyle.item1 key={index} active={index === 0 || index === 1}>
                <InterestStyle.bullet src={bullet} alt='bullet' />
                <div>
                  <InterestStyle.title1>
                    {item.title}
                  </InterestStyle.title1>
                  <p>{item.value}</p>
                </div>
              </InterestStyle.item1>
            ))}
          </PageStyle.grid>
        </InterestStyle.section1>

        <PageStyle.header>
          <InterestStyle.heading2>
            How It Works
          </InterestStyle.heading2>
        </PageStyle.header>
        <InterestStyle.section2>
          <PageStyle.grid spacing='50px' amount={3}>
            {howItWorks.map((item, index) => (
              <InterestStyle.howItWorksTab background={item.colors.background} key={index}>
                <InterestStyle.howItWorksTitle>
                  <InterestStyle.howItWorksNumber background={item.colors.color}>
                    {index + 1}
                  </InterestStyle.howItWorksNumber>
                  <p>{item.label}</p>
                </InterestStyle.howItWorksTitle>
                
                <InterestStyle.howItWorksPhone src={item.image} alt='bullet' />
              </InterestStyle.howItWorksTab>
            ))}
          </PageStyle.grid>
        </InterestStyle.section2>

        <PageStyle.header>
          <InterestStyle.heading2>
            Questions We Have been Asked
          </InterestStyle.heading2>
        </PageStyle.header>
        <InterestStyle.section3>
          {faqData.map((item, index) => <FAQWidget data={item} key={index} />)}
        </InterestStyle.section3>

      </PageStyle.section>
      

      <FooterComponent />
    </PageStyle.page>
  )
}

export default Home