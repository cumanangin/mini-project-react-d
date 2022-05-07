import React from "react";
import resource from "../json/carousel.json";

const images = [
  "https://jkt48.com/images/banner.home.kemilaupb.id.jpg",
  "https://jkt48.com/images/banner.22nd-single.jpg",
  "https://jkt48.com/images/banner.home.rapsodi.married.jpg",
];
const Carousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );
  return (
    <>
      {/* <div  className='12pro:mt-custom-2px 12pro: justify-center 12pro:items-center 12pro:border-0'>
      <img src={"https://jkt48.com/images/banner.22nd-single.jpg"} alt="gambar tidak tersedia"  />
      </div> */}
      {/* ini div pembungkus paling luar dari img */}
      <div className="12pro:p-1 12pro:flex 12pro:justify-center 12pro:w-auto 12pro:h-56 12pro:items-center md:p-1 md:flex md:justify-center md:items-center lg:p-1 lg:flex lg:justify-center lg:w-auto lg:h-56 lg:items-center xl:p-1 xl:flex md:w-auto   xl:h-72 xl:w-full xl:justify-center">
        <div className="12pro:relative 12pro:w-auto md:w-auto md:h-56 md:relative lg:w-auto lg:relative lg:h-56 xl:relative xl:w-auto xl:h-72">
          {/* ini div pembungkus bungkus img */}
          <div className="12pro:inline-flex 12pro:overflow-x-hidden 12pro:snap-mandatory 12pro:overflow-auto 12pro:touch-auto md:inline-flex md:overflow-x-hidden md:snap-mandatory md:overflow-auto md:touch-auto lg:inline-flex lg:overflow-x-hidden lg:snap-mandatory lg:overflow-auto lg:touch-auto xl:inline-flex xl:overflow-x-hidden xl:snap-mandatory xl:overflow-auto xl:touch-auto">
            {sliderControl(true)}
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
            {sliderControl()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
