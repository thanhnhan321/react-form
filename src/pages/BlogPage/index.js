import React from "react";
import { Layout } from "../../components";
import "./style.css";


//Module này dùng để tạo ra trang Blog của app với các bài viết 
const BlogPage = () => {
  const blogPosts = [
    { id: 1, title: "Introduction to React", content: "Lorem ipsum..." },
    { id: 2, title: "State and Props in React", content: "Lorem ipsum..." },
    { id: 3, title: "Building a React App", content: "Lorem ipsum..." },
  ];

  return (
    <Layout>
      <div className="blog-page">
        <h1 style={{ color: "#333" }}>My Blog</h1>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <h2 style={{ color: "#007bff" }}>{post.title}</h2>
              <p style={{ color: "#555" }}>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
