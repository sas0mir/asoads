import { useState, useEffect } from 'react'

import Infa from '../components/heroBlock/Infa'

import bgHeroBlock from '../assets/bg/bgHeroBlock.png'
// import bgMob from '../assets/heroBlock/bgMob.png'
import btn from '../assets/heroblock/scrollBtn.svg'
import VideoBg from '../components/heroBlock/VideoBg'

const HeroBlock = () => {
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative safari flex items-center w-full 1500px:px-[100px] 900px:px-[75px] px-[58px] 1500px:h-[1218px] 1100px:h-[767px] h-[645px] 1100px:top-[-3%] top-[-4%]">
      <Infa />
      <VideoBg />
      {showButton && (
        <img className="hidden 600px:block absolute z-40 1500px:bottom-[31%] bottom-[25%]  left-[50%] cursor-pointer animate-fade-out" src={btn} alt="" />
      )}
      <img className=" absolute top-0  900px:right-0 600px:right-[-50%] right-[-80%] bg-cover 900px:max-w-full 600px:max-w-[200%] max-w-[300%]" src={bgHeroBlock} alt="" />
    </div>
  )
}

export default HeroBlock
