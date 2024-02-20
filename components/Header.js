import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [showdropDawn,setShowDropDawn]=useState(false);
    const show=()=>{
        setShowDropDawn(true);
        document.body.style.overflow = 'hidden';

    }
    const hidde=()=>{
        setShowDropDawn(false);
        document.body.style.overflow = 'initial';

       
    }
  return (
  
        <header className="fixed top-0 flex border-b p-6 w-full z-20 bg-white justify-between">
    <img src='./logo.png' alt="logo" className="w-40 h-10"/>
    <div className="md:hidden cursor-pointer" onClick={show}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </div>
   
    <ul className={showdropDawn?"absolute z-40 flex flex-col h-screen text-center top-0 left-0 transition-all p-5 w-4/5 md:static md:max-w-fit md:h-fit md:text-left md:p-0 gap-6 bg-white md:flex-row":"absolute z-40 flex flex-col h-screen text-center top-0 -left-full transition-all p-5 w-4/5 md:static md:max-w-fit md:h-fit md:text-left md:p-0 gap-6 bg-white md:flex-row"}>
      {showdropDawn && <li className='self-end cursor-pointer' onClick={hidde}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

      </li>}
      <li className="text-xl font-semibold text-primary capitalize"><Link href={'/'}>accueil</Link></li>
      <li className="text-xl font-semibold text-primary capitalize"><Link href={'/'}>enseignants</Link></li>
      <li className="text-xl font-semibold text-primary capitalize"><Link href={'/'}>administration</Link></li>
      <li className="text-xl font-semibold text-primary capitalize"><Link href={'/'}>cours</Link></li>
      <li className="text-xl font-semibold text-primary capitalize"><Link href={'/registration'}>inscription</Link></li>
    </ul>
   
   {showdropDawn &&  <div className='absolute left-0 top-0 bg-black opacity-40 h-screen w-full z-30'></div>}
  </header>
  
   
  )
}
