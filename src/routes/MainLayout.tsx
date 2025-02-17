// import React, { useRef } from 'react'
import React from 'react'
import Header from '../views/Header'
import Footer from '../views/Footer'

import HeroBlock from '../views/HeroBlock'
// import MainLayout from '../routes/MainLayout'
// import Error404 from '../views/Error404'
import AdFormat from '../views/AdFormta'
import TargetTools from '../views/TargetTools'
import WorkingUs from '../views/WorkingUs'
import Payment from '../views/Payment'
import ContactUs from '../views/ContactUs'
import SphereBlock from '../views/SphereBlock'

interface MainLayoutProps {
  children?: React.ReactNode
}

// const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
const MainLayout: React.FC<MainLayoutProps> = () => {
  // const sectionRefs = (React.Children.toArray(children) as React.ReactElement[]).map(() => useRef<HTMLDivElement>(null))

  return (
    <div className="flex flex-col justify-center items-center bg-black 1500px:px-[24px] 1100px:px-[17px] 600px:px-[13px] px-[5px] 1500px:pt-[24px] 1100px:pt-[17px] 600px:pt-[24px] pt-[8px] h-screen w-screen">
      <div className="flex flex-col items-center w-full bg-white 1100px:rounded-[20px] rounded-[10px] overflow-x-hidden scroll-smooth">
        <div className="flex flex-col items-center relative justify-center max-w-[1877px] w-full">
          <Header />
          {/* {React.Children.map(children, (child, index) => (
            <div
              key={index}
              ref={sectionRefs[index]}
              className="flex items-center justify-center w-full  "

            >
              {child}
            </div>
          ))} */}
          <HeroBlock />
          <AdFormat />
          <SphereBlock />
          <TargetTools />
          <WorkingUs />
          <Payment />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
