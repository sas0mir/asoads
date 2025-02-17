import img1 from '../assets/payment/block1.svg'
import img2 from '../assets/payment/block2.svg'
import img3 from '../assets/payment/block3.svg'
import img4 from '../assets/payment/block4.svg'
import img6 from '../assets/payment/block6.svg'
import img7 from '../assets/payment/block7.svg'

import Block from '../components/payment/Block'

import { useTranslation } from 'react-i18next'


const Payment = () => {
  const { t, i18n: _i18n } = useTranslation()

  return (
    <div className="flex safari items-center 900px:max-w-full max-w-[638px] w-full 1500px:mb-[238px] 1100px:mb-[138px] my-[126px]  900px:justify-end justify-center flex-col 1500px:px-[100px] 600px:px-[75px] px-[45px] 1700px:h-[918px] h-[600px]   600px:gap-50px gap-[30px]">
      <h2 className='h2 600px:leading-[40px] 1500px:!text-[50px] 1100px:!text-[37px] 600px:!text-[35px] !text-[21px] leading-[30px] text-center' >{t('h2Payment')}</h2>
      <div className="df-center flex-col 1100px:gap-30px 600px:gap-[21px] gap-[10px] max-w-[1202px]  w-full">
        <div className="900px:max-w-[822px] max-w-full w-full flex justify-center 900px:flex-row flex-col 1100px:gap-50px 900px:gap-[36px] 600px:gap-[21px] gap-[10px]">
          <Block img={img1} p="Capitalist" />
          <Block img={img2} p="Tether" />
          <Block classNameImg='!max-w-[92px] !w-full' img={img3} />
        </div>
        <div className="flex max-w-full w-full justify-center 900px:flex-row flex-col 1100px:gap-50px 900px:gap-[36px] 600px:gap-[21px] gap-[10px]">
          <Block img={img4} p="Bitcoin" />
          <Block img={img1} p="Etherium" />
          <Block img={img6} p="Visa" />
          <Block img={img7} p="MasterCard" />
        </div>
      </div>
    </div>
  )
}

export default Payment
