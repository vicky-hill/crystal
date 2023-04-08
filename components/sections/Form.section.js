import React, { useState } from 'react'
import Button from '../elements/Button'
import Form, { TextInput, DollarInput, Radio, Checkbox } from '../elements/Form2'
import * as Yup from 'yup'


const validationSchema = Yup.object({
    title: Yup.string().required('Please type something'),
    // framework: Yup.string().required('Please select a framework'),
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
        console.log('outside')
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <section id="form">
            <div className="row">
                <div className="col-6">
                    <Form
                        validation={validationSchema}
                        values={values}
                        setValues={setValues}
                        onSubmit={onSubmit}
                    >
                        <TextInput name="title" />

                        <Radio.Group name="editor">
                            <Radio value="visual">Visual Studio Code</Radio>
                            <Radio value="sublime">Sublime</Radio>
                            <Radio value="atom">Atom</Radio>
                        </Radio.Group>

                        <Checkbox.Group name="extensions">
                            <Checkbox value="prettier">Prettier</Checkbox>
                            <Checkbox value="es7">ES7</Checkbox>
                            <Checkbox value="hopLight">Hop Light</Checkbox>
                        </Checkbox.Group>

                        <DollarInput name="amount" />

                        <Button>Submit</Button>


                    </Form>


                    {/* Possible Checks */}
                    {/* Are all required fields from validation represented as inputs in the the form? */}
                    {/* Does the name the input exist in values? */}
                    {/* Are Radios and Checkboxes direct children of their group? */}


                    {/* <Form
                        validation={validationSchema}
                        values={values}
                        setValues={setValues}
                        onSubmit={onSubmit}
                    >
            

                        <Select name="framework">
                            <Option value="react">React</Option>
                            <Option value="angular">Angular</Option>
                            <Option value="vue">Vue</Option>
                        </Select>


                        <Checkbox.Group name="extensions">
                            <Checkbox value="prettier">Prettier</Checkbox>
                            <Checkbox value="es7">ES7</Checkbox>
                            <Checkbox value="hopLight">Hop Light</Checkbox>
                        </Checkbox.Group>

                        <Button>Submit</Button>
                    </Form> */}


                </div>
            </div>
        </section>
    )
}

export default FormSection;
