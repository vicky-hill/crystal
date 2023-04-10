import React, { useState } from 'react'
import Collapsed from '../components/elements/Collapsed'
import Button from '@/components/elements/Button'
import "../sass/main.scss"


export default {
    title: "Basic/Collapsed",
    component: Collapsed
}

const Template = ({ }) => {
    const [collapsed, setCollapsed] = useState(true);

    return <>
        <Button onClick={() => setCollapsed(!collapsed)}>Open Collapsed</Button>
        <Collapsed collapsed={collapsed}> Add any Content in here</Collapsed>
    </>
}

export const Default = Template.bind({})
Default.args = {
    variant: 'teal'
}
