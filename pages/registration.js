import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
export default function Registration() {
    const form = useRef();
    const[loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({mode:"all"});
    const onlyLetters=(event)=>{
        var inputValue = event.target.value;
      
        // Remove non-numeric characters using regular expression
        var lettersOnlyValue = inputValue.replace(/[^a-zA-Z]/g, '');
        
        // Update the input value with numeric characters only
        event.target.value = lettersOnlyValue;
    }
    const onlyNumbers=(event)=>{
        var inputValue = event.target.value;
      
        // Remove non-numeric characters using regular expression
        var numericValue = inputValue.replace(/\D/g, '');
        
        // Update the input value with numeric characters only
        event.target.value = numericValue;
    }
   
    const sendEmail = () => {
     setLoading(true);
  
      emailjs
        .sendForm('service_t50x8ws', 'template_jkcwkx9', form.current, {
          publicKey: 'u3Sgtnux4e-dalqW7',
        })
        .then(
          () => {
            toast.success('Vous avez été inscrit avec succès', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
               
                });

          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );

        setLoading(false);
    };
    useEffect(()=>{
        document.body.style.overflow = 'initial';
      },[])
  return (
    <div className='h-screen'>
    <Header/>
   <main className='mt-20'>
   <div className="bg-white w-full py-10 ">
    <div className=" font-bold text-4xl text-center">Inscription</div>
    <form ref={form} onSubmit={handleSubmit(sendEmail)}>

    <div className="grid md:grid-cols-2 gap-3 mx-16 my-5">
      <div className="flex flex-col gap-2">
        <label className="text-lg">Nom*</label>
        <input {...register('lastname', { required: true })} type="text"   placeholder="Nom" name="lastname" onInput={onlyLetters}  className={errors.lastname ? "border border-red-500 bg-gray-100 outline-none p-3 rounded-md":"border border-gray-200 bg-gray-100 outline-none p-3 rounded-md"}/>
        {errors.lastname && <p className="text-red-500">Le nom est vide !</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Prénom*</label>
        <input {...register('firstname', { required: true })}  type="text" placeholder="Prénom" name="firstname" onInput={onlyLetters}  className={errors.firstname ? "border border-red-500 bg-gray-100 outline-none p-3 rounded-md":"border border-gray-200 bg-gray-100 outline-none p-3 rounded-md"}/>
        {errors.firstname && <p className="text-red-500">Le prénom est vide !</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg">Email*</label>
        <input {...register('email', { required: true })} type="email" placeholder="Email" name="email"  className={errors.email ? "border border-red-500 bg-gray-100 outline-none p-3 rounded-md":"border border-gray-200 bg-gray-100 outline-none p-3 rounded-md"}/>
        {errors.email && <p className="text-red-500">Email est vide !</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg">Téléphone*</label>
        <input {...register('phone', { required: true })} type="text" placeholder="Téléphone" name='phone'  onInput={onlyNumbers} className={errors.phone ? "border border-red-500 bg-gray-100 outline-none p-3 rounded-md":"border border-gray-200 bg-gray-100 outline-none p-3 rounded-md"}/>
        {errors.phone && <p className="text-red-500">Téléphone est vide !</p>}
      </div>
      <div className="flex flex-col gap-2">
      <label className="text-lg">Langue*</label>
      <select className='border outline-none rounded-md bg-gray-100 p-3 cursor-pointer' name='language'>
        <option className='capitalize text-lg'>française</option>
        <option className='capitalize text-lg'>Anglaise</option>
        <option className='capitalize text-lg'>espagnole</option>
        <option className='capitalize text-lg'>italienne</option>
        <option className='capitalize text-lg'>allemande</option>
        <option className='capitalize text-lg'>turque</option>
      </select>
      </div>

      <div className="flex flex-col gap-2">
      <label className="text-lg">Catégorie*</label>
      <select className='border outline-none rounded-md bg-gray-100 p-3 cursor-pointer' name='category'>
        <option className='capitalize text-lg'>Adulte</option>
        <option className='capitalize text-lg'>étudiant</option>
        <option className='capitalize text-lg'>enfant</option>
      </select>
      </div>
      <button type='submit' className="flex justify-center items-center bg-secondary text-white py-4 rounded-md shadow-md font-medium max-w-48">
      
      {loading ? <div class="w-6 h-6 border-4 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
  </div>:<span>Inscrire</span>}
      </button>
    </div>
  </form>

   

   
    </div>
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
