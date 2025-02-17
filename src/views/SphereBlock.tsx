import { useTranslation } from 'react-i18next'

import Btn from '../components/btns/Btn'
import Sphere from '../components/sphere/Sphere'
// import TargetTools from './TargetTools'

const SphereBlock = () => {
  const { t, i18n: _i18n } = useTranslation()

  return (
    <div className='w-full safari'>
      <div className="flex items-center flex-col  w-full 900px:h-full h-full">
        <Sphere />
        <Btn
          p={t('btnSphere')}
        />
      </div>
      {/* {window.innerWidth <= 900 && <TargetTools />} */}
    </div>
  )
}

export default SphereBlock
