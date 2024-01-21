'use client'
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const Outline = ({data}) => {
  const [items, setItems] = useState(data);
  return <ImageGallery items={items} />;
};
export default Outline;
