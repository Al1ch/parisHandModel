import React, {useState} from 'react'
import { global } from 'styled-jsx/css'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Home = () => {


  return (
    
    <div className="w-screen h-screen bg-indigo-500 px-6  flex flex-col">
      <Header />
      <div className="flex w-screen h-screen  flex-col justify-center">
          <div className='ml-64 flex flex-col max-w-xs'>
            <h1 className='text-5xl whitespace-nowrap	'> 
              Photographer <br/>based in Montreal
            </h1>
            <p className="flex-wrap max-w-xs self-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium, laudantium eius quae rerum dignissimos accusantium perferendis maxime? Assumenda numquam odio nisi! Quisquam, quas! In accusamus sed omnis fuga non.</p>
          </div>
          <div className="h-28 border-l-2 border-black">

          </div>
      </div>
      <Footer />
    </div>



  )
}

export default Home;