import { useState } from 'react'
import BtnLnChange from '../components/header/BtnLnChange'
import BtnRegLog from '../components/header/BtnRegLog'

import logo from '../assets/header/logo.svg'
import burger from '../assets/header/burger.svg'
import tg from '../assets/header/tg.svg'
import skype from '../assets/header/skype.svg'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`header top-0 bg-headerGradient z-[999] h-[146px] sticky max-w-[1867px]
        w-full 900px:rounded-[20px] rounded-[10px] py-[26px] ${props.className || ''}`}
      // className={`header will-change-transform 1500px:top-[24px] 1100px:top-[17px] 600px:top-[24px] top-[8px] bg-headerGradient z-[999] h-[146px] max-w-[1867px]
      //   w-full 600px:rounded-[20px] rounded-[10px] py-[26px] ${props.className || ''}`}
    >
      <div className="relative flex 600px:justify-between justify-center items-start max-w-[1867px] w-full 1500px:px-[100px] 1100px:px-[75px] 900px:px-[50px] px-[58px]">
        <div className="flex-1 600px:block hidden">
          <BtnLnChange />
        </div>
        <div className="1500px:max-w-[250px] 1100px:max-w-[212px] 600px:max-w-[182px] max-w-[110px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="600px:flex hidden justify-end flex-1">
          <BtnRegLog />
        </div>
        <img
          className="600px:hidden block absolute right-[30px] top-[10px]"
          src={burger}
          alt="menu"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="df-center absolute top-[90px] right-[15px] bg-[#FFFFFF33] will-change-backdrop-filter backdrop-blur-45px shadow-lg rounded-lg p-4 w-[147px] border-solid border-black border-[3px] flex flex-col gap-[30px] z-[100]">
        {/* <div className="df-center absolute top-[90px] right-[15px] bg-[#FFFFFF33] shadow-lg rounded-lg p-4 w-[147px] border-solid border-black border-[3px] flex flex-col gap-[30px] z-[100]"> */}
          <div className="flex flex-col gap-[10px]">
            <BtnLnChange open="open" />
            <BtnRegLog />
          </div>
          <div className="df-center flex-col gap-[10px]">
            <a href="mailto:support@asoads.com" className="text-black text-[7px] font-bold uppercase flex-1">
              support@asoads.com
            </a>
            <div className="flex  gap-[15px]">
              <img className=" w-[20px] h-[15px]" src={tg} alt="" />
              <a href="skype:live:.cid.668371bcfdea717?chat">
                <img className=" w-[20px] h-[15px]" src={skype} alt="" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
