import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Images = ({ image, index, moveImage }) => {
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
      className={`${
        index === 0
          ? 'col-span-2 row-span-2 border-2 hover:bg-slate-400 border-black rounded-lg'
          : 'col-span-1 static hover:bg-slate-400 row-span-1 border-2 border-blue-500 rounded-s-lg'
      }`}
    >
      <label className='relative'>
        <input className='absolute m-4' type='checkbox' name='' id='' />
        <img className='hover:opacity-75' src={image?.img} alt='' />
      </label>
    </div>
  );
};

export default Images;
