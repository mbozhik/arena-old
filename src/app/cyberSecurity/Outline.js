'use client'
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const Outline = () => {
  const [items, setItems] = useState([
    {
      original:"/cyber-security1.svg",
      thumbnail:"/cyber-security1.svg",
    },
    {
      original:"/cyber-security2.svg",
      thumbnail:"/cyber-security2.svg",
    },
    {
      original:"/cyber-security3.svg",
      thumbnail:"/cyber-security3.svg",
    },
    {
      original:"/cyber-security4.svg",
      thumbnail:"/cyber-security4.svg",
    },
    {
      original:"/cyber-security5.svg",
      thumbnail:"/cyber-security5.svg",
    },
    {
      original:"/cyber-security6.svg",
      thumbnail:"/cyber-security6.svg",
    },
   
  ]);

  return <ImageGallery items={items} />;
};

export default Outline;
