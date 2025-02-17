import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import BtnAdFormat from '../btns/BtnAdFormat'
import AnimBlock from './AnimBlock'
import Anim1 from './Anim1'
import Anim2 from './Anim2'
import Anim4 from './Anim4'
import Anim3 from './Anim3'

const Infa = () => {
  const { t } = useTranslation()

  const [selectedFormat, setSelectedFormat] = useState<string>('Popunder')
  const [animation, setAnimation] = useState<JSX.Element>(<Anim1 />)
  const [rotationAngle, setRotationAngle] = useState(0)

  const handleFormatClick = (format: string) => {
    setSelectedFormat(format)

    switch (format) {
      case 'Popunder':
        setAnimation(<Anim1 />)
        setRotationAngle(0)
        break
      case 'Push Notifications':
        setAnimation(<Anim2 />)
        setRotationAngle(50)
        break
      case 'In-page':
        setAnimation(<Anim3 />)
        setRotationAngle(100)
        break
      case 'Native':
        setAnimation(<Anim4 />)
        setRotationAngle(150)
        break
      default:
        setAnimation(<Anim1 />)
        setRotationAngle(0)
    }
  }

  const formatTexts: Record<string, { p1: string; p2: string }> = {
    Popunder: {
      p1: t('p1AdFormat'),
      p2: t('p2AdFormat')
    },
    'Push Notifications': {
      p1: t('p11AdFormat'),
      p2: t('p21AdFormat')
    },
    'In-page': {
      p1: t('p12AdFormat'),
      p2: t('p22AdFormat')
    },
    Native: {
      p1: t('p13AdFormat'),
      p2: t('p23AdFormat')
    }
  }

  return (
    <div className="flex 900px:flex-row flex-col items-center justify-between w-full 1100px:h-[903px] h-[645px]">
      <AnimBlock anim={animation} rotationAngle={rotationAngle} />
      <div className="flex 600px:items-end items-center flex-col 1100px:gap-50px gap-[27px] 1500px:max-w-[788px] 1100px:max-w-[540px] 900px:max-w-[420px] max-w-full w-full  z-10">
        <div className="flex 900px:items-start items-center flex-col 1500px:gap-50px 1100px:gap-[34px] 900px:gap-[27px] gap-[31px] w-full">
          <h2 className="h2 1500px:!text-[50px] 900px:!text-[37px] 600px:!text-[30px] text-[5vw] 1500px:leading-[57.5px] 1100px:leading-[39px]  leading-[30px]">{t('h2AdFormat')}</h2>
          <div className="flex flex-col 1500px:gap-30px 1100px:gap-5 900px:gap-[16px] gap-[20px] w-full">
            <ul className="flex justify-between gap-[2px]">
              <li
                className={`uppercase font-bold  1920px:text-25px 1100px:text-[17px] 900px:text-[13px] 600px:text-[18px] text-[2.8vw]  1500px:leading-27.6px leading-[19px] cursor-pointer ${
                  selectedFormat === 'Popunder' ? 'text-black' : 'text-b3'
                }`}
                onClick={() => handleFormatClick('Popunder')}
              >
                Popunder
              </li>
              <li
                className={`uppercase font-bold 1920px:text-25px 1100px:text-[17px] 900px:text-[13px] 600px:text-[18px] text-[2.8vw]   1500px:leading-27.6px leading-[19px] cursor-pointer whitespace-nowrap ${
                  selectedFormat === 'Push Notifications' ? 'text-black' : 'text-b3'
                }`}
                onClick={() => handleFormatClick('Push Notifications')}
              >
                Push Notifications
              </li>
              <li
                className={`uppercase font-bold 1920px:text-25px 1100px:text-[17px] 900px:text-[13px] 600px:text-[18px] text-[2.8vw]   1500px:leading-27.6px leading-[19px] cursor-pointer whitespace-nowrap ${
                  selectedFormat === 'In-page' ? 'text-black' : 'text-b3'
                }`}
                onClick={() => handleFormatClick('In-page')}
              >
                In-page
              </li>
              <li
                className={`uppercase font-bold 1920px:text-25px 1100px:text-[17px] 900px:text-[13px] 600px:text-[18px] text-[2.8vw]   1500px:leading-27.6px leading-[19px] cursor-pointer  ${
                  selectedFormat === 'Native' ? 'text-black' : 'text-b3'
                }`}
                onClick={() => handleFormatClick('Native')}
              >
                Native
              </li>
            </ul>
            <div className="flex flex-col 1100px:gap-[5px] gap-[3px]">
              <p className="font-bold 1500px:text-26px 1100px:text-[17px] 900px:text-[13px] text-[17px]  1500px:leading-31.47px leading-[21px]">{formatTexts[selectedFormat]?.p1}</p>
              <p className="1500px:text-24px 1100px:text-[16px] 900px:text-[12px] text-[16px]  1500px:leading-29.05px leading-[19px]">{formatTexts[selectedFormat]?.p2}</p>
            </div>
          </div>
        </div>
        <BtnAdFormat />
      </div>
    </div>
  )
}

export default Infa
