import React from 'react'
import { FaFacebookSquare,FaLinkedin,FaYoutube,FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-footerSection  py-12">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4  justify-center   mx-16  ">
        <div>
          <h1 className="text-white text-2xl font-semibold">Nos contact</h1>
          <div className="flex gap-4 mt-3 ">
           <FaFacebookSquare className="text-gray-500 text-3xl"/>
           <FaLinkedin className="text-gray-500 text-3xl"/>
           <FaInstagram className="text-gray-500 text-3xl"/>
           <FaYoutube className="text-gray-500 text-3xl"/>
          </div>
        </div>

        <div>
          <h1 className="text-white text-2xl font-semibold">Liens</h1>
          <ul>
          <li className="text-gray-500 text-lg">Accueil</li>
        <li className="text-gray-500 text-lg">Enseignants</li>
        <li className="text-gray-500 text-lg">Administration</li>
        <li className="text-gray-500 text-lg">Cours</li>
        <li className="text-gray-500 text-lg">Inscription</li>
          </ul>
        </div>


        <div>
          <h1 className="text-white text-2xl font-semibold">Accueil</h1>
          <div className="flex flex-col gap-2">
            <div className="text-gray-500 text-lg">Langues</div>
            <div className="text-gray-500 text-lg">Contactez nous</div>
          </div>
        </div>


        </div>
        </footer>
  )
}
