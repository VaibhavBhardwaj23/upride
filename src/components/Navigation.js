import React from 'react'

const Navigation = ({setTypeOf}) => {
  return (
    <div className='flex w-8/12  text-base text-gray-600 font-medium my-6 mb-0  justify-between'>
      <button onClick={()=>setTypeOf("SUCCESS")} className='target  w-full cursor-pointer'>Active</button>
      <button onClick={()=>setTypeOf("COMPLETED")} className='target w-full  cursor-pointer'>Completed</button>
      <button onClick={()=>setTypeOf("CANCELLED")} className=' target w-full  cursor-pointer'>Cancelled</button>
    </div>
  )
}

export default Navigation