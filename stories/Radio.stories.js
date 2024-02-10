import Radio from '@/components/elements/form/Radio'
import React, { useState } from 'react'
import '../sass/main.scss'

export default {
    title: "Basic/Radio",
    component: Radio
}

const TemplateGroup = ({ numberOfChildren, ...args }) => {
    const [values, setValues] = useState();

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <Radio.Group {...args} onChange={onChange}>
            {[...Array(numberOfChildren).keys()].map((child) => <Radio value={`${child + 1}`}> Radio {child + 1}</Radio>)}
        </Radio.Group>
    )
}

const Template = ({ numberOfChildren, ...args }) => {
    const [values, setValues] = useState();

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <Radio.Group {...args}>
            {[...Array(numberOfChildren).keys()].map((child) => <Radio onChange={onChange} value={`${child + 1}`}> Radio {child + 1}</Radio>)}
        </Radio.Group>
    )
}

 
export const VerticalGroup = TemplateGroup.bind({})
VerticalGroup.args = {
    numberOfChildren: 3,
    name: 'editor',
    label: 'Horizontal Radio Group'
}

export const HorizontalGroup = TemplateGroup.bind({})
HorizontalGroup.args = {
    numberOfChildren: 3,
    horizontal: true,
    name: 'editor',
    label: 'Horizontal Radio Group'
}

export const DisabledGroup = TemplateGroup.bind({})
DisabledGroup.args = {
    numberOfChildren: 3,
    disabled: true,
    name: 'editor',
    label: 'Horizontal Radio Group'
}

export const InvalidGroup = TemplateGroup.bind({})
InvalidGroup.args = {
    numberOfChildren: 3,
    horizontal: true,
    name: 'editor',
    label: 'Horizontal Radio Group',
    error: 'Please select an editor'
}

export const SingleRadio = Template.bind({})
SingleRadio.args = {
    name: 'editor',
    label: 'Single Radio',
    onChange: (e) => console.log(e.target.value)
}

export const DisabledRadio = Template.bind({})
DisabledRadio.args = {
    name: 'editor',
    label: 'Single Radio',
    disabled: true,
    onChange: (e) => console.log(e.target.value)
}





