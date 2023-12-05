import React from "react";
import Header from "../../component/header/Header";
import Hero from "../../component/hero/Hero";
import Article from "../../component/article/Article";
import Policy from "../../component/privacy-policy/Policy.jsx";
import Footer from "../../component/footer/Footer";
import Prize from "../../component/prizes/Prize";
import Timeline from "../../component/timeline/Timeline";
import Faq from "../../component/faqs/Faq";
// import { Link } from "react-router-dom";
// import Contact from "../../component/contact/Contact";
// import Register from "../../component/register/Register";

const Home = () => {
  return (
    <div className="wrapper relative overflow-hidden ">
      <Header />
      <Hero />

      <Article />
      <div id="faq">
        <Faq />
      </div>
      <Timeline />
      <Prize />
      <Policy />
      <Footer />
      {/* <Contact /> */}
      {/* <Register /> */}
    </div>
  );
};

export default Home;
