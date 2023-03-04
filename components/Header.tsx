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
   
  const path = [{name: "Home", path: "/"}, {name: "About", path: "/about"}, {name: "Contact", path: "/contact"}]
  return (
    <div ref={ref} className="w-full h-16  flex items-center justify-between z-0 absolute px-6 textFont">
        <div className="gap-72 flex"> 
            <p className={classNames("animationLeftRight ",{"textInView": inView})} > Logo</p>
            <div className="w-64 flex justify-between ">
                
                {
                    path.map((item) =>(
                        <Link href={item.path} key="" >
                            <p className={classNames("animationLeftRight delay-100",{"textInView": inView})}>{item.name}</p>
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