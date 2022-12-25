import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";

import SectionBackground from "../assets/section-background.png";
import Loading from "./LoadingComponent";

const getMembers = gql`
  query MyQuery($id: Int!) {
    members_by_pk(id: $id) {
      id
      images
      nama
      tanggal_lahir
      golongan_darah
      horoskop
      tinggi_badan
      nama_panggilan
    }
  }
`;

const DetailMembers = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(getMembers, { variables: { id } });
  // yyyy-MM-dd
  /*  const date = data.tanggal_lahir;
  const [year, month, day] = date.split("-"); */

  // dd/mm/yyyy
  /* console.log(`${day}/${month}/${year}`) */

  useEffect(() => {
    if (!loading) {
      console.log(data.members_by_pk);
    }
  }, [data, loading]);

  if (loading) {
    return (
      <div className="absolute w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  const date = data.members_by_pk.tanggal_lahir;
  const [year, month, day] = date.split("-");

  console.log(day, month, year);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{/* {JSON.stringify(data,null,2)} */}</div>
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
            Detail Member {data.members_by_pk.nama}
          </div>
        </div>
      </div>
      <div className="relative flex justify-around mt-5">
        <div>
          <Link
            to={`/members/${data.members_by_pk.id - 1}`}
            className="xl:text-lg hover:duration-100 hover:text-torea-bay-500"
          >
            Prev
          </Link>
        </div>
        <div>
          <Link
            to={`/members/${data.members_by_pk.id + 1}`}
            className="xl:text-lg hover:duration-100 hover:text-torea-bay-500"
          >
            Next
          </Link>
        </div>
      </div>
      <div className="absolute w-full h-full flex justify-center 12pro:pt-4">
        <div className="12pro:w-80 12pro:h-96 bg-white-500 border border-[#1E7BBE] rounded-40px 12pro:pt-0 12pro:flex 12pro:flex-col 12pro:justify-center md:w-custom-655px md:h-96 md:items-center md:flex-row md:pt-0 md:align-middle lg:w-custom-980px lg:h-custom-456px xl:w-11/12 xl:h-3/4 12pro:overflow-x-auto 12pro:overflow-y-auto">
          {" "}
          {/* frame wrap all detail member content */}
          <div className="12pro:flex 12pro:flex-col md:flex-row justify-center items-center">
            <div>
              {" "}
              {/* div untuk gambar */}
              <img
                src={data.members_by_pk.images}
                alt="gambar gagal diload"
                className="12pro:w-32 12pro:h-32 md:w-40 md:h-40 lg:w-custom-300px lg:h-custom-300px xl:w-custom-400px xl:h-custom-400px object-cover"
              />
            </div>
            <div className="12pro:opacity-0 12pro:py-2 md:opacity-100 md:border-2 bg-[#000000] md:mx-10 md:w-0 md:rounded-40px">
              {" "}
              {/* wrap line */}
              <div className="md:px-3 md:h-44 lg:h-96 xl:h-custom-500px">
                {/* ini div untuk line */}
              </div>
            </div>
            <div className="border 12pro:w-5/6 md:w-custom-300px md:h-custom-210px lg:w-custom-500px lg:h-custom-250px xl:h-custom-300px overflow-x-auto overflow-y-auto">
              <div className="grid grid-cols-2 xl:text-lg">
                <div className=" 12pro:pl-3 12pro:py-1 lg:py-2 lg:pl-5 xl:py-3">
                  <div>Nama</div>
                </div>
                <div className=" 12pro:py-1 lg:py-2 xl:py-3">
                  {data.members_by_pk.nama}
                </div>
                <div className=" 12pro:pl-3 12pro:py-1 lg:py-2 lg:pl-5 xl:py-3">
                  <div>Tanggal Lahir</div>
                </div>
                <div className=" 12pro:py-1 lg:py-2 xl:py-3">
                  {`${day} - ${month} - ${year}`}
                </div>
                <div className=" 12pro:pl-3 12pro:py-1 lg:py-2 lg:pl-5 xl:py-3">
                  <div>Gol. Darah</div>
                </div>
                <div className=" 12pro:py-1 lg:py-2 xl:py-3">
                  {data.members_by_pk.golongan_darah}
                </div>
                <div className=" 12pro:pl-3 12pro:py-1 lg:py-2 lg:pl-5 xl:py-3">
                  <div>Horoskop</div>
                </div>
                <div className=" 12pro:py-1 lg:py-2 xl:py-3">
                  {data.members_by_pk.horoskop}
                </div>
                <div className=" 12pro:pl-3  12pro:py-1 lg:py-2 lg:pl-5 xl:py-3">
                  <div>Tinggi Badan</div>
                </div>
                <div className=" 12pro:py-1 lg:py-2 xl:py-3">
                  {data.members_by_pk.tinggi_badan} cm
                </div>
                <div className=" 12pro:pl-3  12pro:py-1 lg:py-2 lg:pl-5">
                  <div>Nickname</div>
                </div>
                <div className=" 12pro:py-1 lg:py-2">
                  {data.members_by_pk.nama_panggilan}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative flex justify-around my-5">
        <div>
          <Link to={`/members/${data.members_by_pk.id - 1}`}>Prev</Link>
        </div>
        <div>
          <Link to={`/members/${data.members_by_pk.id + 1}`}>Next</Link>
        </div>
      </div> */}
    </>
  );
};

export default DetailMembers;
