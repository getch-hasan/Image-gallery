import React, { useState } from 'react';
import imgIcon from '../../assets/images/image-solid.svg';
import useImageContext from '../Hooks/useImageContex';

const UploadImage = ({ imagesValue }) => {
  const { images, setImages } = useImageContext();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const id = imagesValue.length + 100000;
      const newImage = { id: id, img: imageUrl };

      // Update the images state with the new image
      setImages([...imagesValue, newImage]);

      // Clear the selectedFile state
      setSelectedFile(null);
    }
  };

  return (
    <div
      className="border-2 border-dashed rounded-lg md:min-h-80 sm:min-h-40 min-w-full 
      justify-center items-center grid  "
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >

      <div className='grid p-10  h-full'><div className='grid justify-center items-end'><img className=" h-5 w-5  " src={imgIcon} alt="" /></div><div className='grid justify-center items-center'><p className='mt-5 h-full '>Drop an image here</p></div></div>

      <div><input className='hidden' type="file" accept="image/*" onChange={handleFileSelect} /></div>

    </div>
  );
};

export default UploadImage;
