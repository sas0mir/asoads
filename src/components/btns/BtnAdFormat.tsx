import { useTranslation } from 'react-i18next'

import arrowRight from '../../assets/icons/arrowRight.svg'
import arrowLeft from '../../assets/icons/arrowLeft.svg'

const BtnAdFormat = () => {
  const { t } = useTranslation()

  return (
    <button className="group inline-flex justify-between items-center 1500px:h-[65px] 1100px:h-[48px] h-[40px]  bg-black rounded-[40px] px-[2px] 1100px:px-[30px] py-[10px] 1100px:py-[14px] hover:shadow-hoverBtn transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
      <div className="relative flex-shrink-0">
        <div className="relative">
          <div className="absolute 1100px:left-[-26px] left-[2px] 1500px:top-[13px] 1100px:top-[21px] 900px:top-[25px] top-[23px] df-center bg-white 1500px:w-[56px] 1500px:h-[56px] 1100px:w-[38px] 1100px:h-[38px] 900px:w-[30px] 900px:h-[30px] w-[34px] h-[34px]  rounded-full z-20">
            <img
              className="group-hover:scale-125 animate-move-right transition-transform duration-500 ease-in-out transform 1500px:w-[24px] 1100px:w-[17px] w-[12px] "
              src={arrowRight}
              alt=""
            />
          </div>
          <div className="relative 1500px:left-[-28px] left-[-25px] w-[5rem] h-[5rem]">
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                filter: 'blur(8px)',
                WebkitFilter: 'blur(8px)',
                transform: 'translate3d(0, 0, 0)',
                background:
                  'linear-gradient(264.64deg, #714CD0 -6.54%, #B257AC 32.64%, #ED918A 57.27%, #FE6302 106.54%)',
                opacity: '65%'
              }}
            >
              <div
                className="absolute inset-0  opacity-[55%] rotate-[-180deg]"
                style={{ transform: 'scale(1.2)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-source text-white font-semibold text-[13px] 600px:text-[15px] 900px:text-[13px] 1100px:text-[17px] 1500px:text-[1.5625rem] leading-[6.5px] whitespace-nowrap">
        {t('btnAdFormat')}
      </p>
      <div className="relative ">
        <div className="absolute 1500px:right-[-26px] 1100px:right-[-26px] right-[2px] 1500px:top-[12px] 1100px:top-[21px] 900px:top-[25px] top-[23px] df-center bg-white 1500px:w-[56px] 1500px:h-[56px] 1100px:w-[38px] 1100px:h-[38px] 900px:w-[30px] 900px:h-[30px] w-[34px] h-[34px] rounded-full z-20">
          <img
            className="  animate-move-left  transform 1500px:w-[24px] 1100px:w-[17px] w-[12px]  transition-transform duration-500 ease-in-out group-hover:-translate-x-1/2 group-hover:scale-125"
            src={arrowLeft}
            alt=""
          />
        </div>
        <div className="relative 1500px:right-[-30px] 600px:right-[-20px] right-[-22px] w-[5rem] h-[5rem]">
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              filter: 'blur(8px)',
              WebkitFilter: 'blur(8px)',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <div className="absolute inset-0 bg-bgBtn opacity-[55%]" style={{ transform: 'scale(1.2)' }}></div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default BtnAdFormat
