import React from 'react'
import Image from 'next/image';
import homePic from "../assets/images/homePic.jpg"
import clairVoyant from  "../assets/images/clairvoyant.jpg"
import Slick from 'react-slick'





const Slider = () => {
    const data = [{id:1 , image: homePic}, {id:2 , image: clairVoyant }]
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
            <div className="w-3 h-3 bg-gray-500 rounded-full flex flex-col"> </div>
        )

      };
  return (
        <Slick {...settings}className='m-w-9 mr-5 overflow-hidden' >
        {
            data.map((item, index) => (
                <div key={item.id}>
                    <Image src={item.image} alt="" />
                </div>
            ))
        }
        </Slick>
  )
}

export default Slider