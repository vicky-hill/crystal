import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Card = ({ header, title, text, image, horizontal, glowing, children }) => {

    if (image && horizontal && title && text) {
        return <CardWithHorizontalImage image={image} title={title} text={text} />

    } else if (image && title && text) {
        return <CardWithImage image={image} title={title} text={text} />

    } else if (header && title && text) {
        return <CardWithHeader header={header} title={title} text={text} />

    } else if (!header && title && text) {
        return <CardWithoutHeader title={title} text={text} />

    } else if (glowing) {
        return <CardWithGlowingCorners />

    } else {
        return <WellCard>{children}</WellCard>
    }
}

const CardWithHeader = ({ header, title, text }) => {
    return (
        <div className="card card--border-shade">
            <div className="card__header">
                {header}
            </div>
            <div className="card__body">
                <h4 className="card__title">{title}</h4>
                <p className="card__text">{text}</p>
            </div>
        </ div>
    )
}

const CardWithoutHeader = ({ title, text }) => {
    return (
        <div className="card">
            <div className="card__body" >
                <h4 className="card__title">{title}</h4>
                <p className="card__text">{text}</p>
                <a href="" className="card__link">Read More</a>
                <a href="" className="card__link">Subscribe</a>
            </div>
        </div>
    )
}

const CardWithImage = ({ title, text, image }) => {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(${image.src})` }}></div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <p className="card__text">{text}</p>
                <Button outline>Go somewhere</Button>
            </div>
        </div>
    )
}

const CardWithHorizontalImage = ({ image, title, text }) => {
    return (
        <div className="card card--horizontal">
            <div className="card__image" style={{ backgroundImage: `url(${image.src})` }}></div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <p className="card__text">{text}</p>
                <a href="#" className="btn" style={{ background: '#2c3e50' }}>Go somewhere</a>
            </div>
        </div>
    )
}

const WellCard = ({ children }) => {
    return (
        <div className="card">
            <div className="card__body">
                {children}
            </div>
        </div>
    )
}

const CardWithGlowingCorners = ({ glowing }) => {
    return (
        <div className="card--glowing mt-10">
            <span></span>
            <h2>01</h2>
        </div>
    )
}

Card.propTypes = {
    header: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
    horizontal: PropTypes.bool,
    glowing: PropTypes.bool
}

export default Card;
