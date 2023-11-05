import React from 'react';
import { useDrag, useDrop } from 'react-dnd';


const Images = ({ imagesValue, index, moveImage, handleSelect, imgs }) => {

  const { id, img } = imagesValue;
  const [, ref] = useDrag({
    type: 'IMAGE',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'IMAGE',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
const selected=imgs.some(item => item.id === id)

 
  return (
    <div
      ref={(node) => {
        ref(drop(node));
      }}
      className={`${index === 0
        ? `col-span-2 row-span-2 border-4 ${selected  && 'opacity-50' }    hover:opacity-25 transition-opacity duration-500 ease-out-in  rounded-lg`
        : `col-span-1  static row-span-1 ${selected  && 'opacity-50' }   hover:opacity-25 transition-opacity duration-500 ease-out-in  border-4  rounded-lg`
        }`}
    >
      <label className='relative'>
        <input
          checked={selected}
          onChange={() => handleSelect({ id, img })}
          className='absolute m-4'
          type='checkbox'
          name=''
          id=''
        />
        <img className='h-full' src={img} alt='' />
      </label>
    </div>
  );
};

export default Images;
