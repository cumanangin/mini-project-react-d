import React from 'react'
import Jkt48 from '../assets/landing-photo.svg'
import ReplyArrow from '../assets/reply-arrow.svg'
import TagEvent from '../assets/tag-event.svg';
import TagBirthday from '../assets/tag-birthday.svg';
import TagOther from '../assets/tag-other.svg';
import TagTheater from '../assets/tag-theater.svg';

import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <>
    <div className='md:flex md:justify-center md:items-center md:gap-x-10 xl:gap-x-20'>
    <div className='12pro:mt-32'> {/* div gambar */}
      <img src={Jkt48} alt="gambar tidak ada" className='12pro:mx-auto 12pro:my-custom-50px 12pro:w-80 12pro:h-80 lg:w-96' />
    </div>
    <div className='bg-white-500 12pro:w-custom-290px border-2  12pro:mx-custom-50px 12pro:h-custom-210px md:w-80 md:h-80 md:mt-48 md:mx-0 lg:w-custom-550px xl:w-custom-646px rounded-10px shadow-news-box'> {/* frame content news */}
        <div className='text-center pt-2px 12pro:text-xl '> {/* text news */}
          NEWS
        </div>
        <div className='md:w-full md:h-full md:flex md:justify-center'>
        <div className='12pro:m-5 bg-lavender-blush-500 rounded-10px 12pro:w-custom-250px 12pro:h-custom-170px 12pro:mt-auto md:m-0 md:h-64 md:w-4/5 lg:w-11/12 shadow-content-news-box'> {/* wrap content news */}
          <div>
              <div className='12pro:pl-5 12pro:pt-5 12pro:pr-30px '> {/* ini grup acara */}

              {/* INI CONTENT */}
              <div className='flex 12pro:gap-2'> {/* header news contents */}
              <img src={TagEvent} alt="" className='12pro:w-12 lg:w-16' />
              <p className='12pro:text-lg 12pro:font-normal lg:text-xl'>
                22 April 2022
                </p> 
              </div>
              <div className='12pro:text-10 lg:text-base'> {/* isi linked content */}
              <a href='https://jkt48.com/news/detail/id/1555?lang=id'>Pengumuman Mengenai Event 2-Shot Online CHEKICHA X JKT48</a>
              </div>
              </div>
              <div className='12pro:pl-5 12pro:py-2 12pro:pr-30px '> {/* ini grup acara */}

              {/* INI CONTENT */}
              <div className='flex 12pro:gap-2'> {/* header news contents */}
              <img src={TagEvent} alt="" className='12pro:w-12 lg:w-16' />
              <p className='12pro:text-lg 12pro:font-normal lg:text-xl'>
                22 April 2022
                </p> 
              </div>
              <div className='12pro:text-10 lg:text-base'> {/* isi linked content */}
              <a href='https://jkt48.com/news/detail/id/1555?lang=id'>Pengumuman Mengenai Event 2-Shot Online CHEKICHA X JKT48</a>
              </div>
              </div>
          </div>
          
          <div className='text-center'> {/* footer news content */}
        <div> 
          <Link to='/news' className=' text-14 bg-white-300 rounded-2xl p-1'>Selengkapnya</Link>
        </div>
        </div>

        </div>

        </div>
    </div>
    </div>
    
    </>
  )
}

export default HomeContent