import React from 'react'
import { global } from 'styled-jsx/css'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

const Header = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
      });
   
  const path = [{name: "Home", path: "/", id:1}, {name: "About", path: "/about",id:2}, {name: "Contact", path: "/contact", id:3}]
  return (
    <div ref={ref} className="w-full h-16  flex items-center justify-between z-2 absolute px-6 textFont">
        <div className="gap-72 flex"> 
            <p className={classNames("animationLeftRight ",{"textInView": inView})} > Logo</p>
            <div className="w-64 flex justify-between ">
                
                {
                    path.map((item) =>(
                        <Link href={item.path} key={item.id} className=" relative hover:after:w-full hover:before:w-full before:content-[''] before:absolute before:bg-black before:w-0 before:h-0.5 after:content-[''] after:absolute after:bg-black after:w-0 after:h-0.5" >
                            <p className={classNames(" animationLeftRight delay-100",{"textInView": inView})}>{item.name}</p>
                        </Link>
                        )
                    )
                }
            </div>
        </div>
        <div className="h-full flex items-center justify-between gap-3 "> 

            <FaSearch className="fill-white"/>
            <p className={classNames("animationLeftRight ",{"textInView": inView})}> Langue à voir </p>
        </div>
        

    </div>
  )
}

export default Header