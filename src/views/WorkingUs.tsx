import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Block from '../components/workingUs/Block'

import img1 from '../assets/workingUs/block1.png'
import img2 from '../assets/workingUs/block3.png'
import img3 from '../assets/workingUs/block5.png'
import img4 from '../assets/workingUs/block7.png'
import bg from '../assets/workingUs/bgWorkingUs.png'
import bgMob from '../assets/workingUs/bgMob.png'
import bgWhite from '../assets/workingUs/bgWhiteMob.svg'

const WorkingUs = () => {
  const { t, i18n: _i18n } = useTranslation()
  const [block1, setBlock1] = useState(t('block1WorkUs'))
  const [block2, setBlock2] = useState(t('block2WorkUs'))
  const [block3, setBlock3] = useState(t('block3WorkUs'))
  const [block4, setBlock4] = useState(t('block4WorkUs'))
  const [block5, setBlock5] = useState(t('block5WorkUs'))
  const [block6, setBlock6] = useState(t('block6WorkUs'))
  const [block7, setBlock7] = useState(t('block7WorkUs'))
  const [imgBlock1, setImg1] = useState<string | null>(null)
  const [imgBlock2, setImg2] = useState<string | null>(null)
  const [imgBlock3, setImg3] = useState<string | null>(null)
  const [imgBlock4, setImg4] = useState<string | null>(null)
  const [imgBlock5, setImg5] = useState<string | null>(null)
  const [imgBlock6, setImg6] = useState<string | null>(null)
  const [imgBlock7, setImg7] = useState<string | null>(null)
  const [imgBlock8, setImg8] = useState<string | null>(null)

  useEffect(() => {
    const textBlock = () => {
      if (window.innerWidth <= 900) {
        setBlock1(t('block2WorkUs'))
        setBlock2(t('block1WorkUs'))
        setBlock3(t('block4WorkUs'))
        setBlock4(t('block5WorkUs'))
        setBlock5(t('block7WorkUs'))
        setBlock6(t('block3WorkUs'))
        setBlock7(t('block6WorkUs'))
        setImg1(null)
        setImg2(img1)
        setImg3(null)
        setImg4(img3)
        setImg5(null)
        setImg6(img4)
        setImg7(null)
        setImg8(img2)
      } else {
        setBlock1(t('block1WorkUs'))
        setBlock2(t('block2WorkUs'))
        setBlock3(t('block3WorkUs'))
        setBlock4(t('block4WorkUs'))
        setBlock5(t('block5WorkUs'))
        setBlock6(t('block6WorkUs'))
        setBlock7(t('block7WorkUs'))
        setImg1(img1)
        setImg2(null)
        setImg3(img2)
        setImg4(null)
        setImg5(img3)
        setImg7(img4)
        setImg8(null)
      }
    }

    textBlock()

    window.addEventListener('resize', textBlock)

    return () => {
      window.removeEventListener('resize', textBlock)
    }
  }, [t])

  return (
    <div className=" safari w-full df-center relative 900px:mt-[200px] mt-[50px]">
      <div className="flex 900px:max-w-full max-w-[658px]  w-full 900px:justify-start justify-center flex-col 1100px:gap-[91px] 600px:gap-[47px] gap-[20px] 1500px:h-[700px] 1100px:h-[630px] 900px:h-[400px] h-[620px] relative z-10 1500px:rounded-b-[900px] 900px:rounded-b-[99999%] 600px:rounded-b-[30%] rounded-b-[80%] bg-white 1500px:px-[100px] 600px:px-[75px] px-[45px] shadow-[0px_21px_33.4px_0px_#FFFFFF40]">
        <h2 className="h2 1500px:!text-[50px] 900px:!text-[37px] 600px:!text-[31px] !leading-[25px] !text-[22px] 600px:text-start text-center">{t('h2WorkUs')}</h2>
        <div className="flex  items-center flex-col w-full p-[10px]">
          <div className="flex 900px:flex-row flex-col justify-between 1500px:max-w-[1383px] 1100px:max-w-[1018px] 900px:max-w-[735px] max-w-[488px] items-end 900px:gap-[48px] 600px:gap-[20px] gap-[10px] w-full">
            <Block
              classNameBlock="1500px:max-w-[480px] 1100px:max-w-[360px] 900px:max-w-[255px] max-w-full w-full relative"
              classNameP="1500px:max-w-[276px] 1100px:max-w-[263px] 900px:max-w-[190px] max-w-[401px] text-start"
              className="900px:max-w-[480px] max-w-full"
              p={block1}
              img={imgBlock1}
              classNameImg="absolute 1500px:top-[-70%] top-[-75%] right-[-2%] 1100px:w-[45%] w-[40%] max-w-full transform rotate-66 scale-100 transition-transform duration-300"
            />
            <Block
              classNameBlock="1500px:max-w-[342px] 1100px:max-w-[257px] 900px:max-w-[182px] max-w-full w-full"
              classNameP="1500px:max-w-[302px] 900px:max-w-[278px] max-w-full 900px:text-center text-start"
              p={block2}
              img={imgBlock2}
              classNameImg="absolute 600px:block hidden  top-[-115%] right-[-2%] w-[25%] max-w-full transform rotate-66 scale-100 transition-transform duration-300"
            />
            <Block
              classNameBlock=" 1500px:max-w-[381px] 1100px:max-w-[286px] 900px:max-w-[203px] max-w-full w-full "
              classNameP="1500px:max-w-[293px] 1100px:max-w-[218px] 900px:max-w-[156px] max-w-full text-start"
              p={block3}
              img={imgBlock3}
              classNameImg="absolute 1500px:top-[-40%] top-[-50%] right-[-5%] 900px:w-[45%] w-[25%] "
            />
          </div>
          <div className="flex 900px:flex-row flex-col justify-between items-end 900px:gap-[48px] 600px:gap-[20px] gap-[10px] 1500px:max-w-[1154px] 1100px:max-w-[864px] 900px:max-w-[615px] max-w-[488px]  1100px:mt-[60px] 900px:mt-[34px] 600px:mt-[20px] mt-[10px] w-full">
            <Block
              classNameBlock="1500px:max-w-[320px] 1100px:max-w-[240px] 900px:max-w-[171px] max-w-full w-full "
              classNameP="1500px:max-w-[280px] 900px:max-w-[210px] max-w-full 900px:text-center text-start"
              p={block4}
              img={imgBlock4}
              classNameImg="absolute 600px:block hidden top-[-125%] right-[-2%] w-[25%] "
            />
            <Block
              classNameBlock="1500px:max-w-[344px] 1100px:max-w-[258px] 900px:max-w-[183px] max-w-full w-full"
              classNameP="1500px:max-w-[255px] 1100xp:max-w-[190px] 900px:max-w-[154px] max-w-full text-start "
              p={block5}
              img={imgBlock5}
              classNameImg="absolute 1500px:top-[-21%] top-[-15%] 1100px:right-[-10%] right-[-7%] w-[55%] "
            />
            <Block
              classNameBlock="1500px:max-w-[310px] 1100px:max-w-[233px] 900px:max-w-[165px] max-w-full w-full "
              classNameP="1500px:max-w-[270px] 900px:max-w-[203px] max-w-full 900px:text-center text-start"
              p={block6}
              img={imgBlock6}
              classNameImg="absolute 600px:block hidden  top-[-105%]   right-[0%] w-[22%]"
            />
          </div>
          <div className="flex 900px:flex-row flex-col justify-between items-end 900px:gap-[48px] 600px:gap-[20px] gap-[10px] 1500px:max-w-[737px] 1100px:max-w-[555px] 900px:max-w-[400px] max-w-[488px] 1500px:mt-[80px] 1100px:mt-[60px] 900px:mt-[34px] 600px:mt-[20px] mt-[10px] w-full">
            <Block
              classNameBlock="1500px:max-w-[411px] 1100px:max-w-[308px] 900px:max-w-[219px] max-w-full w-full flex "
              classNameP="1500px:max-w-[287px] 1100px:max-w-[213px] 900px:max-w-[161px] max-w-full 900px:text-end text-start"
              className="flex 900px:justify-end justify-start"
              p={block7}
              img={imgBlock7}
              classNameImg=" absolute 1500px:top-[-21%] top-[-25%]  1500px:left-[-12%] left-[-5%] w-[40%]"
            />
            <Block
              classNameBlock="1500px:max-w-[246px] 1100px:max-w-[180px] 900px:max-w-[131px] max-w-full w-full"
              classNameP="max-w-[206px] 600px:text-center text-start"
              p={t('block8WorkUs')}
              img={imgBlock8}
              classNameImg="absolute 600px:block hidden  top-[-115%] right-[15%] w-[25%] max-w-full transform rotate-[100] scale-100 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <img className="900px:max-w-full 900px:block hidden max-w-[500px] w-full absolute 1500px:top-[-20px] 900px:top-[85px] bottom-[-100px] z-[1]" src={bg} alt="" />
      <img className="900px:hidden block w-full absolute 600px:bottom-[-22%] bottom-[-15%] z-[1]" src={bgMob} alt="" />
      <img className='600px:hidden block absolute bottom-[-25px] z-[2]' src={bgWhite} alt="" />
    </div>
  )
}

export default WorkingUs
