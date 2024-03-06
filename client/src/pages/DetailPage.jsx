import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";
import DetailSec from "../components/DetailSec";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  

  const getSingleData = async () => {
    const res = await axios.get(`http://localhost:4000/tour/${id}`);
    setData(res.data.singleTour);
    
  };
 
  
  
  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <>
      <div className="w-full bg-gray-100 h-full">
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-wrap md:flex-nowrap gap-4 py-6">
          <DetailSec data={data} />
          <Form data={data}/>
         
        </div>
        
      </div>
    </>
  );
};

export default DetailPage;
