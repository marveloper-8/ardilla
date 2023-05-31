'use client'
import { FC, useState } from 'react';
// styles
import { CareerStyle } from '@/styles/career';
// resources
import play from '@/assets/images/play.png'
import { TabImageRules } from '../rules';

const PeopleWidget: FC<TabImageRules> = ({backgroundImage, name, position, alt}) => {
  const [active, setActive] = useState(false)
  return (
    <CareerStyle.peoplePreview alt
      alt2={alt}
      active={active || alt}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      backgroundImage={backgroundImage}
    >
      <CareerStyle.peoplePreviewBackground active={active || alt} />
      <CareerStyle.peoplePreviewContent active={active || alt}>
        <div>
          <CareerStyle.peoplePreviewPlay alt={alt}>
            <CareerStyle.peoplePreviePlayImage src={play} alt='Play' />
          </CareerStyle.peoplePreviewPlay>
          <CareerStyle.peopleTitle>
            {alt ? name : 'MD - Miss Oyinye Dallas'}
          </CareerStyle.peopleTitle>
          <p>
            {alt ? position : 'What is Ardila and it benefits?'}
          </p>
        </div>
      </CareerStyle.peoplePreviewContent>
    </CareerStyle.peoplePreview>
  )
}

export default PeopleWidget