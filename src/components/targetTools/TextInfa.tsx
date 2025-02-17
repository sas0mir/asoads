interface TextInfaProps {
  img: string
  p: string
}

const TextInfa: React.FC<TextInfaProps> = (props) => {
  return (
    <div className="flex items-center gap-[5px] 1500px:h-[40px] 1100px:h-[30px] 900px:h-[21px] h-[25px]">
      <img className="1500px:w-[40px] 1100px:w-[30px] 900px:w-[21px] 600px:w-[25px] w-[20px]" src={props.img} alt="" />
      <p className="1500px:text-28px 1100px:text-[17px] 900px:text-[15px] text-[15px] 1500px:leading-32.2px 1500px:tracking-60px-3% tarcking-[0]">
        {props.p}
      </p>
    </div>
  )
}

export default TextInfa
