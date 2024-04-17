import React, { useState } from 'react'
import Button from '../elements/Button'
import Form, { TextInput, DollarInput, Radio, Checkbox, Select, Option } from '../elements/form/Form'
import * as Yup from 'yup'
import Input from '../elements/form/Input'

const validationSchema = Yup.object({
    title: Yup.string().required('Please type something'),
    framework: Yup.string().required('Please select a framework'),
    editor: Yup.string().required('Please select an editor'),
    extensions: Yup.array().of(Yup.string()).min(1, 'Please select at least one'),
    amount: Yup.string().required('Please enter amount')
})

const FormSection = ({ }) => {
    const [values, setValues] = useState({
        title: '',
        framework: '',
        editor: '',
        extensions: [],
        amount: ''
    })


    const onSubmit = async () => {
        console.log('submit', values)
    }

    const onChange = (e) => {
        console.log('outside', values);
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <section id="form" className='w-full lg:w-1/2'>
          
            <Form
                validation={validationSchema}
                values={values}
                setValues={setValues}
                onSubmit={onSubmit}
            >
                <TextInput name="title" />

                <Select name="framework">
                    <Option>React</Option>
                    <Option>Angular</Option>
                    <Option>Vue</Option>
                </Select>

                <Radio.Group name="editor">
                    <Radio disabled>Visual Studio Code</Radio>
                    <Radio>Sublime</Radio>
                    <Radio>Atom</Radio>
                </Radio.Group>

                <Checkbox.Group name="extensions">
                    <Checkbox disabled>Prettier</Checkbox>
                    <Checkbox>ES7</Checkbox>
                    <Checkbox>Hop Light</Checkbox>
                </Checkbox.Group>

                <DollarInput name="amount" />

                <Button>Submit</Button>
            </Form>

            {/* Possible Checks */}
            {/* Are all required fields from validation represented as inputs in the the form? */}
            {/* Does the name the input exist in values? */}
            {/* Are Radios and Checkboxes direct children of their group? */}

        </section>
    )
}

export default FormSection;
