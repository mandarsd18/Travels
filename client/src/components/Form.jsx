import React, { useState, useRef } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Form = ({ data }) => {
  const [pnum, setPnum] = useState(1);
  const [phoneNo, setPhoneNo] = useState("");
  const [service, setService] = useState(500);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [date, setDate] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef();

  const navigate = useNavigate();

  // console.log(date);

  const bookNow = async () => {
    if (!cookies.access_token) {
      navigate("/login");
    } else {
      if (!name || !phoneNo || !date) {
        toast.error("All field are required !!");
      } else {
        const {
          data: { order },
        } = await axios.post("http://localhost:4000/api/checkout", {
          amount:1,
          
        });
        // console.log(data);

        const options = {
          key: "rzp_test_HO573khOZtla4h",
          amount: order.amount,
          currency: "INR",
          name: "Travel",
          description: "Test Transaction",
          image:
            "https://img.freepik.com/free-vector/detailed-travel-logo-theme_23-2148630535.jpg",
          order_id: order.id,
          handler: async function (response) {
            await axios.post("http://localhost:4000/api/paymentverification", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            });
          },
          prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#4034E5",
          },
        };
        const razor = new window.Razorpay(options);
        razor.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        razor.open();

        emailjs
          .sendForm(
            "service_7j5p6v3",
            "template_an22wi2",
            form.current,
            "oxkr26hQnmpE6eyUy"
          )
          .then(
            (result) => {
              console.log(result.text);
              toast.success("Email send Successfull 😄");
              setDate("");
              setEmail("");
              setName("");
              setPhoneNo("");
            },
            (error) => {
              console.log(error.text);
              toast.error("Operation failed 😔");
            }
          );
      }
    }
  };
  return (
    <>
      <div className=" w-full lg:w-[30%] bg-white shadow-sm  h-fit p-3 rounded-sm ">
        <form ref={form} className=" p-2 rounded-md">
          <h1 className="text-lg font-bold">Information :</h1>
          <label
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-3 cursor-pointer"
            for="title"
          >
            Enter the your name :
          </label>
          <input
            value={name}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-2 sm:p-2.5"
            placeholder="Name"
            name="fullName"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-3 cursor-pointer"
            for="title"
          >
            Enter the your Email is :
          </label>
          <input
            value={email}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-2 sm:p-2.5"
            placeholder="adc@gmail.com"
            name="emailId"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-2 sm:mt-3 cursor-pointer">
            Enter your phone number :
          </label>
          <input
            value={phoneNo}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-2 sm:p-2.5"
            placeholder="+91 XXXXX XXXXX"
            name="phNo"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
            <div>
              <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-2 sm:mt-3 cursor-pointer">
                Date :
              </label>
              <input
                value={date}
                type="date"
                name="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-1.5"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-600 mt-2 sm:mt-3 cursor-pointer ">
                Passsenger :
              </label>
              <input
                value={pnum}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-blue-600 block w-full p-1.5"
                placeholder="00"
                name="passenger"
                onChange={(e) => setPnum(e.target.value)}
              />
            </div>
          </div>
        </form>

        <div className="p-2 font-semibold flex flex-col">
          <div className="flex items-center justify-between">
            <p>
              Rs {data?.price} * <span>{pnum}</span>
            </p>
            <p>Rs {data?.price * pnum}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Services Charges</p>
            <p>Rs {service}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total -</p>
            <p>Rs {data?.price * pnum + service}</p>
          </div>
          <button
            className=" text-white rounded-md hover:bg-blue-700 text-base font-semibold  bg-blue-600 py-1.5 px-4 mt-3"
            onClick={bookNow}
          >
            Book now
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
