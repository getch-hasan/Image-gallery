import React, { useEffect, useState } from 'react';
import image1 from '../../assets/images/image-1.webp'
import image2 from '../../assets/images/image-2.webp'
import image3 from '../../assets/images/image-3.webp'
import image4 from '../../assets/images/image-4.webp'
import image5 from '../../assets/images/image-5.webp'
import image6 from '../../assets/images/image-6.webp'
import image7 from '../../assets/images/image-7.webp'
import image8 from '../../assets/images/image-8.webp'
import Images from './Images';
import './Gallery.css'
const Gallery = () => {
    const [images, setImages] = useState([{
        id: 1, img: image1
    },
    {
        id: 2, img: image2
    },
    {
        id: 3, img: image3
    },
    {
        id: 4, img: image4
    },
    {
        id: 5, img: image5
    },
    {
        id: 6, img: image6
    },
    {
        id: 7, img: image7
    },
    {
        id: 8, img: image8
    },])

    console.log(images)
    return (
        <div className='grid grid-cols-5 gap-4 m-5'>
            {
                images.map((image, index) => <Images image={image}
                index={index}
                    ></Images>)
            }
        </div>
    );
};

export default Gallery;