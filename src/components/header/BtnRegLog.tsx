// import { useState } from 'react'

const BtnRegLog = () => {
  //   const [active, setActive] = useState<string | null>(null)

  //   const handleClick = (btnType: 'login' | 'signup') => {
  //     setActive(btnType)
  //   }

  return (
    <div className="df-center border-solid border-black border-[1.38px] 1100px:h-[57px] 600px:h-[40px] h-[27px] rounded-[37px] 1100px:w-[181px] 600px:w-[130px] w-[87px]  justify-between bg-black">
      <button
        // onClick={() => handleClick('login')}
        className={`df-center h-[55px]  1100px:pl-5 600px:pl-[14px] pl-[10px]  cursor-pointer`}
        // ${active === 'login' ? '!logRegActive' : ''}
      >
        <p className="1100px:text-[.8125rem] 600px:text-[10px] text-[7px] font-bold text-white"> LOG N</p>
      </button>
      <button
        // onClick={() => handleClick('signup')}
        className={`df-center 1100px:max-w-[103px] 600px:max-w-[73px] w-[45px] 600px:w-full   1100px:h-[55px] 600px:h-[38px] h-[25px]  cursor-pointer bg-white rounded-[37px]`}
        // ${active === 'signup' ? '!logRegActive' : ''}
      >
        <p className="1100px:text-[.8125rem] 600px:text-[10px] text-[7px] font-bold"> SIGN UP</p>
      </button>
    </div>
  )
}

export default BtnRegLog
