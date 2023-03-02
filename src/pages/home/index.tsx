import React, {useState} from 'react'
import { global } from 'styled-jsx/css'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import homePic from "../../../assets/images/homePic.jpg"

const Home = () => {

  return (
    
    <div className="w-screen h-screen px-6  flex flex-col ">
      <div className="flex "> 
      <Header />

        <div className="flex w-screen h-screen  flex-col justify-center z-0 ">
            <div className='flex flex-col max-w-xs gap-6 '>
              <h1 className=' whitespace-nowrap	font-Gloock text-6xl'> 
                Photographer <br/>based in Montreal
              </h1>
              <p className="flex-wrap max-w-sm  self-end ml-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium, laudantium eius quae rerum dignissimos accusantium perferendis maxime? Assumenda numquam odio nisi! Quisquam, quas! In accusamus sed omnis fuga non.</p>
            </div>
            <div className=" py-9 h-28 border-l-2 border-black ">

          </div>
        </div>

        <div className="flex h-screen w-screen shrink ">
          <Image  alt="" src={homePic} />
        </div>
        <Footer />
      </div>

      

    </div>



  )
}

export default Home;