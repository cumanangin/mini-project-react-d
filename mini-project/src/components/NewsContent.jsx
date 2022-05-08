import React from 'react'
import BannerNews from '../assets/banner-berita-terbaru.svg'
import TagEvent from '../assets/tag-event.svg';
import TagBirthday from '../assets/tag-birthday.svg';
import TagOther from '../assets/tag-other.svg';
import TagTheater from '../assets/tag-theater.svg';

const NewsContent = () => {
  return (
      <>
        <div> {/* frame semua konten news */}
            <div className='12pro:pt-2px 12pro:w-96'> {/* frame banner berita terbaru */}
                <img src={BannerNews} alt="tidak ada gambar" className='w-full'/>
            </div>
            <div className='12pro:w-custom-366px 12pro:h-custom-100px 12pro:my-5 12pro:mx-3 bg-white-500 hover:rounded-2xl'> {/* frame row per konten */}
            <div className=' '> {/* tag */}
                <img src={TagEvent} alt="tidak ada tag" className='12pro:w-14 12pro:pt-3 12pro:ml-3' />
            </div>
            <div className='12pro:pl-3'> {/* bagian text */}
            <a href="https://jkt48.com/news/detail/id/1555?lang=id" className='text-torea-bay-500'>
            Pengumuman Mengenai Event 2-Shot Online CHEKICHA X JKT48
            </a>
            </div>
            <div className='12pro:pl-3 text-regent-gray-500'> {/* date */}
            22 April 2022
            </div>
            </div>
            <div className='12pro:w-custom-366px 12pro:h-custom-100px 12pro:my-5 12pro:mx-3 bg-white-500'> {/* frame row per konten */}
            <div className=' '> {/* tag */}
                <img src={TagBirthday} alt="tidak ada tag" className='12pro:w-14 12pro:pt-3 12pro:ml-3' />
            </div>
            <div className='12pro:pl-3'> {/* bagian text */}
            <a href="https://jkt48.com/news/detail/id/1554?lang=id" className='text-torea-bay-500'>
            Pengumuman Mengenai Birthday 2-Shot Online Gabriela Margareth Dan Jesslyn Callista Dengan Chekicha
            </a>
            </div>
            <div className='12pro:pl-3 text-regent-gray-500'> {/* date */}
            16 April 2022
            </div>
            </div>
            <div className='12pro:w-custom-366px 12pro:h-custom-100px 12pro:my-5 12pro:mx-3 bg-white-500'> {/* frame row per konten */}
            <div className=' '> {/* tag */}
                <img src={TagTheater} alt="tidak ada tag" className='12pro:w-14 12pro:pt-3 12pro:ml-3' />
            </div>
            <div className='12pro:pl-3'> {/* bagian text */}
            <a href="https://jkt48.com/news/detail/id/1555?lang=id" className='text-torea-bay-500'>

            Pengumuman Mengenai Penambahan Sesi pada Video Call with JKT48, “Kemilau Karya Kartini” Digital Photobook
            </a>
            </div>
            <div className='12pro:pl-3 text-regent-gray-500'> {/* date */}
            13 April 2022
            </div>
            </div>
            <div className='12pro:w-custom-366px 12pro:h-custom-100px 12pro:my-5 12pro:mx-3 bg-white-500'> {/* frame row per konten */}
            <div className=' '> {/* tag */}
                <img src={TagOther} alt="tidak ada tag" className='12pro:w-14 12pro:pt-3 12pro:ml-3' />
            </div>
            <div className='12pro:pl-3'> {/* bagian text */}
            <a href="https://jkt48.com/news/detail/id/1554?lang=id" className='text-torea-bay-500'>
            Pengumuman Mengenai Voice Message Campaign dari JKT48 Private Message
            </a>
            </div>
            <div className='12pro:pl-3 text-regent-gray-500'> {/* date */}
            8 April 2022
            </div>
            </div>
            <div className='12pro:w-custom-366px 12pro:h-custom-100px 12pro:my-5 12pro:mx-3 bg-white-500'> {/* frame row per konten */}
            <div className=' '> {/* tag */}
                <img src={TagOther} alt="tidak ada tag" className='12pro:w-14 12pro:pt-3 12pro:ml-3' />
            </div>
            <div className='12pro:pl-3'> {/* bagian text */}
            <a href="https://jkt48.com/news/detail/id/1551?lang=id" className='text-torea-bay-500'>
            Pengumuman Mengenai JKT48 Private Message Generasi 10 JKT48
            </a>
            </div>
            <div className='12pro:pl-3 text-regent-gray-500'> {/* date */}
            8 April 2022
            </div>
            </div>
            <div className='12pro:w-custom-366px 12pro:h-custom-100px 12pro:my-5 12pro:mx-3 bg-white-500'> {/* frame row per konten */}
            <div className=' '> {/* tag */}
                <img src={TagTheater} alt="tidak ada tag" className='12pro:w-14 12pro:pt-3 12pro:ml-3' />
            </div>
            <div className='12pro:pl-3'> {/* bagian text */}
            <a href="https://jkt48.com/news/detail/id/1550?lang=id" className='text-torea-bay-500'>
            Pengumuman Mengenai Pre-Order Digital Photobook “Kemilau Karya Kartini” dengan Bonus Video Call with JKT48
            </a>
            </div>
            <div className='12pro:pl-3 text-regent-gray-500'> {/* date */}
            5 April 2022
            </div>
            </div>
        </div>
      </>
  )
}

export default NewsContent