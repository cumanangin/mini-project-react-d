import React from 'react'
import BannerAnggota from '../assets/banner-list-anggota.svg'
import { gql, useQuery } from "@apollo/client";
import FotoMembers from '../json/members.json'
import Loading from './LoadingComponent';

import ListMembers from './ListMembers';

import SectionBackground from "../assets/section-background.png";

const getMembers = gql`
  query MyQuery {
  members(order_by: {id: asc, nama: asc, images: asc}) {
    id
    nama
    images
  }
}
`;

/* const members = [
  "https://jkt48.com/profile/adzana_shaliha.jpg",
  "https://jkt48.com/profile/angelina_christy.jpg",
  "https://jkt48.com/profile/aninditha_rahma_cahyadi.jpg",
  "https://jkt48.com/profile/azizi_asadel.jpg",
  "https://jkt48.com/profile/cindy_hapsari.jpg",
  "https://jkt48.com/profile/cornelia_vanisa.jpg",
  "https://jkt48.com/profile/dhea_angelia.jpg",
  "https://jkt48.com/profile/febriola_sinambela.jpg",
  "https://jkt48.com/profile/feni_fitriyanti.jpg",
  "https://jkt48.com/profile/fiony_alveria.jpg",
  "",
]; */

/* const refs = members.reduce((acc, val, i) => {
  acc[i] = React.createRef();
  return acc;
}, {}); */

const MembersContent = () => {
  const {loading,data} = useQuery(getMembers);

if(loading) {
  /* console.log("apakah loading?" +loading) */
  return(
      <div className='absolute w-full h-full flex justify-center items-center'>
        <Loading />
      </div>
  )
}
  return (
      <>
        <div>
        <div className="12pro:pt-20  md:pt-36">
        {" "}
        {/* frame detail member */}
        {/* di bawah itu div wrap background */}
        <div
          className="12pro:p-3 m-3"
          style={{ backgroundImage: `url(${SectionBackground})` }}
        >
          {/* di bawah ini div text background */}
          <div className="12pro:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            List Members
          </div>
        </div>
      </div>
          <div className='12pro:py-1 md:pb-12 lg:pb-14'>
          <ListMembers showMembers = {data}
          />
          </div>
        </div>
      </>
  )
}

export default MembersContent