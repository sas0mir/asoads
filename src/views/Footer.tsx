import tg from '../assets/icons/tg.svg'
import skype from '../assets/icons/skype.svg'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={`safari df-center flex-col 1500px:gap-[10px] gap-[5px] 600px:pt-[35px] pt-0 max-w-[1867px] w-full  relative bottom-0 ${props.className || ''}`}>
      <div className="600px:flex hidden gap-[25px]">
        <img className="cursor-pointer 1500px:w-[23px] 1500px:h-[19px] w-[22px] h-[18px]" src={tg} alt="" />
        <a href="skype:live:.cid.668371bcfdea717?chat">
          <img className="cursor-pointer 1500px:w-[19px] 1500px:h-[19px] w-[18px] h-[18px]" src={skype} alt="" />
        </a>
      </div>
      <div className="flex justify-between items-center w-full 1500px:h-[68px] h-[53px] 1500px:px-[100px] 600px:px-[75px] px-[45px]">
        <a href="mailto:support@asoads.com" className="600px:flex hidden  text-gray 1500px:text-[16px] text-[12px] font-bold 1500px:leading-18.4px leading-[14px] uppercase flex-1">
          support@asoads.com
        </a>
        <div className="600px:df-center flex items-start flex-col">
          <p className="text-gray font-bold 1500px:leading-11.91px leading-[8px] uppercase 1500px:text-10.35px 600px:text-[8px] text-[4px]">ASOADS MOBILE SYSTEMS - FZCO</p>
          <p className="text-gray font-bold 1500px:leading-9.67px leading-[7px] uppercase 1500px:text-8.41px 600px:text-[6px] text-[3px]">
            Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
          </p>
        </div>
        <p className="flex justify-end text-gray font-bold 1500px:text-[16px] 600px:text-[12px] text-[6px] 1500px:leading-18.4px leading-[14px] uppercase flex-1">© 2024 ASOADS</p>
      </div>
    </footer>
  )
}

export default Footer
