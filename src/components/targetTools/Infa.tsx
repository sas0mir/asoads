import { useTranslation } from 'react-i18next'

import img1 from '../../assets/targetTools/1.svg'
import img2 from '../../assets/targetTools/2.svg'
import img3 from '../../assets/targetTools/3.svg'
import img4 from '../../assets/targetTools/4.svg'
import img5 from '../../assets/targetTools/5.svg'
import img6 from '../../assets/targetTools/6.svg'
import img7 from '../../assets/targetTools/7.svg'
import img8 from '../../assets/targetTools/8.svg'
import img9 from '../../assets/targetTools/9.svg'

import TextInfa from './TextInfa'
import Btn from '../btns/Btn'

const   Infa = () => {
  const { t, i18n: _i18n } = useTranslation()

  return (
    <div className="flex flex-col 600px:items-end items-center 1500px:gap-30px 1100px:gap-[22px] gap-[16px] 1100px:min-w-[618px] 600px:min-w-[440px] min-w-[100%]">
      <div className="df-center flex-col 1500px:gap-50px 1100px:gap-[38px] gap-[27px]">
        <h2 className="h2 1500px:!text-[50px] 1100px:!text-[37px] 900px:!text-[31px] !text-[24px] 600px:max-w-full max-w-[276px] text-center !leading-[31px]">{t('h2TargetTools')}</h2>
        <div className="flex  justify-center flex-wrap 1100px:gap-x-30px 600px:gap-x-[15px] gap-x-[5px] 1500px:gap-y-[15px] 600px:gap-y-[12px]  gap-y-[6px]   1500px:max-w-[826px] 1100px:max-w-[620px] 900px:max-w-[440px] max-w-[505px] w-full">
          <TextInfa img={img1} p={t('p1TargetTools')} />
          <TextInfa img={img2} p={t('p2TargetTools')} />
          <TextInfa img={img3} p={t('p3TargetTools')} />
          <TextInfa img={img4} p={t('p4TargetTools')} />
          <TextInfa img={img5} p={t('p5TargetTools')} />
          <TextInfa img={img6} p={t('p6TargetTools')} />
          <TextInfa img={img7} p={t('p7TargetTools')} />
          <TextInfa img={img8} p={t('p8TargetTools')} />
          <TextInfa img={img9} p={t('p9TargetTools')} />
        </div>
      </div>
      <Btn p={t('btnTargetTools')} />
    </div>
  )
}

export default Infa
