
import { ImagesContex } from '../Contex/ImagesContex';
import { useContext } from 'react';

const useImageContext = () => {
    return  useContext(ImagesContex);
};

export default useImageContext;