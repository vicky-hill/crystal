/* eslint-disable */
import React, { useState } from 'react'

const Carousel = ({ images }) => {

    // Add first and last clones
    const lastImage = images[images.length - 1]
    const firstImage = images[0];
    images = [lastImage, ...images, firstImage];

    // Count for current slide & dot
    const [currentSlide, setCurrentSlide] = useState(1);
    const [currentDot, setCurrentDot] = useState(1);

    const [transition, setTransition] = useState('');

    // Handle first and last slide
    const loopCarousel = () => {
        console.log(currentSlide);
        if (currentSlide === 0) {
            setTransition('none');
            setCurrentSlide(images.length - 2);
        }

        if (currentSlide === images.length - 1) {
            setTransition('none');
            setCurrentSlide(1);
        }
    }

    // Previous Button
    const previous = () => {
        if (currentDot <= 0 || currentSlide <= 0) return;
        setTransition('transform .8s ease-in-out');
        currentDot === 1 ? setCurrentDot(images.length - 2) : setCurrentDot(currentSlide - 1);
        currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide(currentSlide - 1);
    }

    // Next Button
    const next = () => {
        if (currentDot >= images.length - 1 || currentSlide >= images.length - 1) return;
        setTransition('transform .8s ease-in-out');
        currentDot === images.length - 2 ? setCurrentDot(1) : setCurrentDot(currentSlide + 1);
        currentSlide === images.length - 1 ? setCurrentSlide(1) : setCurrentSlide(currentSlide + 1);
    }

    // Navigation Dots
    const navigateDot = (e) => {
        setTransition('transform .8s ease-in-out');
        setCurrentSlide(Number(e.target.id));
        setCurrentDot(Number(e.target.id))
    }

    return (
        <>
            {/* Carousel */}
            <div className="carousel__container">
                <div className="carousel">

                    {/* Slides */}
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className={"carousel__slide"}
                            style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: transition }}
                            onTransitionEnd={loopCarousel}
                            id={i}
                        >
                            {/* Slide Image */}
                            <img src={image.src} alt="" />
                        </div>
                    ))}

                    {/* Carousel Nav */}
                    <div className="carousel__nav">

                        {/* Nav Dots */}
                        {images.map((image, i) => (
                            <button
                                key={i}
                                id={i}
                                className={`carousel__indicator ${i === 0 || i === images.length - 1 ? 'clone' : i === currentDot ? 'current' : ''}`}
                                onClick={navigateDot}
                            />
                        ))}
                    </div>
                </div>

                {/* Previous button */}
                <button className="carousel__btn left" onClick={previous}>
                    <i className="fas fa-chevron-left"></i>
                </button>

                {/* Next button */}
                <button className="carousel__btn right" onClick={next}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </>
    )
}

export default Carousel;
