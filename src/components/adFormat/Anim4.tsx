import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import bg1 from "../../assets/adFormat/bg6.png";
import bg2 from "../../assets/adFormat/bg7.png";
import not1 from "../../assets/adFormat/not6.png";
import not2 from "../../assets/adFormat/not7.png";

const Anim4 = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 1200, 1);
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const notAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-full flex justify-start items-center z-10 600px:right-[-5%] right-[50%]">
      {/* Обёртка для синхронного масштабирования */}
      <div
        className="absolute z-[1] 600px:w-[90%] w-[250%]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <div className="relative w-[80%] 900px:top-[-30px] top-[-10px] 900px:right-[-40px] 600px:right-[-80px] right-[90px]">
          <motion.img
            className="absolute top-[45.5%] left-[16.5%] w-[15%]"
            src={not1}
            alt=""
            variants={notAnimation}
            initial="hidden"
            animate="visible"
          />
          <img className="w-full" src={bg1} alt="" />
        </div>
      </div>

      <div
        className="absolute z-[2] 600px:w-[40%] w-[90%] 600px:right-[14%] right-[-75%]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <div className="relative w-[60%] 1100px:bottom-[-15px] 600px:bottom-[-30px] bottom-[-50px]">
          <motion.img
            className="absolute top-[58%] right-[9%] w-[47%]"
            src={not2}
            alt=""
            variants={notAnimation}
            initial="hidden"
            animate="visible"
          />
          <img className="w-full" src={bg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Anim4;
