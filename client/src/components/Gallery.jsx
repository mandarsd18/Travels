import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Gallery = () => {
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
        <div className="w-[90%] sm:w-[80%] mx-auto mt-4 ">
            <h1 className="text-2xl mb-3 font-bold">Visit our passengers tour gallery :</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 space-y-3 p-3">
            {
                data.map((i)=>(
                    <img src={i.tourImg} alt={i.tourName} />
                ))
            }
                
            </div>
        </div>
    </>
  )
}

export default Gallery
