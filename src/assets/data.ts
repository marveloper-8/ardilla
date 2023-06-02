import product1 from './images/product.1.png'
import product2 from './images/product.2.png'
import product3 from './images/product.3.png'
import product4 from './images/product.4.png'
import product5 from './images/product.5.png'
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
import perk1 from './icons/perk.1.svg'
import perk2 from './icons/perk.2.svg'
import perk3 from './icons/perk.3.svg'
import perk4 from './icons/perk.4.svg'
import perk5 from './icons/perk.5.svg'
import perk6 from './icons/perk.6.svg'
import perkWhite1 from './icons/perk-white.1.svg'
import perkWhite2 from './icons/perk-white.2.svg'
import perkWhite3 from './icons/perk-white.3.svg'
import perkWhite4 from './icons/perk-white.4.svg'
import perkWhite5 from './icons/perk-white.5.svg'
import perkWhite6 from './icons/perk-white.6.svg'
import role1 from './images/role.1.png'
import role2 from './images/role.2.png'
import role3 from './images/role.3.png'
import role4 from './images/role.4.png'
import hire1 from './icons/hire.1.svg'
import hire2 from './icons/hire.2.svg'
import hire3 from './icons/hire.3.svg'
import expectations1 from './images/expectations.1.png'
import expectations2 from './images/expectations.2.png'
import expectations3 from './images/expectations.3.png'
import expectations4 from './images/expectations.4.png'
import expectations5 from './images/expectations.5.png'
import expectations6 from './images/expectations.6.png'
import expectations7 from './images/expectations.7.png'
import expectations8 from './images/expectations.8.png'
import instagram2 from './icons/instagram.2.svg'
import facebook2 from './icons/facebook.2.svg'
import twitter2 from './icons/twitter.2.svg'
import instagram3 from './icons/instagram.3.svg'
import facebook3 from './icons/facebook.3.svg'
import twitter3 from './icons/twitter.3.svg'

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
    image: product1,
    comingSoon: false,
    data: [
      'Create Unlimted savings plans',
      'Withdraw anytime',
      'Save with Friends with SAN ID',
      'Be better at saving',
      'Accountability profile',
      'Activity and report'
    ]
  },
  {
    title: 'Learn',
    subtitle: 'Financial freedom begins with You and Ardilla',
    subsubtitle: 'Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.',
    image: product2,
    comingSoon: false,
    data: [
      'Learn to invest in 2hrs',
      'Get a portfolio manager',
      'Stay on top of your finances',
      'Learn with family and friends',
      'Earn points and reward'
    ]
  },
  {
    title: 'Invest',
    subtitle: 'Multiply your finances',
    subsubtitle: 'Investment opportunities that gets you closer to financial freedom',
    image: product3,
    comingSoon: true,
    data: [
      'Portfolio mangement',
      'Track your returns',
      'Risk Assessment',
      'Vetted Investment opportuinities',
      'Invest within your risk appetite',
      'Invest in Naira and Dollars'
    ]
  },
  {
    title: 'Budget',
    subtitle: 'Plan your money',
    subsubtitle: 'Every good budget starts with a good plan for your money',
    image: product4,
    comingSoon: true,
    data: [
      'Save as you spend',
      'Track your expenses',
      'Organize your finances',
      'Sync and share budgets',
      'Financial guide',
      'Better decision-making'
    ]
  },
  {
    title: 'Insurance',
    subtitle: 'Protect your interest',
    subsubtitle: 'Stay protected, live freely',
    image: product5,
    comingSoon: true,
    data: [
      'Vehicle insurance',
      'Home insurance',
      'Mutual Insurance',
      'Life Insurance',
      'Health Insurance',
      'Travel Insurance'
    ]
  },
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

export const socialsData2 = [
  {
    logo: instagram2,
    name: 'Instagram'
  },
  {
    logo: facebook2,
    name: 'Facebook'
  },
  {
    logo: twitter2,
    name: 'Twitter'
  }
]

export const socialsData3 = [
  {
    logo: instagram3,
    name: 'Instagram'
  },
  {
    logo: facebook3,
    name: 'Facebook'
  },
  {
    logo: twitter3,
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

export const perksData = [
  {
    icon: perk1,
    icon2: perkWhite1,
    title: 'Its a vibe',
    description: 'Our work culture is a vibe and more.'
  },
  {
    icon: perk2,
    icon2: perkWhite2,
    title: 'Cool gadgets',
    description: 'You get to work with cool new gadgets.'
  },
  {
    icon: perk3,
    icon2: perkWhite3,
    title: 'Health benefits',
    description: 'We know health is important. So we provided easy access and affordable health benefits.'
  },
  {
    icon: perk4,
    icon2: perkWhite4,
    title: 'Team Bounding',
    description: 'We always make out time for fun and getting to know your team mates better.'
  },
  {
    icon: perk5,
    icon2: perkWhite5,
    title: 'Diversity',
    description: 'We promote diversity of ideas and people. Anyone from anywhere is welcome.'
  },
  {
    icon: perk6,
    icon2: perkWhite6,
    title: 'Education and career progression',
    description: 'We offer you opportunities to grow, learn, and advance in your career.'
  },
]

export const rolesData = [
  {
    background: role1,
    title: 'Design',
    closed: true
  },
  {
    background: role2,
    title: 'Engineering',
    closed: true
  },
  {
    background: role3,
    title: 'Content Writer',
    closed: true
  },
  {
    background: role4,
    title: 'Financial Advisor',
    closed: true
  },
]

export const hireData = [
  {
    icon: hire1,
    title: 'Application',
    description: 'Send in your applications and if you are a good fit, we will schedule an interview.'
  },
  {
    icon: hire2,
    title: 'Hiring Managers Interview',
    description: 'The interview comprises a chat or two with the hiring manager and your department team lead about your suitability and skills for the role.'
  },
  {
    icon: hire3,
    title: 'Feedback',
    description: 'When the process is complete, we give you feedback on your performance and we let you know if you have been selected.'
  },
]

export const expectationsData = [
  {
    title: 'Access to more financial tools',
    backgroundImage: expectations1,
    alt: false
  },
  {
    title: 'More investment opportunities',
    backgroundImage: expectations2,
    alt: false
  },
  {
    title: 'More Savings',
    backgroundImage: expectations3,
    alt: false
  },
  {
    title: 'Join a passionate wealth building community',
    backgroundImage: expectations4,
    alt: false
  },
  {
    title: 'Free financial advice from vetted financial coaches',
    backgroundImage: expectations5,
    alt: false
  },
  {
    title: 'Build wealth without compromising your belief',
    backgroundImage: expectations6,
    alt: true
  },
  {
    title: 'Pro budgeting guide',
    backgroundImage: expectations7,
    alt: false
  },
  {
    title: 'Get your unique San ID',
    backgroundImage: expectations8,
    alt: false
  },
]