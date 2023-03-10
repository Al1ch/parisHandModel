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
        <div className="flex w-1/2 h-screen  flex-col justify-center px-6 relative z-10 ">
          <div className='flex flex-col  gap-6 self-end '>
              <h1 className={cn("h1Font tracking-wider  max-w-xs ")}> 
                <span className={"animate-fade-bottom block " }>Photographer</span> 
                <span className={" animate-fade-bottom block animation-delay-100 whitespace-nowrap"}> based in Montreal</span>
              </h1>
              <p className={"animate-fade-bottom  flex-wrap max-w-md " }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium, laudantium eius quae rerum dignissimos accusantium perferendis maxime? Assumenda numquam odio nisi! Quisquam, quas! In accusamus sed omnis fuga non.</p>
            </div>
            <div className={" animationTopBottom   py-9 h-28 border-l-2 border-black mt-6"}>
          </div>
        </div>

        <div className=" h-screen w-1/2 relative overflow-x-hidden">
            <Image src={handsGreyImage} alt="" className="object-cover object-top animate-fade-left-image  h-full"/>
            <div className="h-full w-full animate-fade-left bg-black absolute left-0 top-0 opacity-0"> </div>

        </div>
        <Footer />
      </div>

    </div>

  )
}

export default Home;