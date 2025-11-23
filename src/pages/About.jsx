import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          
          <p>
            Welcome to <span className='text-gray-800 font-medium'>CureConnect</span> — your trusted partner for effortless doctor appointments and smooth healthcare management. We understand how overwhelming it can be to find the right specialist or schedule a consultation, which is why we built a platform that puts simplicity, clarity, and comfort at the center of your healthcare experience.
          </p>

          <p>
            With CureConnect, patients can easily explore verified doctors, view specialities, compare experience, and book appointments instantly. Our mission is to make healthcare accessible and transparent for everyone — from first-time consultations to ongoing care.
          </p>

          <b className='text-gray-800'>Our Vision</b>

          <p>
            At CureConnect, our vision is to bridge the gap between patients and healthcare providers through a seamless digital ecosystem. We aim to empower individuals with convenient access to quality care, helping them make informed decisions and take control of their health anytime, anywhere.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFORTLESS BOOKING</b>
          <p>
            Find the right doctor and schedule appointments within seconds — anytime, anywhere.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>TRUSTED DOCTORS</b>
          <p>
            Connect with experienced and verified healthcare professionals across multiple specialities.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZED CARE</b>
          <p>
            Receive tailored recommendations, reminders, and updates designed to support your health journey.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
