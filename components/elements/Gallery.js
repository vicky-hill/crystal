/* eslint-disable */
import React, { useRef, useState } from 'react'

const Gallery = ({ images }) => {

    console.log(images)

    const [current, setCurrent] = useState(0);
    const [opacity, setOpacity] = useState(0.2);

    const main = useRef(null);

    const setImage = (e) => {

        setCurrent(Number(e.target.id));

        // Add fade-in class
        main.current.classList.add('fade-in');

        // Remove fade-in class
        setTimeout(() => {
            main.current.classList.remove('fade-in');
        }, 500);
    }

    return (
        <div className="gallery">
            <div className="gallery__main">
                <img src={images[current].src} ref={main} />
            </div>
            <div className="gallery__images">
                {
                    images && images.map((image, i) => (
                        <img id={i} onClick={setImage} key={i} src={image.src} style={{ opacity: `${current === i ? opacity : 1}` }} />
                    ))
                }
            </div>
        </div>

    )
}

export default Gallery;
