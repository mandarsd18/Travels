import React, { useRef } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form=useRef();
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const sendMail=(e)=>{
    e.preventDefault();
    if(!cookies.access_token){
      navigate("/login");
    }
    else{
      emailjs.sendForm('service_7j5p6v3', 'template_1lp276i', form.current, 'oxkr26hQnmpE6eyUy')
      .then((result) => {
          console.log(result.text);
          toast.success("Email send Successfull 😄");
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          toast.error("Operation failed 😔");
      });
    }

    
  };
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="w-[90%] sm:w-[80%] mx-auto py-4 ">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">
            Send us a message :
          </h1>
          <div className="flex flex-wrap md:flex-nowrap  w-full items-center justify-center gap-4 lg:gap-x-28 bg-white p-5 rounded-md shadow-sm">
            <div className="w-full md:w-[50%] lg:w-[60%]">
              <form ref={form} onSubmit={sendMail} className="flex flex-col gap-2 w-full">
                <div className="flex gap-2 w-full items-center justify-between flex-wrap sm:flex-nowrap">
                  <div className="w-full">
                    <label className="block mb-1 sm:mb-2 text-sm font-medium text-black cursor-pointer">
                      First Name :
                    </label>
                    <input
                      type="text"
                      className="bg-white border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-blue-600 block w-full p-2"
                      placeholder="Firstname"
                      name="firstname"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-1 sm:mb-2 text-sm font-medium text-black  cursor-pointer">
                      Last Name :
                    </label>
                    <input
                      type="text"
                      className="bg-white border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-blue-600 block w-full p-2"
                      placeholder="LastName"
                      name="lastname"
                    />
                  </div>
                </div>
                <div className="w-full">
                    <label className="block  text-sm font-medium text-black  cursor-pointer mb-1 sm:mb-2">
                      Email :
                    </label>
                    <input
                      type="email"
                      className="bg-white border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-blue-600 block w-full p-2"
                      placeholder="Email"
                      name="emailId"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block  text-sm font-medium text-black  cursor-pointer mb-1 sm:mb-2">
                      Subject :
                    </label>
                    <input
                      type="text"
                      className="bg-white border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-blue-600 block w-full p-2"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-1 sm:mb-2 text-sm font-medium text-black  cursor-pointer">
                      Message :
                    </label>
                    <textarea
                      type="text"
                      className="bg-white border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-blue-600 block w-full p-2"
                      placeholder="message"
                      name='message'
                    />
                  </div>
                  <button className=" text-white rounded-md hover:bg-blue-700 text-base font-semibold  bg-blue-600 py-1.5 px-4 mt-3" type="submit">Submit</button>
              </form>
            </div>

            <div className="w-full md:w-[50%] lg:w-[40%] flex flex-col items-start justify-center">
              <p className="text-gray-700 text-xs font-semibold w-[50%]">
                Near G.H.Raisoni college of engineering and management, Pune 
              </p>
              <div className="flex items-center justify-between w-full mt-4 mb-4 flex-wrap">
                <p className="text-xs md:text-sm font-semibold break-words">
                  <MdEmail className="inline-block mr-2 text-base " />
                  mandardeshmukh2003@gmail.com
                </p>
                <p className="text-xs md:text-sm font-semibold break-words">
                  <MdPhone className="inline-block mr-2 text-base" />
                  +917666330822
                </p>
              </div>
              <iframe
                className=" w-full  md:h-[300px] h-[300px] rounded-sm "
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ghraisonipune&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


