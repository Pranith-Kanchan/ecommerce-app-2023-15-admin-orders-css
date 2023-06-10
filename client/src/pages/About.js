import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h4>Welcome to Our Website!</h4>
          At BharathGroceryStore, we are a team of passionate individuals dedicated to delivering an exceptional online shopping experience. Founded by Riza, Sanjana, and Varna, we strive to provide you with top-quality products and outstanding customer service.Driven by a shared vision, Riza, Sanjana, and Varna came together to create a platform that offers convenience, reliability, and innovation. With our combined expertise and love for technology, we handpick every product in our inventory to ensure the highest standards of quality and value.
          <h5>Happy Shopping!</h5>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
