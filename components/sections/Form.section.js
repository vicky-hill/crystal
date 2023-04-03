import React, { useState } from 'react'
import Button from '../elements/Button'
import Form, { Select, TextInput, Option, Radio } from '../elements/Form'
import * as Yup from 'yup'


const validationSchema = Yup.object({
    title: Yup.string().required('Please type something'),
    framework: Yup.string().required('Please select a framework'),
    editor: Yup.string().required('Please select an editor')
})

const FormSection = ({ }) => {
    const [values, setValues] = useState({
        title: '',
        framework: '',
        editor: '',
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

                        <Select name="framework">
                            <Option value="react">React</Option>
                            <Option value="angular">Angular</Option>
                            <Option value="vue">Vue</Option>
                        </Select>

                        <Radio.Group name="editor" horizontal>
                            <Radio value="visual">Visual Studio Code</Radio>
                            <Radio value="sublime">Sublime</Radio>
                            <Radio value="atom">Atom</Radio>
                        </Radio.Group>

                        <Button>Submit</Button>

                    </Form>
                </div>
            </div>
        </section>
    )
}

export default FormSection;
