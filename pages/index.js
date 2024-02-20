import Footer from "@/components/Footer";
import Header from "@/components/Header";
import emailjs from '@emailjs/browser';
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
export default function Home() {
  

  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:"all"});
  const onlyLetters=(event)=>{
    var inputValue = event.target.value;
  
    // Remove non-letter characters except spaces using regular expression
    var lettersOnlyValue = inputValue.replace(/[^a-zA-Z\s]/g, '');
    
    // Update the input value with letter characters and spaces only
    event.target.value = lettersOnlyValue;
}
  const sendEmail = (e) => {
   

    emailjs
      .sendForm('service_xzsszvq', 'template_439t9rt', form.current, {
        publicKey: 'u3Sgtnux4e-dalqW7',
      })
      .then(
        () => {
          toast.success('Message envoyé avec succès', {
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

  };
  
 
  useEffect(()=>{
    document.body.style.overflow = 'initial';
  },[])
  return (
   <div className="h-screen">
   <Header/>
    <main className="mt-20">
    <div className="relative ">
    <div className="absolute text-white font-bold text-4xl sm:text-6xl  w-full h-full text-center  flex justify-center items-center z-10 uppercase ">Bienvenue à amslay</div>
    <div className="absolute bg-black text-white w-full h-full opacity-40"></div>
    <img src="./banner.png" />
    </div>

    <div className="bg-sectionColor w-full py-10 ">
      <div className="capitalize font-bold text-4xl text-center">langues</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]  gap-4 justify-center items-center mx-16 my-5">
        <div className="p-12 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <img src="./fr.jpg" className="w-20 h-20 rounded-full "/>
          <div className="capitalize font-bold text-xl">française</div>
        </div>

        <div className="p-12 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <img src="./eng.jpg" className="w-20 h-20 rounded-full "/>
          <div className="capitalize font-bold text-xl">Anglaise</div>
        </div>

        <div className="p-12 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <img src="./all.jpg" className="w-20 h-20 rounded-full "/>
          <div className="capitalize font-bold text-xl">allemande</div>
        </div>

        <div className="p-12 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <img src="./spn.jpg" className="w-20 h-20 rounded-full "/>
          <div className="capitalize font-bold text-xl">Espagnole</div>
        </div>

        <div className="p-12 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <img src="./itl.jpg" className="w-20 h-20 rounded-full "/>
          <div className="capitalize font-bold text-xl">italienne</div>
        </div>

        <div className="p-12 bg-white shadow-md flex flex-col justify-center items-center gap-3">
          <img src="./tur.jpg" className="w-20 h-20 rounded-full "/>
          <div className="capitalize font-bold text-xl">turque</div>
        </div>
      </div>
    </div>

    <div className="bg-white w-full py-10 ">
    <div className=" font-bold text-4xl text-center">Contactez nous</div>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4  justify-center items-center mx-16 my-5">
     <form ref={form} onSubmit={handleSubmit(sendEmail)}>
    <div className="flex flex-col gap-3 ">
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

      <div className="flex flex-col gap-2 col-span-2">
        <label className="text-lg">Message*</label>
        <textarea {...register('message', { required: true })} cols="6" placeholder="Message" name="message"  className={errors.message ? " border border-red-500 bg-gray-100 outline-none p-3 rounded-md resize-none h-32 ":" border border-gray-200 bg-gray-100 outline-none p-3 rounded-md resize-none h-32 "}/>
        {errors.message && <p className="text-red-500">Le message est vide !</p>}
      </div>
      <button type="submit" className="bg-secondary text-white py-4 rounded-md shadow-md font-medium max-w-48">Envoyer</button>
    </div>
  </form>

    <div className="flex flex-col gap-6 h-full">

    <div className="flex gap-3 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3056A6" className="w-6 h-6">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
    <div className="text-lg text-secondary">amslayinstit@gmail.com</div>
    </div>

    <div className="flex gap-3    items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3056A6" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>

    <div className="text-lg text-secondary">8:30 - 16:30</div>
    </div>

    <div className="flex gap-3   items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3056A6" className="w-6 h-6">
  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
</svg>

    <div  className="text-lg text-secondary">www.amslay.com</div>
    </div>

    <div className="flex gap-3  items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3056A6" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>

    <div className="text-lg text-secondary"> (+213) 123 456 7890</div>
    </div>


    <div className="flex gap-3 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3056A6" className="w-6 h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>


    <div className="text-lg text-secondary">KOUBA - ALGER</div>
    </div>


    </div>

    </div>
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
  );
}
