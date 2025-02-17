import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState<string>('')

  const activeFn = (id: string) => {
    setActive(id)
  }

  return (
    <nav
      // className="df-center bg-bgOpacity backdrop-blur-[133px] rounded-[56px] max-w-[638px] w-full
      //     h-[83px] px-[30px] bottom-[172px] left-[33.5%] absolute z-20"
      className="df-center bg-bgOpacity rounded-[56px] max-w-[638px] w-full
          h-[83px] px-[30px] bottom-[172px] left-[33.5%] absolute z-20"
    >
      <li className="flex items-center justify-between w-full">
        <ul
          onClick={() => activeFn('1')}
          id="1"
          className={`text-20px font-bold leading-23px cursor-pointer text-white p-[10px]
           ${active === '1' ? 'bg-white !text-black  rounded-[35px]' : ''}`}
        >
          HOME
        </ul>
        <ul
          onClick={() => activeFn('2')}
          id="2"
          className={`text-20px font-bold leading-23px cursor-pointer text-white p-[10px]
           ${active === '2' ? 'bg-white !text-black  rounded-[35px]' : ''}`}
        >
          PUBLISHER
        </ul>
        <ul
          onClick={() => activeFn('3')}
          id="3"
          className={`text-20px font-bold leading-23px cursor-pointer text-white p-[10px]
           ${active === '3' ? 'bg-white !text-black  rounded-[35px]' : ''}`}
        >
          ADVERSTISER
        </ul>
        <ul
          onClick={() => activeFn('4')}
          id="4"
          className={`text-20px font-bold leading-23px cursor-pointer text-white p-[10px]
           ${active === '4' ? 'bg-white !text-black  rounded-[35px]' : ''}`}
        >
          RTB
        </ul>
      </li>
    </nav>
  )
}

export default Nav
