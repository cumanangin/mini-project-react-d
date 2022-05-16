import React from "react";
import { Link } from "react-router-dom";

const ListItemMembers = (props) => {
  const { id, nama, images } = props.data;

  return (
    <>
      <div className="12pro:bg-white-500 12pro:relative 12pro:w-20 12pro:h-24 md:w-36 md:h-40 lg:w-44 lg:h-48 /* 12pro:mt-10 */ drop-shadow-custom1">
        <div className="12pro:absolute 12pro:inset-0 12pro:z-10 12pro:bg-cover 12pro:bg-center 12pro:opacity-0 12pro:duration-300 12pro:active:opacity-100 flip-image -rotate-270 lg:hover:opacity-100">
          <Link to={`/members/${id}`} > {/* klik menuju list detail, nanti di list detail muncul ke direct sesuai id */}
          <img
            key={id}
            src={images}
            alt="gambar tidak ada"
            className="12pro:w-20 12pro:h-24 md:w-36 md:h-40 lg:w-44 lg:h-48 object-cover"
          />
          </Link>
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center 12pro:text-14 md:text-base lg:text-lg font-semibold text-white text-center 12pro:p-2 12pro:active:opacity-0 12pro:active:duration-75 lg:hover:opacity-0 lg:hover:duration-75">
          {nama}
        </div>
      </div>
    </>
  );
};

export default ListItemMembers;
