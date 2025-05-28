import React, { useState } from 'react';
import { ImgContext } from '../context/Context';

const ImgProvider = ({children}) => {
    const [imgUrl, setImgUrl] = useState(null);

    return (
        <ImgContext.Provider value={{imgUrl,setImgUrl}}>
            {children}
        </ImgContext.Provider>
    );
};

export default ImgProvider;