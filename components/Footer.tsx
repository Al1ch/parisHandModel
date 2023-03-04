import React from 'react'
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import cn from "classnames"
import { useInView } from 'react-intersection-observer'




const Footer = () => {



  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="w-full max-w-full flex justify-between mb-8 z-0 absolute self-end px-6">
        <p className={cn(" animationLeftRight delay-150 textFont",{"textInView": inView})}> Homepage </p>
        <div className="w-50 gap-6 flex ">
            <FaFacebookF className="h-6 w-6"/>
            <FaInstagram  className="h-6 w-6"/>
            <FaWhatsapp  className="h-6 w-6"/>
        </div>
        <div className='flex gap-16'> 
            <div className={cn(" fill-white animationLeftRight border-b-2 border-grey-500 w-28  ",{"textInView": inView})}></div>
            <p className="textFont"> Page Name</p> 
        </div>

    </div>
  )
}

export default Footer