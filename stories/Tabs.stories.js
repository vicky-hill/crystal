import Tabs from '@/components/elements/Tabs';
import React, { useState } from 'react'
import '../sass/main.scss';

export default {
    title: "Basic/Tabs",
    component: Tabs,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 3 }
    }
}

const Template = ({ numberOfChildren, ...args }) => {
    const [active, setActive] = useState(0);
    
    return (
        <Tabs active={active} setActive={setActive} {...args}>
            {[...Array(numberOfChildren).keys()].map((child) => <Tabs.Item title={`Tab ${child + 1}`}>Content {child + 1}</Tabs.Item>)}
        </Tabs>
    )
}

export const Default = Template.bind({})
Default.args = {}



