import React, { useState } from 'react';
import image1 from '../../assets/images/image-1.webp';
import image2 from '../../assets/images/image-2.webp';
import image3 from '../../assets/images/image-3.webp';
import image4 from '../../assets/images/image-4.webp';
import image5 from '../../assets/images/image-5.webp';
import image6 from '../../assets/images/image-6.webp';
import image7 from '../../assets/images/image-7.webp';
import image8 from '../../assets/images/image-8.webp';
import Images from './Images';
import imgIcon from '../../assets/images/image-solid.svg';
import './Gallery.css';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image3 },
    { id: 4, img: image4 },
    { id: 5, img: image5 },
    { id: 6, img: image6 },
    { id: 7, img: image7 },
    { id: 8, img: image8 },
  ]);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  const renderImages = images.map((image, index) => (
    <Images
      key={image.id}
      image={image}
      index={index}
      moveImage={moveImage}
    />
  ));

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='grid grid-cols-5 gap-4 m-5'>
        {renderImages}
        <div
          className='border-dashed border-2 border-blue-500 rounded-lg grid grid-cols-1 gap-5 content-center items-center'
        >
          <img className='h-5 w-5' src={imgIcon} alt='' />
          <p>Upload your image</p>
        </div>
      </div>
    </DndProvider>
  );
};

export default Gallery;
