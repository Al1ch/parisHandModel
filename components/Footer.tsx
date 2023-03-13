import React from 'react'
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import cn from "classnames"
import { useInView } from 'react-intersection-observer'
import facebook from '../assets/vectors/facebook.svg'
import instagram from '../assets/vectors/instagram.svg'
import whatsapp from '../assets/vectors/whatsapp.svg'
import Image from 'next/image'





const Footer = () => {


  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const socialMedia = [{image: facebook, path: "/", id : 1}, {image: instagram, path: "/", id : 2}, {image: whatsapp, path: "/" , id : 3}]

  return (
    <div ref={ref} className="w-full flex justify-between mb-8 z-0 absolute self-end px-6">
        <p className={cn(" animate-fade-in textFont",{"textInView": inView})}> Homepage </p>
        <div className="w-50 gap-6 flex ">
          {socialMedia.map((item) =>(
            <Image key={item.id} alt="" src={item.image}  className={cn(`animate-fade-in  ` ,{"textInView": inView} )} />
          ))}
        </div>
        <div className='flex gap-16'> 
            <div className={cn(` fill-white animate-fade-in border-b-2 border-grey-500 w-28  `,{"textInView": inView})}></div>
            <p className="textFont"> Page Name</p> 
       </div>
    </div>
  )
}

export default Footer