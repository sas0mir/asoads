interface BlockProps {
  classNameBlock?: string
  className?: string
  classNameP?: string
  classNameImg?: string
  img?: string | null
  p: string
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <div className={`relative inline-block rounded-md bg-white text-black z-10 ${props.classNameBlock || ''}`}>
      <div
        className="blockWorckingUs absolute inset-0 blur-md rounded-md opacity-[60%] "
        // className="blockWorckingUs absolute inset-0 rounded-md opacity-[60%] "
      ></div>
      <div className={`relative bg-white 1100px:rounded-[14px] rounded-[8px] 1500px:py-[15px] 1100px:py-[11px] 900px:py-[8px] py-[10px] 1500px:px-[20px] 1100px:px-[25px] 900px:px-[11px] px-[13px] w-full ${props.className || ''}`}>
        <p className={`1500px:text-25px 1100px:text-[18px] 900px:text-[13px] 600px:text-[17px] text-[12px] font-medium 1500px:leading-31.47px 1100px:leading-[22px] leading-[16px] text-center font-inter ${props.classNameP || ''}`}>
          {props.p}
        </p>
        {props.img && <img className={`absolute ${props.classNameImg || ''}`} src={props.img} alt="" />}

      </div>
    </div>
  )
}

export default Block
