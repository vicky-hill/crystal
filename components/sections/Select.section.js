import React, { useState } from 'react'
import Select, { Option } from '../elements/Select';
import Button from '../elements/Button';


const SelectSection = ({ }) => {
    const [selection, setSelection] = useState('');
    const [error, setError] = useState(null);

    const onChange = (e) => {
        error && setError(null);
        setSelection(e.target.value);
    }



    return (
        <section id="input" className='w-1/2'>

            {/* Simple Select with useState */}
            <Select value={selection} setValue={setSelection}>
                <Option disabled>First</Option>
                <Option>Second</Option>
                <Option>Third</Option>
            </Select>

            {/* Simple Select with custom onChange */}
            <Select value={selection} onChange={onChange}>
                <Option value="2">Second</Option>
                <Option value="3">Third</Option>
            </Select>

            <Button onClick={() => setError('Error is set')}>
                Cause Error
            </Button>
        </section>
    )
}

export default SelectSection;
