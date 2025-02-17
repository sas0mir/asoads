interface BlockProps {
  img: string
  p?: string
  className?: string
  classNameImg?: string
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <div
      className={`df-center 900px:h-[74px] h-[54px] 1500px:py-[15px] py-[11px] 1500px:px-[42px] 1100px:px-[32px] px-[30px] rounded-[14px] border-solid border-black border-[1px] gap-[5px]  ${
        props.className || ''
      }`}
    >
      <img className={`1500px:w-[46px] 1500px:h-[46px] 1100px:w-[34px] 1100px:h-[34px] w-[32px] h-[32px] ${props.classNameImg || ''}`} src={props.img} alt="" />
      {props.p && <p className="font-bold 1500px:text-[2.1875rem] 1100px:text-[26px] text-[25px]">{props.p}</p>}
    </div>
  )
}

export default Block
