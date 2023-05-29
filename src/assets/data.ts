import phone2 from './images/phone.2.png'
import dib from './icons/dib.svg'
import dreams from './icons/dreams.svg'
import vault from './icons/vault.svg'
import grit from './icons/grit.svg'
import trust1 from './images/trust.1.png'
import trust2 from './images/trust.2.png'
import trust3 from './images/trust.3.png'
import zikoko from './images/zikoko.png'
import techcrunch from './icons/techcrunch.svg'
import guardian from './icons/guardian.svg'
import spiro1 from './images/spiro.1.png'
import spiro2 from './images/spiro.2.png'
import spiro3 from './images/spiro.3.png'
import instagram from './icons/instagram.svg'
import facebook from './icons/facebook.svg'
import linkedin from './icons/linkedin.svg'
import twitter from './icons/twitter.svg'
import phone3 from './images/phone.3.png'
import phone4 from './images/phone.4.png'
import phone5 from './images/phone.5.png'
import values1 from './images/values.1.png'
import values2 from './images/values.2.png'
import values3 from './images/values.3.png'
import values4 from './images/values.4.png'
import people from './images/people.png'

export const primaryMenuItems = [
  {
    title: 'Products',
    data: true,
    beta: false
  },
  {
    title: 'Business',
    data: false,
    beta: true
  },
  {
    title: 'Company',
    data: true,
    beta: false
  },
  {
    title: 'Learn',
    data: false,
    beta: false
  },
]

export const products = [
  {
    title: 'Save',
    subtitle: 'Save at your own pace!',
    subsubtitle: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
    image: phone2,
    data: [
      'Create Unlimted savings plans',
      'Withdraw anytime',
      'Save with Friends with SAN ID',
      'Be better at saving',
      'Accountability profile',
      'Activity and report'
    ]
  }
]

export const accessData = [
  {
    title: 'DIB',
    icon: dib,
    description: 'Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.'
  },
  {
    title: 'Dreams',
    icon: dreams,
    description: 'Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.'
  },
  {
    title: 'Vault',
    icon: vault,
    description: 'Lock away excess funds you don\'t know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.'
  },
  {
    title: 'Grit',
    icon: grit,
    description: 'Become a VIP when you save more money with us. Enjoy better benefits.'
  },
]

export const trustData = [
  trust1,
  trust2,
  trust3
]

export const supportersData = [
  {
    logo: zikoko,
    name: 'Zikoko'
  },
  {
    logo: techcrunch,
    name: 'Techcrunch'
  },
  {
    logo: guardian,
    name: 'Guardian'
  }
]

export const tractionData = [
  {
    label: 'Investment in',
    labelValue: '2022',
    value: '₦ 100 M',
    background: spiro1,
    colors: {
      background: 'var(--color-green)',
      label: 'var(--color-green-2)',
      labelValue: 'var(--color-green-3)',
    }
  },
  {
    label: 'Risk',
    labelValue: 'Management',
    value: '0% Risk',
    background: spiro2,
    colors: {
      background: 'var(--color-purple)',
      label: 'var(--color-purple-2)',
      labelValue: 'var(--color-purple-3)',
    }
  },
  {
    label: 'Investment',
    labelValue: 'paid back',
    value: '₦ 100 M',
    background: spiro3,
    colors: {
      background: 'var(--color-gold)',
      label: 'var(--color-gold-2)',
      labelValue: 'var(--color-gold-3)',
    }
  },
]

export const footerData = [
  [{
    title: 'Products',
    data: [
      { title: 'Savings', comingSoon: false },
      { title: 'Dilla', comingSoon: false },
      { title: 'Financial Coach', comingSoon: false },
      { title: 'Halal', comingSoon: false },
      { title: 'Budgetting', comingSoon: true },
      { title: 'Investment', comingSoon: true },
      { title: 'Insurance', comingSoon: true },
    ]
  }],
  [{
    title: 'Company',
    data: [
      { title: 'About us', comingSoon: false },
      { title: 'Careers', comingSoon: false },
      { title: 'FAQS', comingSoon: false },
      { title: 'Press', comingSoon: false },
    ]
  }],
  [{
    title: 'Transparency',
    data: [
      { title: 'Terms & conditions', comingSoon: false },
      { title: 'Information security policy', comingSoon: false },
      { title: 'Privacy policy', comingSoon: false },
      { title: 'Interest Tool', comingSoon: false },
    ]
  }],
  [{
    title: 'Developer',
    data: [
      { title: 'Connect API', comingSoon: true },
    ]
  }],
  [
    {
      title: 'Address',
      data: [
        { title: '33B, Ogundana street, Allen, Ikeja.', comingSoon: false },
      ]
    },
    {
      title: 'Contact',
      data: [
        { title: 'support@ardilla.africa', comingSoon: false },
        { title: '(234)801 000 1234', comingSoon: false },
      ]
    },
  ],
]

export const socialsData = [
  {
    logo: instagram,
    name: 'Instagram'
  },
  {
    logo: facebook,
    name: 'Facebook'
  },
  {
    logo: linkedin,
    name: 'Linkedin'
  },
  {
    logo: twitter,
    name: 'Twitter'
  }
]

export const interestTimeData = [
  {
    label: 'Monthly',
    value: 'month'
  },
  {
    label: 'Yearly',
    value: 'year'
  }
]

export const interestValues = [
  {
    title: 'More Interest',
    value: 'Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.'
  },
  {
    title: 'Values',
    value: 'Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans.'
  },
  {
    title: 'Transparency',
    value: 'No hidden charges and no vague deductions. Save with Ardilla and get your full interests.'
  },
  {
    title: 'Complete Withdraws',
    value: 'Withdraw your entire savings+ interest upon maturity. No minimum balance.'
  },
]

export const howItWorks = [
  {
    label: 'Create a plan',
    image: phone3,
    colors: {
      background: 'var(--color-pink-1)',
      color: 'var(--color-7)',
    }
  },
  {
    label: 'Set your target amount',
    image: phone4,
    colors: {
      background: 'var(--color-purple-4)',
      color: 'var(--color-2)',
    }
  },
  {
    label: 'Get Your interest',
    image: phone5,
    colors: {
      background: 'var(--color-blue-2)',
      color: 'var(--color-blue)',
    }
  },
]

export const faqData = [
  {
    question: 'What are your interest rates?',
    answer: ''
  },
  {
    question: 'What happens to my interest when i switch to Halal?',
    answer: ''
  },
  {
    question: 'What is the minimum interest rate I am entitled to?',
    answer: ''
  },
  {
    question: 'What is Ardilla',
    answer: ''
  },
  {
    question: 'What is Ardilla',
    answer: ''
  },
]

export const careerLandingData = [
  {
    title: 'Join us in shaping..',
    color: 'var(--color-orange)'
  },
  {
    title: 'The Future..',
    color: 'var(--color-7)'
  },
  {
    title: 'Of Finance..',
    color: 'var(--color-teal)'
  },
]

export const cultureData = [
  {
    title: 'Experienced professionals',
    paragraphs: [
      'Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience. They will guide you through your wealth-building journey.',
      'We have a great team of diverse and talented professionals who share the values of the company. Because of the size of our dream, we need more hands on deck and you are always welcome to apply.'
    ]
  },
  {
    title: 'We give the best',
    paragraphs: [
      'We know work can be quite dreadful, so we try to make it fun, as much as we can. We also offer competitive salaries as well as great packages.',
      'At Ardilla, dedication and excellence are always rewarded. No politics and no funny business.'
    ]
  },
]

export const valuesData = [
  {
    title: 'Excellence',
    description: 'We always bring our A game to work, putting our best foot forward.',
    background: values1,
    color: 'var(--color-7)'
  },
  {
    title: 'Dedication',
    description: 'Consistency is the code to turning dreams to reality and at Ardilla, we have a lot of dreams to transform.',
    background: values2,
    color: 'var(--color-blue)'
  },
  {
    title: 'Team Work',
    description: 'No one ever built anything alone. Strength in numbers is all good but more importantly is strength in working together.',
    background: values3,
    color: 'var(--color-orange)'
  },
  {
    title: 'Positivity',
    description: 'Great attitude to work always wins and at Ardilla we are always big on positivity and a can do mindset.',
    background: values4,
    color: 'var(--color-teal)'
  },
]

export const peopleData = [
  {
    image: people,
    name: 'Aiyeola Mathew',
    position: 'Lead Designer',
    coomment: 'Working with Ardilla has exposed me to innovative ideas and advanced technology.'
  },
  {
    image: people,
    name: 'Oshodi David',
    position: 'Product Designer',
    coomment: 'Ardilla places a premium on team work and collaboration which has helped me gain better insights and become better at my job'
  },
  {
    image: people,
    name: 'Akindele Olamilekan',
    position: 'Front-end Engineer',
    coomment: 'At Ardilla, I get to work in an environment that is constantly pushing me to learn, develop, and be better.'
  },
  {
    image: people,
    name: 'Anita Ojieh',
    position: 'Product Manager',
    coomment: 'Although Ardilla is challenging, it is the type of challenge that gets you motivated.'
  },
]