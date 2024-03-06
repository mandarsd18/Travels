import React from "react";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery"
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Services/>
      <CardSection/>
      <Gallery/>
      <Contact/>
      
    </>
  );
};

export default Home;
