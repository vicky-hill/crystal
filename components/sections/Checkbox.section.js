import React, { useState } from 'react'
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';

const CheckboxSection = ({ }) => {
    const [shipping, setShipping] = useState(false);
    const [discount, setDiscount] = useState(false);
    const [options, setOptions] = useState([]);
    const [error, setError] = useState(null);

    const onChange = (e) => {
        error && setError(null);
        setShipping(e.target.checked);
    }

    return (
        <section id="input">
            <div className="row">
                <div className="col-6">

                    {/* Single checkbox with useState */}
                    <Checkbox checked={discount} setValue={setDiscount}>Discount</Checkbox>

                    {/* Single checkbox with custom onChange */}
                    <Checkbox checked={shipping} onChange={onChange}>Shipping</Checkbox>
  
                    {/* Checkbox group handling an array */}
                    <Checkbox.Group values={options} setValues={setOptions} error={error}>
                        <Checkbox>First</Checkbox>
                        <Checkbox>Second</Checkbox>
                        <Checkbox>Third</Checkbox>
                    </Checkbox.Group>

                    {/* Checkboxes with different values & labels  */}
                    <Checkbox.Group values={options} setValues={setOptions} error={error}>
                        <Checkbox value="1">First</Checkbox>
                        <Checkbox value="2">Second</Checkbox>
                        <Checkbox value="3">Third</Checkbox>
                    </Checkbox.Group>
                    
                    <Button onClick={() => setError('Error is set')}>
                        Cause Error
                    </Button>

                    <p>Values:</p>
                    <p style={{ color: 'grey' }}>Shipping: <span style={{ color: 'black' }}>{shipping ? 'true' : 'false'}</span> </p>
                    <p style={{ color: 'grey' }}>Discount: <span style={{ color: 'black' }}> {discount ? 'true' : 'false'}</span></p>
                    <p style={{ color: 'grey' }}>options: <span style={{ color: 'black' }}>{options.length ? options.map(o => o + ' ') : '[]'}</span></p>
                    

                    {/* Value will always be a string */}
                    {/* If value needs to be number, check with regex and convert to number */}
                    {/* e.target.value.match(/^-?\d+\.?\d*$/) ? Number(e.target.value) : e.target.value; */}
                </div>
            </div>
        </section>
    )
}

export default CheckboxSection;