import Infa from '../components/targetTools/Infa'
import Anim from '../components/anim/Anim'

const TargetTools = () => {
  return (
    <div className="safari 900px:df-center flex items-start w-full 1500px:px-[100px] 1100px:px-[75px] 600px:px-[53px] px-[45px] 1100px:h-[720px] 900px:h-[618px] h-auto mt-[200px] 900px:mt-[87px]">
      <div
        className={`relative  w-full flex 900px:justify-end justify-center items-center border-solid border-black border-[2px] 1500px:rounded-[110px]
       1100px:rounded-[82px] rounded-[59px] 1500px:py-[65px] 1100px:py-[42px] 600px:py-[23px] py-[50px] 1500px:px-[84px] 1100px:px-[62px] 600px:px-[45px] px-[5px] 
       bg-[url('../assets/bg/bgTargetTools.png')] 900px:bg-right bg-cover  bg-no-repeat 1500px:h-[534px] 1100px:h-[401px] 600px:h-[284px] h-auto`}
      >
        <Anim
          render="canvas"
          anim="anim/phone.json"
          className="900px:block hidden 1500px:max-w-[938px] 1100px:max-w-[800px] max-w-[630px] w-[90%] absolute left-[-10%] top-[-40px]"
        />

        <Infa />
      </div>
    </div>
  )
}

export default TargetTools
