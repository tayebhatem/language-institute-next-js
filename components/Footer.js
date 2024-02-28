import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare,FaLinkedin,FaYoutube,FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-footerSection  py-12">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4  justify-center   mx-16  ">
        <div>
          <h1 className="text-white text-2xl font-semibold">Nos contact</h1>
          <div className="flex gap-4 mt-3 ">
           <Link href={'/'}><FaFacebookSquare className="text-gray-500 text-3xl"/></Link>
           <Link href={'/'}><FaLinkedin className="text-gray-500 text-3xl"/></Link>
           <Link href={'/'}><FaInstagram className="text-gray-500 text-3xl"/></Link>
           <Link href={'/'}><FaYoutube className="text-gray-500 text-3xl"/></Link>
          </div>
        </div>

        <div>
          <h1 className="text-white text-2xl font-semibold pb-2">Liens</h1>
          <ul className='flex flex-col gap-2'>
          <li className="text-gray-500 text-lg"><Link href={'/'}>Accueil</Link></li>
        <li className="text-gray-500 text-lg"><Link href={'/'}>Enseignants</Link></li>
        <li className="text-gray-500 text-lg"><Link href={'/'}>Administration</Link></li>
        <li className="text-gray-500 text-lg"><Link href={'/'}>Cours</Link></li>
        <li className="text-gray-500 text-lg"><Link href={'/registration'}>Inscription</Link></li>
          </ul>
        </div>


        <div>
          <h1 className="text-white text-2xl font-semibold pb-2">Accueil</h1>
          <div className="flex flex-col gap-2">
            <div className="text-gray-500 text-lg">Langues</div>
            <div className="text-gray-500 text-lg">Contactez nous</div>
          </div>
        </div>


        </div>
        </footer>
  )
}
