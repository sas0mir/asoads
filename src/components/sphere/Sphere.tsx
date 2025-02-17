import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Anim from '../anim/Anim'

const Sphere = () => {
  const [secondAnimation, setSecondAnimation] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [scrollCount, setScrollCount] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  // const [scrollPosition, setScrollPosition] = useState(0)

  const { t } = useTranslation()

  const sphereRef = useRef(null)

  const rows = [
    { left: 'Adult', right: 'Utilities ' },
    { left: 'Betting', right: 'IGaming' },
    { left: 'Gambling', right: 'Sweepstakes' },
    { left: 'Dating', right: 'Finance' }
  ]

  function updateRowOffsets() {
    const width = window.innerWidth
    let rowOffsets

    if (width <= 600) {
      rowOffsets = [50, 80, 80, 50]
    } else if (width <= 1100) {
      rowOffsets = [150, 200, 200, 150]
    } else {
      rowOffsets = [350, 450, 450, 350]
    }

    return rowOffsets
  }

  const rowOffsets = updateRowOffsets()

  //группируем анимацию motion.div
  const rowVariantsLeft = {
    hidden: () => ({ opacity: 0, x: 0 }),
    visible: (i: number) => ({ opacity: 1, x: -rowOffsets[i] }),
  }
  const rowVariantsRight = {
    hidden: () => ({ opacity: 0, x: 0 }),
    visible: (i: number) => ({ opacity: 1, x: rowOffsets[i] }),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
      if (entry.isIntersecting) {
        setScrollCount((prevCount) => prevCount + 1)
        setIsExiting(false)
      } else {
        setIsExiting(true)
      }
    }, { threshold: 0.5 }) //срабатывание когда в поле видимости пол-элемента

    if (sphereRef.current) {
      observer.observe(sphereRef.current)
    }

    return () => {
      if (sphereRef.current) {
        observer.unobserve(sphereRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (scrollCount === 2) {
      setSecondAnimation(true)
    }
  }, [scrollCount])

  return (
    <div
      ref={sphereRef}
      className="relative 1100px:max-w-[735px] max-w-[400px] w-full 1500px:h-[735px] 1100px:h-[535px] 600px:h-[300px] h-[220px] mt-[100px]"
    >
      <div className="relative w-full h-full">
        <Anim anim="anim/sphere.json" className="absolute top-0 left-0 w-full h-full z-30" render="svg" loading="lazy" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
          <div className="relative z-30 flex flex-col items-center">
            {/* Белый размазанный блок */}
            <span
              style={{
                // filter: 'blur(20px)',
                // WebkitFilter: 'blur(20px)',
                //transform: 'translate3d(0, 0, 0)'
              }}
              className="absolute bg-blurWhite bottom-[-10px] opacity-[74%] rounded-full 
             1500px:w-[423px] 1100px:w-[293px] w-[180px] 
             1500px:h-[100px] 1100px:h-[60px] h-[40px]"
            >
              <span className="absolute inset-0"></span>
            </span>

            {/* Текст сверху */}
            <p className="relative font-bold text-center 1500px:text-[52px] 1100px:text-[39px] 600px:text-[28px] text-[20px]">
              {t('vertikali')}
            </p>
          </div>
        </div>
      </div>

      {isInView && !isExiting && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {secondAnimation ? (
            <div className="flex justify-between items-center">
              <motion.div
                className="flex flex-col 1100px:gap-[62px] gap-[20px] z-20"
                initial={{ x: 0 }}
                animate={{ x: [0, 0] }}
                transition={{
                  delay: 0,
                  duration: 4,
                  repeat: 1,
                  repeatType: 'mirror'
                }}
              >
                {rows.map((row, rowIndex) => (
                  <motion.div
                    key={`left-${rowIndex}`}
                    className="text-black font-bold 1100px:text-[30px] 600px:text-[16px] text-[12px] "
                    initial="hidden"
                    animate="visible"
                    variants={rowVariantsLeft}
                    custom={rowIndex}
                    transition={{ duration: 2, delay: rowIndex * 0.5 }}
                  >
                    <span className="underlineCust">{row.left}</span>
                  </motion.div>
                ))}
                {/* {rows.map((row, rowIndex) => (
                  <motion.div
                    key={`left-${rowIndex}`}
                    className="text-black font-bold 1100px:text-[30px] 600px:text-[16px] text-[12px] "
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: -rowOffsets[rowIndex] }}
                    transition={{
                      duration: 2,
                      fillMode: 'forwards',
                      delay: 0
                    }}
                  >
                    <span className="underlineCust">{row.left}</span>
                  </motion.div>
                ))} */}
              </motion.div>
              <motion.div
                className="flex flex-col 1100px:gap-[62px] gap-[20px]"
                initial={{ x: 0 }}
                animate={{ x: [0, 0] }}
                transition={{
                  duration: 4,
                  repeat: 1,
                  repeatType: 'mirror'
                }}
              >
                {rows.map((row, rowIndex) => (
                  <motion.div
                    key={`right-${rowIndex}`}
                    className="text-black font-bold 1100px:text-[30px] 600px:text-[16px] text-[12px] text-end "
                    initial="hidden"
                    animate="visible"
                    variants={rowVariantsRight}
                    custom={rowIndex}
                    transition={{ duration: 2, delay: rowIndex * 0.5 }}
                  >
                    <span className="underlineCust2">{row.right}</span>
                  </motion.div>
                  // <motion.div
                  //   key={`right-${rowIndex}`}
                  //   className="text-black font-bold 1100px:text-[30px] 600px:text-[16px] text-[12px] text-end"
                  //   initial={{ opacity: 0, x: 0 }}
                  //   animate={{ opacity: 1, x: rowOffsets[rowIndex] }}
                  //   transition={{
                  //     duration: 2,
                  //     fillMode: 'forwards',
                  //     delay: 0
                  //   }}
                  // >
                  //   <span className="underlineCust2">{row.right}</span>
                  // </motion.div>
                ))}
              </motion.div>
            </div>
          ) : (
            rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-between items-center 1100px:mb-[62px] mb-[20px]">
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -rowOffsets[rowIndex] }}
                  transition={{
                    duration: 2,
                    delay: rowIndex * 0.5,
                    when: 'beforeChildren'
                  }}
                  className="text-black font-bold 1100px:text-[30px] text-[16px]"
                >
                  <span className="underlineCust">{row.left}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: rowOffsets[rowIndex] }}
                  transition={{
                    duration: 2,
                    delay: rowIndex * 0.5,
                    when: 'beforeChildren'
                  }}
                  className="text-black font-bold 1100px:text-[30px] text-[16px]"
                >
                  <span className="underlineCust2">{row.right}</span>
                </motion.div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Sphere
