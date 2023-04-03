import React, { useState, useEffect } from 'react'
import Radio from '../elements/Radio'

const RadioSection = ({ }) => {
    const [values, setValues] = useState({
        title: '',
        framework: '',
        editors: ''
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(() => {
    console.log(values)
    }, [values])

    return (
        <section id="form">
            <div className="row">
                <div className="col-6">

                    {/* Horizontal radio buttons */}
                    <Radio.Group name="phones" horizontal onChange={(e) => console.log(e.target.value)}>
                        <Radio value='iphone'>iPhone</Radio>
                        <Radio value='samsung'>Samsung</Radio>
                        <Radio value='motorola'>Motorola</Radio>
                    </Radio.Group>

                    {/* Vertical radio buttons */}
                    <Radio.Group name="cars" onChange={(e) => console.log(e.target.value)}>
                        <Radio value='toyota'>Toyota</Radio>
                        <Radio value='nissan'>Nissan</Radio>
                        <Radio value='mazda'>Mazda</Radio>
                    </Radio.Group>
                    
                    {/* Radio group with values */}
                    {/* Has to either be passed setValues or onChange */}
                    <Radio.Group name="editors" horizontal values={values} onChange={onChange} >
                        <Radio value='visual'>Visual Studio</Radio>
                        <Radio value='atom'>Atom</Radio>
                        <Radio value='sublime'>Sublime</Radio>
                    </Radio.Group>

                    {/* Radio group without values */}
                    <Radio.Group name="german" horizontal onChange={(e) => console.log(e.target.value)}>
                        <Radio value='bmw'>BMW</Radio>
                        <Radio value='mercedes'>Mercedes</Radio>
                        <Radio value='audi'>Audi</Radio>
                    </Radio.Group>

                    {/* Radio group with label */}
                    <Radio.Group name="german" label="Cities" horizontal onChange={(e) => console.log(e.target.value)}>
                        <Radio value='bmw'>Paris</Radio>
                        <Radio value='mercedes'>Venice</Radio>
                        <Radio value='audi'>London</Radio>
                    </Radio.Group>

                    {/* Single Radio button */}
                    <Radio value='bmw'>BMW</Radio>

                </div>
            </div>
        </section>
    )
}

export default RadioSection;
