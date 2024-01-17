import React from "react";
import { Layout } from "../../components";
import "./style.css";

//Module này dùng để tạo ra trang About của app với các thông tin về công ty hoặc tổ chức
const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to our About page. Here, you can learn more about our company or organization.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor non
          justo congue, vel scelerisque ligula blandit. Fusce eget est ut elit ultrices bibendum
          eget nec velit. Sed id mauris in nunc fermentum rhoncus.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
