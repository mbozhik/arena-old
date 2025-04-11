'use client'
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

// Don't forget the CSS:
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { IoMdExpand } from "react-icons/io";


const Outline = ({data}) => {
  // const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false)
  const images = [
    {
      src: "./cyber-security-course-outline/cyber-security1.svg",
    },
    {
      src: "./cyber-security-course-outline/cyber-security2.svg",
    },
    {
      src: "./cyber-security-course-outline/cyber-security3.svg",
    },
    {
      src: "./cyber-security-course-outline/cyber-security4.svg",
    },
    {
      src: "./cyber-security-course-outline/cyber-security5.svg",
    },
    {
      src: "./cyber-security-course-outline/cyber-security6.svg",
    },
  ];
  

  // return <ImageGallery items={images} />;
  return(
    <div>
      <h5 className="text-center text-[24px] font-semibold text-black  pt-8 pb-6">
      Course Outline
      </h5>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lightgrid">

    {images.map((image, i) => (
      <button
        key={i}
        onClick={() => {
          setIndex(i);
          setOpen(true);
        }}
        className="LightImg-container transition-opacity duration-500 ease-in-out "
      >
        <img
          src={image.src}
          alt={`Gallery image ${i}`}
          className="LightImgPreview w-full  object-cover"
        />
        <div className="middle">
          <div className="textExpand flex justify-center flex-col items-center">
          <IoMdExpand className='font-bold text-4xl'/>
            Expand Image
          </div>
        </div>
      </button>
    ))}
  
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={images}
      index={index}
      plugins={[Thumbnails]}
    />
  </div>
  </div>
  
  )
};

export default Outline;
