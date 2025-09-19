'use client'
import React, {useState} from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

// Don't forget the CSS:
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import {IoMdExpand} from 'react-icons/io'
const Outline = () => {
  // const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const images = [
    {
      src: './python/python1.png',
    },
    {
      src: './python/python2.png',
    },
    {
      src: './python/python3.png',
    },
    {
      src: './python/python4.png',
    },
    {
      src: './python/python5.png',
    },
  ]
  // return <ImageGallery items={images} />;
  return (
    <div>
      <h5 className="text-center text-[24px] font-semibold text-black  pt-8 pb-6">Course Outline</h5>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 lightgrid">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="transition-opacity duration-500 ease-in-out LightImg-container "
          >
            <img src={image.src} alt={`Gallery image ${i}`} className="object-cover w-full LightImgPreview" />
            <div className="middle">
              <div className="flex flex-col items-center justify-center textExpand">
                <IoMdExpand className="text-4xl font-bold" />
                Expand Image
              </div>
            </div>
          </button>
        ))}

        <Lightbox open={open} close={() => setOpen(false)} slides={images} index={index} plugins={[Thumbnails]} />
      </div>
    </div>
  )
}

export default Outline
