import { useTranslation } from 'react-i18next'

const BtnContactUs = () => {
  const { t, i18n: _i18n } = useTranslation()

  return (
    <button className="df-center hover:shadow-hoverBtn transition-all duration-500 ease-in-out cursor-pointer overflow-hidden relative w-full 1500px:h-[65px] 1100px:h-[48px] h-[35px]  bg-black rounded-40px">
      <p
        className="font-source  1500px:wordSpacing text-white font-semibold 1500px:text-[1.5625rem] 1100px:text-[18px] text-[13px] 600px:tracking-[-0.4] tracking-[0px] leading-[6.5px] z-0 whitespace-nowrap"
      >
        {t('btnContactUs')}
      </p>
    </button>
  )
}

export default BtnContactUs
