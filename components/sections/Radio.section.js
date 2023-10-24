import React, { useState } from 'react'
import Radio from '../elements/Radio'

const RadioSection = ({ }) => {
    const [phone, setPhone] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [editor, setEditor] = useState(null);
    const [values, setValues] = useState({
        city: null
    });

    const onChange = (e) => {
        setEditor(e.target.value);
    }

    return (
        <section id="form" className='w-full lg:w-1/2'>

            {/* Single Radio button with useState */}
            <Radio checked={darkMode} setValue={setDarkMode}>Dark Mode</Radio>


            {/* Radio group */}
            <Radio.Group value={phone} setValue={setPhone} >
                <Radio>iPhone</Radio>
                <Radio>Samsung</Radio>
                <Radio>Motorola</Radio>
            </Radio.Group>


            {/* Radio group with custom onChange */}
            <Radio.Group value={editor} onChange={onChange} >
                <Radio value='visual'>Visual Studio</Radio>
                <Radio value='atom'>Atom</Radio>
                <Radio value='sublime'>Sublime</Radio>
            </Radio.Group>


            {/* Radio group with label and values object */}
            <Radio.Group label="Cities" name="city" values={values} setValues={setValues} >
                <Radio value="paris">Paris</Radio>
                <Radio>Venice</Radio>
                <Radio>London</Radio>
            </Radio.Group>

            <p>Values:</p>
            <p style={{ color: 'grey' }}> Dark Mode: <span style={{ color: 'black' }}>{darkMode ? 'true' : 'false'}</span> </p>
            <p style={{ color: 'grey' }}>Editor: <span style={{ color: 'black' }}> {editor ? editor : 'null'}</span></p>
            <p style={{ color: 'grey' }}>Phone: <span style={{ color: 'black' }}>{phone ? phone : 'null'}</span></p>
            <p style={{ color: 'grey' }}>City: <span style={{ color: 'black' }}>{values.city ? values.city : 'null'}</span></p>

        </section>
    )
}

export default RadioSection;
