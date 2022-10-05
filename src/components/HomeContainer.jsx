import React from 'react'
import controlPanel from '../img/Control Panel.ico'
import heroBg from '../img/heroBg.png'
import { heroData } from '../Utils/data'




function HomeContainer() {
  return (
    
    <section 
    className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' 
    id="home">
    <div className='py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6'>
      <div className='flex items-start gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>
          Alt du trenger å vite
        </p>
        <div className='w-8 h-8 p-1 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img 
            src={controlPanel} 
            className="w-full h-full object-contain" 
            alt="Control Panel"/>
        </div>
      </div>

      <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>Masse spennende content 
        <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>City</span>
      </p>
      <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
        unknown printer took a galley of type and scrambled it to make a type specimen 
        book. It has survived not only five centuries, but also the leap into electronic 
        typesetting, remaining essentially unchanged.
      </p>

      <button type="button" className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 
      py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
        Se her'a!
      </button>
    </div>
    <div className='py-2 flex-1 flex items-center relative'>
      <img src={heroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg"/>
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
        {heroData && heroData.map(n =>  (
            <div key ={n.id} className='lg:w-190 p-4 bg-cardOverlay 
            backdrop-blur-md rounded-3xl flex flex-col items-center hustify-center'>
            <img src={n.imagesrc} alt="Trash Empty" className="w-20 lg:w-40 -mt-10 lg:-mt-20"/>
            <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
            <p className='text-[12px] lg:ext-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.desc}</p>
            <p className='text-sm font-semibold text-headingColor'>
                <span className='text-xs text-red-600'>£</span>
                {n.price}
            </p>
        </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default HomeContainer