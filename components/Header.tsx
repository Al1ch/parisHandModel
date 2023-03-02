import React from 'react'
import { global } from 'styled-jsx/css'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
   
  const path = [{name: "Home", path: "/"}, {name: "About", path: "/about"}, {name: "Contact", path: "/contact"}]
  return (
    <div className="w-full h-16  flex items-center justify-between z-0 absolute">
        <div className="gap-96 flex"> 
            <p> Logo</p>
            <div className="w-64 flex justify-between ">
                
                {
                    
                    path.map((item) =>(
                        <Link href={item.path} key="">
                            <p className="">{item.name}</p>
                        </Link>
                        )
                    )
                }
            </div>
        </div>
        <div className="h-full flex items-center justify-between gap-3 "> 

            <FaSearch className="fill-white"/>
            <p> Langue à voir </p>
        </div>
        

    </div>
  )
}

export default Header