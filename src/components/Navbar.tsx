'use client'
import React from 'react';
import logo from "@/assets/images/logo.svg"
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

function Navbar() {
  const location = usePathname()
  const links = [
    {
      name :"Events",
      path :"/"
    },
    {
      name :"My Tickets",
      path :"/my-tickets"
    },
    {
      name :"About Project",
      path :"/about"
    }
  ]

  function isActive(path:string){
    return location === path
  }
  return (
    <div className={'max-w-[1200px] sticky top-0 backdrop-blur z-[99999] mx-auto my-6 lg:mb-12 flex items-center justify-between p-4 border-[#197686] border rounded-[24px]'}>
      <Image src={logo} alt={"logo of Tiez Event ticket booking application"}/>
      <nav className={'hidden lg:block'}>
        <ul className={'flex items-center gap-16'}>
          {links.map((link) => {
            return (
              <li key={link.name} className={` font-primary hover:text-white transition-all duration-300 font-normal text-[18px] ${isActive(link.path) ? 'text-white' : 'text-[#B3B3B3]' }`}><Link href={''}>{link.name}</Link></li>
            )
          })}
        </ul>
      </nav>
      <button className={'bg-white flex items-center gap-3 px-10 py-6 rounded-[12px] text-[16px] font-primary leading-8 uppercase'}>My Tickets
        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM1 4.5L17 4.5V3.5L1 3.5V4.5Z"
            fill="#0A0C11"/>
        </svg>
      </button>
    </div>
  );
}

export default Navbar;