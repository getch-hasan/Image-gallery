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



  return (
    <div
      ref={(node) => {
        ref(drop(node));
      }}
      className={`${index === 0
        ? 'col-span-2 row-span-2 border-2  rounded-lg'
        : 'col-span-1  static row-span-1  border-2 rounded-lg'
        }`}
    >
      <label className='relative'>
        <input
          checked={imgs.some(item => item.id === id)}
          onChange={() => handleSelect({ id, img })}
          className='absolute m-4'
          type='checkbox'
          name=''
          id=''
        />
        <img className='hover:opacity-50' src={img} alt='' />
      </label>
    </div>
  );
};

export default Images;
