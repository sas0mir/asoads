import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import bg1 from '../../assets/adFormat/bg4.png';
import bg2 from '../../assets/adFormat/bg5.png';
import not1 from '../../assets/adFormat/not4.png';
import not2 from '../../assets/adFormat/not5.png';

const Anim3 = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 1200, 1);
      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      },
    },
  };

  return (
    <div className="relative 900px:w-full h-full 600px:w-[70%] w-full flex justify-center items-center z-10 900px:right-[10%] 600px:right-[0%] right-[0%]">
      <div className="absolute z-[1] 600px:w-[60%] w-[75%]" style={{ willChange: 'transform, opacity' }}>
        <div className="relative w-full">
          <motion.img
            className="absolute top-[8%] right-[12%] w-[30%]"
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
      <div className="absolute z-[2] 600px:right-[8%] right-[-30%] 600px:w-[30%] w-[90%]" style={{ willChange: 'transform, opacity' }}>
        <div
          className="relative w-[80%] bottom-[-30px]"
          style={{
            transform: `scale(${scale}) translateZ(0)`,
            transformOrigin: 'center center',
          }}
        >
          <motion.img
            className="absolute top-[13%] right-[20%] w-[50%]"
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
  );
};

export default Anim3;
