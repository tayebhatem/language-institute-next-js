import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

export default function Layout({children}) {
  return (
    <div className="h-screen">
        <Header/>
        <main className="mt-20">
        {children}
        </main>
        
        <Footer/>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
  )
}
