import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

import Input from './Input'

import bg2 from '../../assets/contactUs/bg2.png'
import tg from '../../assets/contactUs/tg.svg'
import email from '../../assets/contactUs/email.svg'
import arrow1 from '../../assets/contactUs/arrow1.png'
import arrow2 from '../../assets/contactUs/arrow2.png'

import BtnContactUs from '../btns/BtnContactUs'
import Anim from '../../components/anim/Anim'

const MesBlock = () => {
  const { t, i18n: _i18n } = useTranslation()
  const [isInView, setIsInView] = useState(false)
  const blockRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      },
      { threshold: 0.5 }
    )

    if (blockRef.current) {
      observer.observe(blockRef.current)
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current)
      }
    }
  }, [])

  return (
    <div ref={blockRef} className="max-w-[1867px] w-full overflow-hidden">
      <div className="df-center  1100px:h-[1500px] h-[900px] w-full relative ">
        <div className="flex  900px:justify-start 900px:px-0 600px:px-[75px] px-[45px] justify-center w-full h-full">
          <div className=" z-10 1500px:max-w-[1061px] 1100px:max-w-[797px] 900px:max-w-[566px] max-w-[650px] w-full relative left-[5%] 1500px:bottom-[-25%] 1100px:bottom-[-20%] 900px:bottom-[-40%] 600px:bottom-[-35%] bottom-[-10%]">
            <div className="w-full 1500px:h-[592px] 1100px:h-[445px] 600px:h-[315px] h-[467px] bg-[#FFFFFF03] opacity-[20%] shadow-traffic1 rounded-[1%]"></div>
            <div className="absolute 1500px:top-[1.5%] 600px:top-[1.2%] top-[2.5%]  left-[3.5%] w-[93%] 1500px:h-[546px] 1100px:h-[410px] 600px:h-[291px] h-[431px] bg-[#FFFFFF03] opacity-[60%] shadow-traffic2 rounded-[1%]"></div>
            <div className="600px:flex-row flex-col absolute 1500px:top-[3.2%] 600px:top-[2.5%] top-[5.5%]  left-[6.5%] w-[87%] 1500px:h-[496px] 1100px:h-[372px] 600px:h-[264px] h-[391px] flex items-center 1100px:gap-[4%] gap-[52px]  bg-[#FFFFFF03] shadow-traffic3 rounded-[1%] py-[21px] px-[28px] backdrop-blur-[40px] will-change-backdrop-filter">
            {/* <div className="600px:flex-row flex-col absolute 1500px:top-[3.2%] 600px:top-[2.5%] top-[5.5%]  left-[6.5%] w-[87%] 1500px:h-[496px] 1100px:h-[372px] 600px:h-[264px] h-[391px] flex items-center 1100px:gap-[4%] gap-[52px]  bg-[#FFFFFF03] shadow-traffic3 rounded-[1%] py-[21px] px-[28px]"> */}
              <div className="flex flex-col 1100px:gap-[29px] gap-[15px] 1100px:max-w-[447px] 900px:max-w-[238px] max-w-[274px] w-full">
                <h2 className="h2 1100px:!text-[37px] 900px:!text-[1.8vw] !text-[22px] 900px:!leading-[38px] !leading-[25px] relative min-w-[264px] w-full 600px:left-[0px] left-[-34px] 600px:text-start text-center">
                  {t('h2ContactUs')}
                </h2>
                <form className="flex flex-col 1100px:gap-[19px] gap-[10px]">
                  <Input placeholder={t('inputContactUs')} />
                  <Input placeholder="Skype / telegram / email" />
                  <textarea
                    className="placeholder-black placeholder-opacity-[42%] 1100px:placeholder:text-[16px] 600px:placeholder:text-[12px] placeholder:text-[11px] 1920px:text-[22px] 600px:text-[1.2vw] text-[11px]  resize-none outline-none px-[19px] 1100px:pt-[10px] pt-[5px] max-w-[446px] w-full 1500px:h-[113px] 1100px:h-[85px] 600px:h-[60px] h-[51px] rounded-[22px] bg-[#FFFFFF12] shadow-[0px_3.84px_7.5px_0.96px_#00000017] will-change-backdrop-filter backdrop-blur-[5.8px]"
                    // className="placeholder-black placeholder-opacity-[42%] 1100px:placeholder:text-[16px] 600px:placeholder:text-[12px] placeholder:text-[11px] 1920px:text-[22px] 600px:text-[1.2vw] text-[11px]  resize-none outline-none px-[19px] 1100px:pt-[10px] pt-[5px] max-w-[446px] w-full 1500px:h-[113px] 1100px:h-[85px] 600px:h-[60px] h-[51px] rounded-[22px] bg-[#FFFFFF12] shadow-[0px_3.84px_7.5px_0.96px_#00000017]"
                    placeholder={t('textareaContactUs')}
                  />
                </form>
                <BtnContactUs />
              </div>
              <div className="relative 1500px:max-w-[360px] 1100px:max-w-[256px] max-w-[132px] w-full">
                <img
                  className="arrow2 absolute 1500px:max-w-[1200px] 1100px:max-w-[400px] 600px:max-w-[300px] max-w-[200px] 1500px:bottom-[5px] 1500px:right-[-13px] 1100px:right-[25px] 1100px:bottom-[5px] 600px:right-[-45%]   600px:bottom-[-17px] bottom-[-108px] 600px:rotate-[0deg] rotate-[90deg]"
                  src={arrow1}
                  alt=""
                />
                <div className="600px:static relative bottom-[20px] flex items-center flex-col 1500px:gap-30px 1100px:gap-[23px] 600px:gap-[16px] gap-[14px]  w-full mb-[-88px]">
                  <p className="font-semibold 1500px:text-26px 1100px:text-[19px] 600px:text-[14px] text-[12px] 1100px:leading-31.47px leading-[17px]">
                    {t('pContactUs')}
                  </p>
                  <div className="flex flex-col 1500px:gap-[20px] 1100px:gap-[16px] 600px:gap-[11px] gap-[9px]">
                    <div className="flex items-center gap-[10px]">
                      <img
                        className="600px:block hidden 1500px:w-[34px] 1500px:h-[28px] 1100px:w-[25px] 1100px:h-[21px] w-[18px] h-[15px]"
                        src={tg}
                        alt=""
                      />
                      <p className="1920px:text-24px 1100px:text-[18px] 900px:text-[13px] 600px:text-[1.8vw] text-[11px]">
                        @kate_asoads
                      </p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <img
                        className=" 600px:block hidden 1500px:w-[37px] 1500px:h-[29px] 1100px:w-[26px] 1100px:h-[22px] w-[20px] h-[15px]"
                        src={email}
                        alt=""
                      />
                      <p className="1920px:text-24px 1100px:text-[18px] 900px:text-[13px] 600px:text-[1.8vw] text-[11px] ">
                        kate@asoads.com
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="arrow1 absolute 600px:rotate-0 rotate-[90deg] 1500px:top-[113px] max-w-[300px] w-[140%] 1100px:top-[60px] 600px:top-[52px] top-[-50px] 600px:right-0 "
                  src={arrow2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <Anim
            render="svg"
            anim="anim/phone 2.json"
            className="900px:block hidden 1500px:max-w-[591px] 1100px:max-w-[530px] 600px:max-w-[400px] 1500px:h-full 1100px:h-[1000px] 600px:h-[650px]  max-w-[420px] w-[90%] relative right-[-8%] 1500px:bottom-[5%] 1100px:bottom-[-1%] 600px:bottom-[-20%] bottom-[5%] z-10 1700px:pr-0 pr-[100px] "
          />
        </div>
        <div className="absolute   1500px:left-[-22%] 1100px:left-[-22%]  900px:left-[-40%] 600px:left-[-65%]  left-[-80%] 1100px:top-[0%] 600px:top-[10%] top-[15%] 1500px:w-[2080px] 1100px:w-[1600px] 600px:w-[1500px] w-[1000px] z-[1]">
          <img
            className={`w-full transition-transform duration-[5000ms] ease-in-out transform ${
              window.innerWidth > 900
                ? isInView
                  ? 'rotate-[45deg]'
                  : 'rotate-[0deg]'
                : isInView
                ? 'rotate-[90deg]'
                : 'rotate-[10deg]'
            }`}
            style={{ transformOrigin: 'center' }}
            src={bg2}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default MesBlock
