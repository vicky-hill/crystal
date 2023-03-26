import React, { useState } from 'react'
import Button from '../elements/Button';
import Form, { Select, TextInput } from '../elements/Form';

const FormSection = ({ }) => {
    const [values, setValues] = useState({
        title: '',
        framework: ''
    })

    const onChange = e => setValues({ ...values, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('submit', values)
    }

    return (
        <section id="form">
            <div className="row">
                <div className="col-6">
                    <Form values={values} onChange={onChange} onSubmit={onSubmit} >
                        <TextInput name="title" label="Title" />

                        <Select name="framework" label="Framework">
                            <Select.Option value="react" name="React" />
                            <Select.Option value="angular" name="Angular" />
                            <Select.Option value="vue" name="Vue" />
                        </Select>

                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default FormSection;
