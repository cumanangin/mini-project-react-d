import React from 'react'
import NotFound from '../assets/notfound.png'

const NotFoundComponent = () => {
  return (
    <>
        <div className='absolute w-full h-full flex justify-center items-center'>
            <img src={NotFound} alt="" />
        </div>
    </>
  )
}

export default NotFoundComponent