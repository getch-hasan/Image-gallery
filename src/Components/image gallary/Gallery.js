import Images from './Images'
import './Gallery.css';
import useImageContex from '../Hooks/useImageContex';
import { useState } from 'react';
import UploadImage from './UploadImage';
const Gallery = () => {
  const { images, setImages } = useImageContex()
  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };


  const [deleteProduct, setDeleteProduct] = useState(false)
  const [img, setImg] = useState([])
  const handleSelect = (value) => {


    const newImg = [...img, value];
    const isTrue = img.some(item => item.id === value.id)

    if (isTrue) {
      const filters = img.filter(item => item.id !== value.id)
      setImg(filters)
    }
    else {
      setImg(newImg)
    }
  }
  let imagesValue = images;
  const newValuesImg = imagesValue.map(item => {
    const finds = img.find(it => it?.id === item?.id);
    if (!finds?.id) {
      return item;
    } else {
      return undefined; // Return something or null to indicate that the item should be excluded
    }
  });

  const filters = newValuesImg.filter(item => item !== undefined)
  const handleDelete = (e) => {
    // Filter the images to keep only the unselected ones
    const updatedImages = images.filter((image) => !img.some((selectedImage) => selectedImage.id === image.id));
    setImages(updatedImages);
  };

  if (deleteProduct) {

    imagesValue = filters

  }
  let totalSelected = images.length - filters.length
  return (
    <div>
      {
        totalSelected > 0 ?
          <div className='m-10 grid grid-cols-2 justify-center  ms-11'>
            <p>
              <span>
                <input type="checkbox" name="selected" checked={totalSelected > 0} id="" />
              </span>
              {totalSelected > 0 && (totalSelected)} selected
            </p>
            <p>
              <button onClick={() => handleDelete()} className='text-red-500  z-50 font-medium text-lg'>
                delete files
              </button>
            </p>
          </div>
          :
          <h1 className='font-semibold text-xl m-10'>Gallery</h1>

      }
      <div className='grid md:grid-cols-5 sm:grid-cols-4  gap-4 m-5'>
        {imagesValue?.map((image, index) => (
          <Images
            key={image.id}
            imagesValue={image}
            index={index}
            moveImage={moveImage}
            handleSelect={handleSelect}
            imgs={img}

          />
        ))}
        <UploadImage imagesValue={imagesValue}></UploadImage>
      </div>
    </div>

  );
};

export default Gallery;
