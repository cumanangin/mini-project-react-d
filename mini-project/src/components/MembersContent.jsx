import React from 'react'
import BannerAnggota from '../assets/banner-list-anggota.svg'

const MembersContent = () => {
  return (
      <>
        <div>
            <div className='12pro:flex 12pro:justify-center 12pro:w-full 12pro:px-2 md:flex md:justify-center md:w-full md:px-2'> {/* banner list anggota */}
            <img src={BannerAnggota} alt="" className='12pro:w-full md:w-full'/>
            </div>
            <div> {/* card members */}
            <img src="https://jkt48.com/profile/adzana_shaliha.jpg" alt="" />
            </div>
        </div>
      </>
  )
}

export default MembersContent