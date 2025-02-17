import { Route, Routes } from 'react-router-dom'

// import HeroBlock from './views/HeroBlock'
import MainLayout from './routes/MainLayout'
import Error404 from './views/Error404'
// import AdFormat from './views/AdFormta'
// import TargetTools from './views/TargetTools'
// import WorkingUs from './views/WorkingUs'
// import Payment from './views/Payment'
// import ContactUs from './views/ContactUs'
// import SphereBlock from './views/SphereBlock'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            {/* <HeroBlock />
            <AdFormat />
            <SphereBlock />
            {window.innerWidth >= 900 && <TargetTools />}
            <WorkingUs />
            <Payment />
            <ContactUs /> */}
          </MainLayout>
        }
      />
      <Route path="/error" element={<Error404 />} />
    </Routes>
  )
}

export default App
