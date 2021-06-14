import React, { useState, useEffect } from 'react'
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import Logo from "./logo";
import HamMenuBtn  from "./hamMenuBtn";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }
    
    const navbarColorChanger = () => {
        const nav = document.getElementById('nav')
        const navItem = document.getElementById('navItem')
        const logo = document.getElementById('logo')
        window.onscroll = function () {
            if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
                nav.classList.remove("md:bg-transparent")
                nav.classList.remove("md:py-5")
                navItem.classList.remove("text-white")
                navItem.classList.add("text-black")
                logo.classList.remove("md:text-white")
            }
            else {
                nav.classList.add("md:bg-transparent")
                nav.classList.add("md:py-5")
                navItem.classList.remove("text-black")
                navItem.classList.add("text-white")
                logo.classList.add("md:text-white")
            }
        };
    }

    
    useEffect(()=>{
        navbarColorChanger()
    },[])
    
    return (
        <nav className="w-full fixed top-0 right-0 left-0 z-40 py-4 bg-white md:bg-transparent md:py-5 transition-all duration-500" id="nav">
            <div className="flex justify-end lg:w-1024 mx-auto text-lg  items-center">
                <Logo/>
                <HamMenuBtn toggleOpen={toggleOpen} Icon={open? <AiOutlineClose className="text-white text-2xl"/>:<AiOutlineMenu className="text-primary text-2xl"/>}/>

                <DesktopNav/>
                {open? <MobileNav toggleOpen={toggleOpen}/> : null}
            </div>
        </nav>
    )
}

export default Navbar
