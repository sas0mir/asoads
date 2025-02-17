import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface BtnLnChangeProps {
  open?: string
}

const BtnLnChange: React.FC<BtnLnChangeProps> = ({ open: propsOpen }) => {
  const [open, setOpen] = useState<string>(propsOpen === 'open' ? 'open' : 'close')
  const [active, setActive] = useState<string | null>('1')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('RU')

  const btnOpen = () => {
    if (propsOpen !== 'open') {
      setOpen((prevOpen) => (prevOpen === 'open' ? 'close' : 'open'))
    }
  }

  const btnActive = (id: string, language: string) => {
    if (open === 'open') {
      setActive(id)
      setSelectedLanguage(language)
    }
  }

  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ru'
    i18n.changeLanguage(savedLanguage)
    setSelectedLanguage(savedLanguage.toUpperCase())
    setActive(savedLanguage === 'ru' ? '1' : savedLanguage === 'es' ? '2' : '3')
  }, [i18n])

  useEffect(() => {
    if (propsOpen === 'open') {
      setOpen('open')
    }
  }, [propsOpen])

  return (
    <button
      onClick={btnOpen}
        className={`df-center bg-bgOpacity will-change-backdrop-filter backdrop-blur-[100px] p-[10px] rounded-full cursor-pointer 1100px:w-[53px] 1100px:h-[49px] w-[43px] 600px:h-[40px] h-[31px]
          ${open === 'open' ? '1100px:!w-[140px] 600px:!w-[118px] 600px:max-w-full max-w-[87px] w-full' : ''}`}
      >
      {/* className={`df-center bg-bgOpacity p-[10px] rounded-full cursor-pointer 1100px:w-[53px] 1100px:h-[49px] w-[43px] 600px:h-[40px] h-[31px]
      ${open === 'open' ? '1100px:!w-[140px] 600px:!w-[118px] 600px:max-w-full max-w-[87px] w-full' : ''}`}
    > */}
      <div className="flex gap-[5px]">
        <div
          onClick={() => {
            if (open === 'open') {
              btnActive('1', 'RU')
              changeLanguage('ru')
            }
          }}
          className={`df-center 1100px:w-[33px] 1100px:h-[29px] 600px:w-[27px] 600px:h-[24px] w-[21px] h-[18px] rounded-full  
                ${active === '1' ? 'bg-white' : 'bg-none'} ${open === 'open' ? 'bg-none' : 'bg-white'}`}
        >
          <p
            className={`1100px:text-[13px] 600px:text-[11px] text-[8px] font-bold p-[7px] ${
              open === 'open' ? 'text-white' : ''
            } ${active === '1' ? '!text-black' : ''}`}
          >
            {open === 'open' ? 'RU' : selectedLanguage}
          </p>
        </div>
        <div className={`flex gap-[10.5px] ${open === 'open' ? 'flex' : 'hidden'}`}>
          <div
            onClick={() => {
              btnActive('2', 'ES')
              changeLanguage('es')
            }}
            className={`df-center 1100px:w-[33px] 1100px:h-[29px] 600px:w-[27px] 600px:h-[24px] w-[21px] h-[18px] rounded-full 1100px:text-[13px] 600px:text-[11px] text-[8px]  
                ${active === '2' ? 'bg-white' : 'bg-none'}`}
          >
            <p
              className={`1100px:text-[13px] 600px:text-[11px] text-[8px] font-bold p-[7px] ${
                open === 'open' ? 'text-white' : ''
              } ${active === '2' ? '!text-black' : ''}`}
            >
              ES
            </p>
          </div>
          <div
            onClick={() => {
              btnActive('3', 'EN')
              changeLanguage('en')
            }}
            className={`df-center 1100px:w-[33px] 1100px:h-[29px] 600px:w-[27px] 600px:h-[24px] w-[21px] h-[18px] rounded-full 1100px:text-[13px] 600px:text-[11px] text-[8px] 
                ${active === '3' ? 'bg-white' : 'bg-none'}`}
          >
            <p
              className={`1100px:text-[13px] 600px:text-[11px] text-[8px] font-bold p-[7px] ${
                open === 'open' ? 'text-white' : ''
              } ${active === '3' ? '!text-black' : ''}`}
            >
              EN
            </p>
          </div>
        </div>
      </div>
    </button>
  )
}

export default BtnLnChange
