"use client"
import React, { useState } from 'react'
import Phone from "../assets/phone.png"
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import DisplayBox from '@/components/DisplayBox'

const MainPage = ({children}) => {
  const [typeOf,setTypeOf]=useState("SUCCESS")
  return (
    <div className='mainpage flex-1'>
    {children}
    <div className='list '>
    <div className=' flex items-center'>
      <h1 className=' text-2xl font-bold'>View Bookings</h1>
      <Image className=' mx-9 w-10' src={Phone} alt='phone'/>
    </div>
    <Navigation setTypeOf={setTypeOf} />
    <hr className='bottom'></hr>
    <DisplayBox typeOf={typeOf}/>
    </div>
    </div>
  )
}

export default MainPage