import Anim from '../../components/anim/Anim'

// import line1 from '../../assets/heroblock/line2.svg'

const VideoBg = () => {
  return (
    <div className='hidden 900px:block 1500px:max-w-[1300px] 1100px:max-w-[1100px] max-w-[750px] z-[100] 1500px:top-[13%] 1500px:right-[-17%] top-[8%] right-[-20%]  absolute w-full' >
        {/* <img src={line1} alt="" /> */}
      <Anim anim="anim/PC.json" render='canvas' className=" w-full " />
    </div>
  )
}

export default VideoBg
