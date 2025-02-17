import arrowRight from '../../assets/icons/arrowRight.svg'

interface BtnProps {
  p: string
  className?: string
  classNameArrow?: string
}
const Btn: React.FC<BtnProps> = (props) => {
  return (
    <button
      className={`hover:shadow-hoverBtn transition-all duration-500 ease-in-out 
       cursor-pointer overflow-hidden relative inline-flex items-center justify-between
       bg-black rounded-40px pl-[20px] pr-[4px] 1100px:pr-[4px] py-[4px]  1100px:py-[4px] 1500px:h-[65px] 1100px:h-[48px] h-[40px] 
       group ${props.className || ''}`}
    >
      <p className="font-source text-white font-semibold text-[13px] 600px:text-[15px] 900px:text-[13px] 1100px:text-[17px] 1500px:text-[1.5625rem] leading-[6.5px] whitespace-nowrap">
        {props.p}
      </p>
      <div className="absolute right-[4px] df-center bg-white 1500px:w-[56px] 1500px:h-[56px] 1100px:w-[42px] 1100px:h-[42px] 900px:w-[30px] 900px:h-[30px] w-[34px] h-[34px] rounded-full z-20">
        <img
          className="transition-transform duration-500 ease-in-out transform group-hover:rotate-45 1500px:w-[24px] w-[18px] group-hover:scale-125"
          src={arrowRight}
          alt=""
        />
      </div>
      <div className="relative 1100px:right-[-10px] right-[-30px] w-[5rem] h-[5rem]">
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            filter: 'blur(8px)',
            WebkitFilter: 'blur(8px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        >
          <div className="absolute inset-0 bg-bgBtn opacity-[55%]" style={{ transform: 'scale(1.2)' }}></div>
        </div>
      </div>
    </button>
  )
}

export default Btn
