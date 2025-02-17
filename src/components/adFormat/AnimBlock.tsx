import { useState, useEffect, useRef } from 'react'
import bg from '../../assets/adFormat/1.png'

interface AnimBlockProps {
  anim: React.ReactNode
  rotationAngle: number
}

const AnimBlock: React.FC<AnimBlockProps> = ({ anim, rotationAngle }) => {
  const [moved, setMoved] = useState(false)
  const blockRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !moved) {
          setMoved(true)
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
  }, [moved])

  return (
    <div className="relative w-full 600px:h-full h-[400px] flex justify-center items-center" ref={blockRef}>
      {anim}
      <img
        className="900px:max-w-[1200px] max-w-[400px] w-full absolute transition-all duration-1000 ease-out z-[1]"
        style={{
          left:
            window.innerWidth <= 600
              ? moved
                ? '5%'
                : '-60%'
              : window.innerWidth <= 900
              ? moved
                ? '20%'
                : '-60%'
              : moved
              ? '-5%'
              : '-60%',
          transform: `rotate(${rotationAngle}deg)`
        }}
        src={bg}
        alt="Background"
      />
    </div>
  )
}

export default AnimBlock
