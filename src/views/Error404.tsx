import Footer from './Footer'
import Header from './Header'

import cube1 from '../assets/bg/cube1.svg'
import cube2 from '../assets/bg/cube2.svg'

import { useTranslation } from 'react-i18next'

const Error404 = () => {
  const { t, i18n: _i18n } = useTranslation()

  return (
    <div className="flex flex-col  bg-[#EDE7E7] overflow-x-hidden max-w-[1920px] min-h-screen relative ">
      <Header className="!max-w-[1920px] !rounded-none !static h-[255px] !mt-0" />
      <div className='1500px:px-[100px] 600px:px-[75px] px-[45px]'>
        <div className="df-center justify-between w-full 1500px:px-[100px] 600px:px-[75px] px-[45px]">
          <div className="flex flex-col gap-30px max-w-[667px]">
            <h2 className="text-32px font-bold leading-36.8px uppercase">{t('error404')}</h2>
            <button className="bg-darkOrange max-w-[338px] max-h-[53px] rounded-[47px] py-[10px] px-[93px]">
              <p className="font-bold text-28px leading-32.2px">TRY AGAIN</p>
            </button>
          </div>
          <div className="relative right-[300px] top-[-44px]">
            <div className="relative z-[2]">
              <div className="w-[397px] h-[432px] relative">
                <div></div>
                <div className="w-[85px] h-[85px] rounded-full bg-primaryOrange absolute top-0 right-0 shadow-orange z-20"></div>
                <div className="relative bottom-[-28px] left-[14px] z-10">
                  <img src={cube1} alt="" />
                  <img className="absolute bottom-[-175px] right-[26px]" src={cube2} alt="" />
                </div>
                <div className="w-[85px] h-[85px] m-[14px] rounded-full bg-primaryOrange absolute bottom-0 left-0 shadow-orange2 z-20"></div>
              </div>
              <h1 className="text-[360px] font-bold absolute bottom-[-231px] right-[-66px] leading-[413px]">404</h1>
            </div>
            <div className="w-[1924px] h-[388px] bg-bgDark backdrop-blur-[1px] opacity-[20%] absolute z-[1] left-[-690px] "></div>
            {/* <div className="w-[1924px] h-[388px] bg-bgDark opacity-[20%] absolute z-[1] left-[-690px] "></div> */}
          </div>
        </div>
      </div>

      <Footer className="bottom-[-214px]" />
    </div>
  )
}

export default Error404
