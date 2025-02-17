import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import bg1 from '../../assets/adFormat/bg2.png'
import bg2 from '../../assets/adFormat/bg3.png'
import not1 from '../../assets/adFormat/not2.png'
import not2 from '../../assets/adFormat/not3.png'

const Anim2 = () => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 1200, 1)
      setScale(newScale)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const notAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      y: [0, 0, -20],
      transition: {
        duration: 1.5,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <div className="relative 900px:w-full h-full 600px:w-[70%] w-full flex justify-center items-center z-10 900px:right-[20%] right-[10%]">
      <div className="absolute z-[1] 600px:w-[60%] w-[75%]" style={{ willChange: 'transform, opacity' }}>
        <div className="relative w-full left-[17%]">
          <motion.img
            className="absolute top-[8%] right-[10%] w-[30%]"
            src={not1}
            alt=""
            variants={notAnimation}
            initial="hidden"
            animate="visible"
            style={{ transform: 'translateZ(0)' }}
          />
          <img className="w-full" src={bg1} alt="" />
        </div>
      </div>
      <div className="absolute z-[2] 600px:right-[2%] right-[-20%] 600px:w-[20%] w-[50%]" style={{ willChange: 'transform, opacity' }}>
        <div
          className="relative w-full bottom-[30%]"
          style={{
            transform: `scale(${scale}) translateZ(0)`,
            transformOrigin: 'center center',
          }}
        >
          <motion.img
            className="absolute top-[5%] right-[8%] w-[66%]"
            src={not2}
            alt=""
            variants={notAnimation}
            initial="hidden"
            animate="visible"
            style={{ transform: 'translateZ(0)' }}
          />
          <img className="w-full" src={bg2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Anim2
