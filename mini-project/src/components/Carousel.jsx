import React from "react";
import resource from "../json/carousel.json";

const images = [
  "https://jkt48.com/images/banner.home.kemilaupb.id.jpg",
  "https://jkt48.com/images/banner.22nd-single.jpg",
  "https://jkt48.com/images/banner.home.rapsodi.married.jpg",
  "https://jkt48.com/images/banner.home.kickoffconference10thanniv-id.jpg",
  "https://jkt48.com/images/banner.reqhour2021-id.jpg",
  "https://jkt48.com/images/banner.fanclub2021-id.jpg",
];
const Carousel = () => {


  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

 
  return (
    <>
      {/* <div  className='12pro:mt-custom-2px 12pro: justify-center 12pro:items-center 12pro:border-0'>
      <img src={"https://jkt48.com/images/banner.22nd-single.jpg"} alt="gambar tidak tersedia"  />
      </div> */}
      {/* ini div pembungkus paling luar dari img */}
      <div className="12pro:p-1 12pro:flex 12pro:justify-center 12pro:w-auto 12pro:h-56 12pro:items-center md:pt-32 md:flex md:justify-center md:items-center md:w-auto lg:p-1 lg:flex lg:justify-center lg:w-auto lg:h-56 lg:items-center lg:pt-28 xl:p-1 xl:flex xl:pt-28 xl:h-72 xl:w-full xl:justify-center">
        <div className="12pro:relative 12pro:w-auto 12pro:h-56 md:w-auto md:h-56 md:relative lg:w-auto lg:relative lg:h-56 xl:relative xl:w-auto xl:h-72 12pro:mt-40">
          {/* ini div pembungkus bungkus img */}
          <div className="12pro:inline-flex overflow-x-auto 12pro:snap-mandatory 12pro:overflow-auto 12pro:touch-auto md:inline-flex md:snap-mandatory md:overflow-auto md:touch-auto lg:inline-flex  lg:snap-mandatory  lg:touch-auto xl:inline-flex  xl:snap-mandatory  xl:touch-auto">
            {images.map((img, i) => (
              /* ini div bungkus img */
              <div
                className="12pro:w-auto 12pro:h-56 md:w-auto md:h-56 lg:w-auto lg:h-56 xl:w-auto xl:h-72 12pro:flex-shrink-0 md:flex-shrink-0 lg:flex-shrink-0 xl:flex-shrink-0"
                key={img}
                ref={refs[i]}
              >
                {/* ini bagian img */}
                <img
                  src={img}
                  className="12pro:w-full 12pro:h-56  md:w-full md:h-56 lg:w-full lg:h-56 xl:w-full xl:h-72 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
