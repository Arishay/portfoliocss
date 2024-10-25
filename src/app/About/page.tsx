import React from 'react'
import Image from 'next/image'
import heroimg from '../components/public/Group 62.png'
import doodle from '../components/public/doodles mixed round.png'
import Navbar from '../components/Navbar'
export default function page() {
  return (
 <div>

  <Navbar/>
   <div className="flex-container">
    
      <h1 >About <span className='highlight1'>Me</span> </h1>
      <h3 className=''>I'm Arisha <span className='text-white'>Ghaffar</span></h3>
      <div className='both'>
        
 
        <div className='left-column '>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas vel laboriosam commodi tempora, molestiae tenetur dolore dolor sit quos provident ea laudantium, ipsum sequi culpa illo dicta? Iste, praesentium.</p>
        </div>
        <div className='right-column' >
      <Image
        src={doodle}
        alt={"700"}
        className=''
        />
        <Image
        src={heroimg}
        alt={"700"}
        className='imge'
        />
      </div>
      </div>
    </div>
    </div>
  )
}
