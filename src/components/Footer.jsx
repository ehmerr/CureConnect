import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-44' src={assets.logo} alt="" />
         <p className='w-full md:w-2/3 text-gray-600 leading-6'>
  CureConnect is your trusted healthcare companion—helping patients easily find doctors, book appointments, and receive care without delays. Our mission is to make quality healthcare accessible, convenient, and reliable for everyone.
</p>

        </div>

  <div>
  <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
  <ul className='flex flex-col gap-2 text-gray-600'>
    <li>Find Doctors</li>
    <li>Specialities</li>
    <li>Appointments</li>
    <li>About</li>
    <li>Contact</li>
    <li>Privacy Policy</li>
  </ul>
</div>


        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-7979966812</li>
            <li>cureconnect@gmail.com</li>
          </ul>
        </div>

      </div>
<p className='mt-4 text-gray-500 italic'>
  Connecting patients to trusted healthcare - quickly and simply.
</p>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
  © {new Date().getFullYear()} CureConnect - All Rights Reserved.
</p>

      </div>

    </div>
  )
}

export default Footer
