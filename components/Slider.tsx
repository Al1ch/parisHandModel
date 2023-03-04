import React from 'react'
import Image from 'next/image';
import homePic from "../assets/images/homePic.jpg"
import clairVoyant from  "../assets/images/clairvoyant.jpg"
import Slick from 'react-slick'





const Slider = () => {
    const data = [ {id:2 , image: clairVoyant }, {id:3, image:clairVoyant}]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        swipeToSlide: true,
         appendDots: (dots :any) =>( <ul className="flex"> 
            {dots}
         </ul>),
        customPaging: (i :any) =>(
            <div className="w-3 h-3 bg-red-500 rounded-full flex flex-col "> </div>
        )

      };
  return (
        <Slick {...settings}className=' overflow-hidden' >
        {
            data.map((item, index) => (
                <div key={item.id} className="">
                    <Image src={item.image} alt="" className="object-cover "/>
                </div>
            ))
        }
        </Slick>
  )
}

export default Slider