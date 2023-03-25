import React, { useState } from 'react'
import Button from '../elements/Button';

const ButtonSection = () => {
    const [loading, setLoading] = useState(false);
    const toggleLoading = () => setLoading(prev => !prev);

    return (
        <section id="buttons">
            <Button>Button</Button>

            <Button loading={loading} onClick={toggleLoading}>Loading Button</Button>

            <Button outline>Outline Button</Button>

            <Button round outline>Round Button</Button>

            <button className="btn--floating">
                <i className="fas fa-plus"></i>
            </button>
        </section>
    )
}



export default ButtonSection;