import { useTranslation } from 'react-i18next'

import img from '../../assets/heroblock/bgBlock.png'

const TrafficBlock = () => {
  const { t } = useTranslation()

  return (
    <div className="600px:block hidden z-10 w-[90%] 1500px:max-w-[357px] 1100px:max-w-[268px] 900px:max-w-[190px] max-w-[292px] relative">
      <div className="w-full 1500px:h-[218px] 1100px:h-[163px] 900px:h-[116px] h-[154px]  bg-[#FFFFFF03] opacity-[20%] shadow-traffic1 rounded-[11px]"></div>
      <div className="absolute top-[3%] left-[2.3%] w-[95%] 1500px:h-[202px] 1100px:h-[151px] 900px:h-[108px] h-[141px] bg-[#FFFFFF03] opacity-[60%] shadow-traffic2 rounded-[11px]"></div>
      <div className="absolute top-[5.9%] left-[5%] w-[90%] 1500px:h-[188px] 1100px:h-[141px] 900px:h-[100px] h-[129px] bg-[#FFFFFF03] shadow-traffic3 rounded-[11px] p-[6%]">
        <p className="1920px:text-31px 900px:text-[1.7vw] text-[21px] font-bold 1500px:tracking-60px-3% 900px:tracking-[-1px] tracking-normal 1100px:leading-38.69px leading-[20px]">
          {t('trafficBlock')}
        </p>
      </div>
      <img
        className="absolute 1500px:bottom-[-38.9%] 1100px:bottom-[-37%] 900px:bottom-[-30%] 900px:left-[50%] bottom-[-40%] left-[50%] translate-x-[-50%] 1500px:w-full w-[90%] max-w-[343px]"
        src={img}
        alt=""
      />
    </div>
  )
}

export default TrafficBlock
