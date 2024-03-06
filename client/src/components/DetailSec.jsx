import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BiTrip } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
const DetailSec = ({data}) => {
  return (
   <>
    <div className="w-full lg:w-[70%] ">
            <img src={data?.tourImg} className=" rounded-md" alt="" />
            <div>
              <h1 className="text-xl font-bold mt-2">{data?.tourName}</h1>
              <div className="mt-3 mb-3 font-semibold text-sm">
                <div className="flex items-center justify-between mb-2">
                  <p>
                    <BiTrip className="inline-block text-[18px]" />{" "}
                    {data?.address}
                  </p>
                  <p>
                    <IoLocationSharp className="inline-block text-[18px]" />{" "}
                    {data?.state}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Rs {data?.price}/person</p>
                  <p className="">
                    <BsFillPersonFill className="inline-block text-[18px]" />
                    50 Person max
                  </p>
                </div>
              </div>
              <h1 className="font-bold text-xl mb-2">Description:</h1>
              <p
                className="text-sm
             font-semibold"
              >
                {data?.description}
              </p>
            </div>
          </div>
   </>
  )
}

export default DetailSec
