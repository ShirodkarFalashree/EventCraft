import React, { useState } from "react";
import "./sidenav.css";
const TemplatesList = () => {
    const templates = [
        {
            name : "Template 1"
        },
        {
            name : "Template 2"
        },
        {
            name : "Template 3"
        },
        {
            name : "Template 4"
        },
        {
            name : "Template 5"
        },
        {
            name : "Template 6"
        },
        {
            name : "Template 7"
        },
    ]
    const Brouchre = [
        {
            name : "Brouchre 1"
        },
        {
            name : "Brouchre 2"
        },
        {
            name : "Brouchre 3"
        },
        {
            name : "Brouchre 4"
        },
        {
            name : "Brouchre 5"
        },
        {
            name : "Brouchre 6"
        },
        {
            name : "Brouchre 7"
        },
    ]
    const Banner = [
        {
            name : "Banner 1"
        },
        {
            name : "Banner 2"
        },
        {
            name : "Banner 3"
        },
        {
            name : "Banner 4"
        },
        {
            name : "Banner 5"
        },
        {
            name : "Banner 6"
        },
        {
            name : "Banner 7"
        },
    ]
    const Post = [
        {
            name : "Post 1"
        },
        {
            name : "Post 2"
        },
        {
            name : "Post 3"
        },
        {
            name : "Post 4"
        },
        {
            name : "Post 5"
        },
        {
            name : "Post 6"
        },
        {
            name : "Post 7"
        },
    ]
    const [template , setTemplate] = useState(templates)
    const [isBrouchre , setIsBrouchre] = useState(false)
    const [isBanner , setIsBanner] = useState(false)
    const [isPost , setIsPost] = useState(false)

    const handleBrouchre = () => {
        setIsBrouchre(true)
        setTemplate(Brouchre)
    }
    const handleBanner = () => {
        setIsBanner(true)
        setTemplate(Banner)
    }
    const handlePost = () => {
        setIsPost(true)
        setTemplate(Post)
    }

  return (
    <div className="templatescontainer">
      <div className="dropdown">
        <button className="dropbtn">Templates <i class="fa-solid fa-chevron-down"></i></button>
        <div className="dropdown-content">
          <a href="#" onClick={handleBanner}>Banner</a>
          <a href="#" onClick={handlePost}>Post</a>
          <a href="#" onClick={handleBrouchre}>Brouchre</a>
        </div>
      </div>
      {template.map((curTemp) => {
        return (
            <div className="temp" key={curTemp.name}>
                <p>{curTemp.name}</p>
            </div>
        )
      })}
    </div>
  );
};

export default TemplatesList;
