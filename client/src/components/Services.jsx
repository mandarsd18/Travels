import React from "react";


const Services = () => {
  return (
    <>
      <div
        className="w-full h-fit
       py-6 "
      >
        <div className="w-[80%] mx-auto h-full flex justify-center items-center  flex-wrap gap-4 mt-3 mb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
              Ready to go ? We got you !
            </h2>
            <p className="text-sm text-center  font-semibold w-full sm:w-[60%] mx-auto mt-2 text-gray-600" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, numquam natus quidem recusandae eveniet corrupti?
            </p>
          </div>

          <div className="flex items-center justify-evenly gap-4 flex-wrap mt-2">
            <div className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/232/387/original/a-luxury-red-car-on-a-road-flat-rounded-icon-vector.jpg"
                alt="image1"
                className="w-32"
              />
              <h1 className="font-bold ">Car rental</h1>
            </div>
            <div  className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/432/432312.png"
                alt=""
                className="w-32"
              />
               <h1 className="font-bold">Attractions & Tickets</h1>
            </div>
            <div className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/236/236981.png"
                alt=""
                className="w-32"
              />
               <h1 className="font-bold">Museums</h1>
            </div>
            <div className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://img.pikbest.com/element_our/20230508/bg/eeadbe9f34efb.png!sw800"
                alt=""
                className="w-32"
              />
               <h1 className="font-bold">Fun & Culture</h1>
            </div>
            <div className=" bg-white p-4 rounded-lg hover:shadow-md flex items-center flex-col justify-center">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/journey+luggage+suitcase+travel+trip+icon-1320086003129896926.png"
                alt=""
                className="w-32"
              />
               <h1 className="font-bold">Tours</h1>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
