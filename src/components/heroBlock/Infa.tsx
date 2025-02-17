import { useTranslation } from 'react-i18next'

import TrafficBlock from './TrafficBlock'
import Btn from '../btns/Btn'

const Infa = () => {
  const { t, i18n: _i18n } = useTranslation()

  return (
    <div className="flex items-start relative 900px:top-[-9%] 600px:top-[15%] top-[10%]  flex-col 1500px:gap-30px 1100px:gap-[22px] 900px:gap-[16px] gap-[18px] z-10 1500px:max-w-[1100px] 1100px:max-w-[790px] 900px:max-w-[621px] max-w-full">
      <h1 className="600px:text-start text-center 1500px:text-[70px] 1100px:text-[52px] 900px:text-[40px] 600px:text-[42px] text-[30px]  font-bold tracking-60px-3% 1500px:leading-80.49px 600px:leading-[57px] leading-[35px]">{t('h1')}</h1>
      <div className="flex 600px:justify-normal justify-center  900px:gap-[75px] gap-[22px] w-full max-w-[1100px]">
        <div className='flex 600px:items-start items-center flex-col 1500px:gap-30px 1100px:gap-[22px] 900px:gap-[16px] gap-[18px] 900px:max-w-[632px] max-w-[334px] w-full'>
          <p className="600px:text-start text-center 1920px:text-40px 1100px:text-[1.8vw]  900px:text-[21px] 600px:text-[23px] text-[16px]  1500px:leading-46px 600px:leading-[34px] leading-[18px] 1500px:tracking-60px-3% tracking-normal 600px:max-w-full max-w-[227px]">
            {t('pHeroBlock')} <span className="font-bold">{t('spanHeroBlock')}</span> <span>{t('p2HeroBlock')}</span>
          </p>
          <Btn p={t('btnHeroBlock')} />
        </div>
        <TrafficBlock />
      </div>
    </div>
  )
}

export default Infa
