import React from 'react'
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full max-w-full flex justify-between mb-8 z-0 absolute self-end">
        <p> Homepage </p>
        <div className="w-52 gap-6 flex ">
            <FaFacebookF/>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>
        <div className='flex gap-16'> 
            <div className='border-b-2 border-grey-500 w-28 '></div>
            <p>Page Name</p> 
        </div>

    </div>
  )
}

export default Footer