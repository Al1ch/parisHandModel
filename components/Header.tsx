import React from 'react'
import { global } from 'styled-jsx/css'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'

const Header = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
      });
   
  const path = [{name: "Home", path: "/home", id:1}, {name: "About", path: "/about",id:2}, {name: "Contact", path: "/contact", id:3}]
  return (
    <div ref={ref} className="w-full h-16  flex items-center justify-between z-10 absolute px-6 textFont">
        <div className="gap-72 flex"> 
            <p className={"animate-fade-in "} > Logo</p>
            <div className="w-64 flex justify-between ">
                
                {
                    path.map((item) =>(
                        <Link href={item.path} key={item.id} className={cn ("relative  transition hover:before:duration-300 hover:after:duration-300  hover:after:w-6/12 hover:before:w-6/12  before:translate-x-1/2 before:content-[''] before:absolute before:bg-black before:w-0 before:h-0.5 after:content-[''] after:absolute after:bg-black after:w-0 after:h-0.5 after:translate-x-1/2 hover:after:opacity-100 hover:before:opacity-100")}>
                            <p className={ "animate-fade-in  delay-200"}>{item.name}</p>
                        </Link>
                        )
                    )
                }
            </div>
        </div>
        <div className="h-full flex items-center justify-between gap-3 "> 

            <FaSearch className="fill-white"/>
            <p className={"animate-fade-in "}> Langue à voir </p>
        </div>
        

    </div>
  )
}

export default Header