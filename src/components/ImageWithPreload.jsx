import { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const ImageWithPreload = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setImageLoaded(true);
        };
        image.src = src;
    }, [src]);

    return (
        <div style={{ display: imageLoaded ? 'block' : 'none' }}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageWithPreload;
