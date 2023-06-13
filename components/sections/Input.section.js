import React, { useState } from 'react'
import Input from '../elements/Input'
import Button from '../elements/Button';


const InputSection = ({ }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    const onChange = (e) => {
        error && setError(null);
        setName(e.target.value);
    }


    return (
        <section id="input" className='w-1/2'>
            <Input
                label="Simple Input"
                placeholder="Start typing"
                value={name}
                onChange={onChange}
                error={error}
            />
            <Button onClick={() => setError('Error is set')}>
                Cause Error
            </Button>
        </section>
    )
}

export default InputSection;
