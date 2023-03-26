import Accordion from '@/components/elements/Accordion';
import React, { useState } from 'react'
import '../sass/main.scss';

export default {
    title: "Basic/Accordion",
    component: Accordion,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 3 }
    }
}

const Template = ({ numberOfChildren, ...args }) => {
    const [active, setActive] = useState();
    
    return (
        <Accordion active={active} setActive={setActive} {...args}>
            {[...Array(numberOfChildren).keys()].map((child) => <Accordion.Item title={`Accordion ${child + 1}`}>Content {child + 1}</Accordion.Item>)}
        </Accordion>
    )
}

export const Default = Template.bind({})
Default.args = {}



