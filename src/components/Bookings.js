import React from 'react'
import User from "../assets/Rectangle 60.png"
import Image from "next/image";
const Bookings = ({data}) => {
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
      var date = new Date(data.bookingEpochTime);
let year = date.getFullYear(); // 2023
let month = date.getMonth() + 1; // 4 (note zero index: Jan = 0, Dec = 11)
let day = date.getDate(); // 
      
  return (
    <div className="table_row" >
        <span className='name text-xs font-bold'>
            <Image src={User} alt="user"/>
            <span>{data.clientName}</span>
        </span>
       <span className='date text-sm'>{months[month]} {day},{year}</span>
       <span className='package  text-sm'>{data.packageTitle.slice(0,15)}</span>
       {data.offlineBooking?(
        <span className=' text-sm offline'>Offline booking</span>
       ):(
        <span className='online  text-sm'>Online booking</span>
       )}
       </div>
  )
}

export default Bookings