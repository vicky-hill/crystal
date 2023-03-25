/* eslint-disable */
import React from 'react'
import Loader from '../elements/Loader'

const LoaderSection = () => {
    return (
        <section id="loader">
            <Loader type="spinner" />
            <Loader type="dots" />
        </section>
    )
}

export default LoaderSection;
