import React from 'react'
import { useInView } from 'react-intersection-observer';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Slider from 'react-slick';
import clairVoyant from  "../assets/images/clairvoyant.jpg";
import Image from 'next/image';
import handsGrey from "../../../assets/images/handsGrey.jpg"
import photo1 from "../../../assets/images/photo1.jpg"
import photo2 from "../../../assets/images/photo2.jpg"
import photo3 from "../../../assets/images/photo3.jpg"
import photo4 from "../../../assets/images/photo4.jpg"
import photo5 from "../../../assets/images/photo5.jpg"
import photo6 from "../../../assets/images/photo6.jpg"
import photo7 from "../../../assets/images/photo7.jpg"


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

      const data = [ {id:1 , image: photo1 }, {id:2 , image: handsGrey }, {id:3, image:photo2}, {id:4 , image: photo3 }, {id:5, image: photo4 },{id:6, image: photo5 }, {id:7, image: photo6 } ,{id:8, image: photo4 }]

   
  return (
    <div ref={ref} className="w-screen h-screen flex justify-between">
      <Header/>
        <div className='w-full h-full items-center'>
          

        </div>

      <Footer/>
        

    </div>
  )
}

export default About;