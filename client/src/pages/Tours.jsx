import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tours = () => {
  const [data, setData] = useState([]);
  const getAllTour = async () => {
    const res = await axios.get("https://travels-2dxq.onrender.com/tour/all-tour");
    setData(res.data);
  };
 

  useEffect(() => {
    getAllTour();
  }, []);
  return (
    <>
      
      <div className="w-full bg-gray-100 pb-4">
        <div className="w-[90%] sm:w-[80%] mx-auto ">
          <div className="flex items-center justify-center sm:justify-between flex-wrap gap-4 py-4">
          {
            data.map((item)=>(
              <div className="w-full rounded-sm  lg:max-w-sm bg-white border-2">
              <img
                className="object-cover w-full h-48 rounded-t-sm"
                src={item.tourImg?item.tourImg:"https://3.bp.blogspot.com/-GbpQKPDQqMk/VhiVWZKfvNI/AAAAAAAAALU/s5LpKhaOurg/s1600/World%2BTour1.jpg"}
                alt=""
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                {item.tourName.length>30?item.tourName.slice(0,30)+"...":item.tourName}
                </h4>
                <p className="mb-2 leading-normal">
                  {item.description.length>150?item.description.slice(0,150)+"...":item.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-sm sm:text-base">Rs {item.price}/Person</p>
                  <Link className="px-3 py-1.5 text-sm text-white bg-blue-600 rounded shadow font-semibold hover:bg-blue-700" to={`/tour/${item._id}`}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            ))
          }
            

          </div>
          
        </div>
      </div>
    </>
  )
}

export default Tours
