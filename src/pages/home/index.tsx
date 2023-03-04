import React, {useState} from 'react'
import { global } from 'styled-jsx/css'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import homePic from "../../../assets/images/homePic.jpg"
import Slider from '../../../components/Slider';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  return (
    
    <div className="w-screen h-full  flex flex-col ">
      <div className="flex box-border w-full "> 
      <Header />

        <div className="flex w-1/2 h-screen  flex-col justify-center z-0 px-6">
            <div className='flex flex-col  gap-6 self-end '>
              <h1 className='font-Gloock max-w-xs text-6xl tracking-wider	'> 
                Photographer <br/> <span className="whitespace-nowrap"> based in Montreal</span>
              </h1>
              <p className="flex-wrap max-w-md ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium, laudantium eius quae rerum dignissimos accusantium perferendis maxime? Assumenda numquam odio nisi! Quisquam, quas! In accusamus sed omnis fuga non.</p>
            </div>
            <div className=" py-9 h-28 border-l-2 border-black mt-6">
            </div>
        </div>

        <div className="flex h-screen w-1/2 ">
          <Slider />
        </div>
        <Footer />
      </div>

      

    </div>



  )
}

export default Home;