interface AnimProps {
  placeholder: string
}

const Input: React.FC<AnimProps> = (props) => {
  return (
    <input
      className={`1920px:text-[22px] 600px:text-[1.2vw] text-[11px]  placeholder-black placeholder-opacity-[42%] 1100px:placeholder:text-[16px]
        600px:placeholder:text-[12px] placeholder:text-[11px] outline-none px-[19px] max-w-[446px] w-full 1500px:h-[44px] 1100px:h-[33px] h-[24px] rounded-[22px]
        bg-[#FFFFFF12] shadow-[0px_3.84px_7.5px_0.96px_#00000017] backdrop-blur-[5.8px] will-change-backdrop-filter`}
      // className={`1920px:text-[22px] 600px:text-[1.2vw] text-[11px]  placeholder-black placeholder-opacity-[42%] 1100px:placeholder:text-[16px]
      //   600px:placeholder:text-[12px] placeholder:text-[11px] outline-none px-[19px] max-w-[446px] w-full 1500px:h-[44px] 1100px:h-[33px] h-[24px] rounded-[22px]
      //   bg-[#FFFFFF12] shadow-[0px_3.84px_7.5px_0.96px_#00000017]`}
      type="text"
      placeholder={props.placeholder}
    />
  )
}

export default Input
