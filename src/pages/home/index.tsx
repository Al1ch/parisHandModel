import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Slider from '../../../components/Slider';
import "slick-carousel/slick/slick.css";
import cn from "classnames";
import { useInView } from 'react-intersection-observer'
import handsGreyImage from "../../../assets/images/handsgrey.jpg"
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Home = () => {

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    
    <div ref={ref} className="w-screen h-screen  flex flex-col ">
      <div className="flex box-border w-full "> 
        <Header />
        <div className="flex w-1/2 h-screen  flex-col justify-center px-6 relative z-1 ">
          <div className='flex flex-col  gap-6 self-end '>
              <h1 className="h1Font tracking-wider  max-w-xs "> 
                <span className={cn("animationTopBottom block delay-100",{"opacity-100 transform-none":inView} )}>Photographer</span> 
                <span className={cn("animationTopBottom block whitespace-nowrap ",{"opacity-100 transform-none":inView} )}> based in Montreal</span>
              </h1>
              <p className={cn(" animationTopBottom  flex-wrap max-w-md ",{"opacity-100 transform-none":inView}) }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium, laudantium eius quae rerum dignissimos accusantium perferendis maxime? Assumenda numquam odio nisi! Quisquam, quas! In accusamus sed omnis fuga non.</p>
            </div>
            <div className={cn(" animationTopBottom   py-9 h-28 border-l-2 border-black mt-6",{"opacity-100 transform-none":inView} )}>
          </div>
        </div>

        <div className=" h-screen w-1/2 ">
              <Image src={handsGreyImage} alt="" className="object-cover h-full"/>
        </div>
        <Footer />
      </div>

    </div>

  )
}

export default Home;