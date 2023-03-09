import React from 'react'
import { useInView } from 'react-intersection-observer';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Slider from 'react-slick';
import clairVoyant from  "../assets/images/clairvoyant.jpg"
import Image from 'next/image';
import handsGrey from "../../../assets/images/handsGrey.jpg"

const About = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
      });

      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };

      const data = [ {id:2 , image: handsGrey }, {id:3, image:handsGrey}]

   
  return (
    <div ref={ref} className="w-screen h-screen flex justify-between">
        <Header/>

        <Slider {...settings}>
        {
            data.map((item) => (
                <div key={item.id} className="">
                    <Image src={item.image} alt="" className="object-cover "/>
                </div>
            ))
        }
                
        </Slider>



        <Footer/>
        

    </div>
  )
}

export default About;