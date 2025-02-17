import { motion } from 'framer-motion';
import { useState, useEffect, useRef} from 'react';
import { debounce } from 'lodash';

import bg from '../../assets/adFormat/bg1.png';
import not from '../../assets/adFormat/not1.png';
import cursor from '../../assets/adFormat/cursor.svg';

const Anim1 = () => {
  const [animationState, setAnimationState] = useState('initial');
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  const handleResize = () => {
    const newScale = Math.min(window.innerWidth / 1200, 1);
    setScale(newScale);
  };

  const debouncedResize = debounce(handleResize, 100);

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    handleResize();
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  const bgVariants = {
    initial: { x: 0, opacity: 0 },
    moveRight: { x: -80, y: -20, opacity: 1 },
    standStill: { x: -80, y: -20, opacity: 1 },
    returnToStart: { x: 0, opacity: 0 },
    standStillAtStart: { x: 0, opacity: 0 },
  };

  const cursorVariants = {
    initial: { y: 0 },
    moveRight: { y: -40 },
    standStill: { y: -40 },
    returnToStart: { y: 0 },
    standStillAtStart: { y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setAnimationState((prevState) => {
        if (prevState === 'initial') return 'moveRight';
        if (prevState === 'moveRight') return 'standStill';
        if (prevState === 'standStill') return 'returnToStart';
        if (prevState === 'returnToStart') return 'standStillAtStart';
        if (prevState === 'standStillAtStart') return 'moveRight';
        return 'initial';
      });
    }, animationState === 'standStillAtStart' || animationState === 'initial'
      ? 100
      : animationState === 'standStill' || animationState === 'standStillAtStart'
      ? 1000
      : 1500);

    return () => clearTimeout(timer);
  }, [animationState, isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative 600px:w-[50%] w-[65%] flex justify-center items-center z-[2] right-[0%]"
      style={{
        ...(window.innerWidth > 600 && {
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        })
      }}
    >
      <img src={bg} alt="background" className="w-full h-auto" />

      <motion.img
        src={not}
        className="animated-element absolute left-0 600px:w-[50vw] w-[100vw] h-auto z-[3]"
        variants={bgVariants}
        initial="initial"
        animate={animationState}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      />

      <motion.img
        src={cursor}
        alt="cursor"
        className="animated-element absolute top-[50%] left-[82%] w-[20%] -translate-x-1/2 -translate-y-1/2"
        variants={cursorVariants}
        initial="initial"
        animate={animationState}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

export default Anim1;