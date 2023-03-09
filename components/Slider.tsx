import React from 'react'
import Image from 'next/image';
import homePic from "../assets/images/homePic.jpg"
import clairVoyant from  "../assets/images/clairvoyant.jpg"
import handsGrey from "../assets/images/handsGrey.jpg"
import Slick from 'react-slick'
import cn from 'classnames';
import { useInView } from 'react-intersection-observer'





const Slider = () => {
    const data = [ {id:2 , image: handsGrey }, {id:3, image:handsGrey}]

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
      });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        swipeToSlide: true,
         appendDots: (dots :any) =>( <ul className="flex w-5 "> 
            {dots}
         </ul>),
        customPaging: (i :any) =>(
            <div className="w-6 h-6 bg-red-500 rounded-full flex flex-col "> </div>
        )

      };
  return (
    <div ref={ref}className={cn(" overflow-hidden h-full w-full  scale-x-0 duration-500 delay-100 " , {"scale-x-100" : inView})}> 
        <Slick {...settings}  >
        {
            data.map((item) => (
                <div key={item.id} className="w-300 h-300">
                    <Image src={item.image} alt="" className="object-cover "/>
                </div>
            ))
        }
        </Slick>
        </div>
  )
}

export default Slider