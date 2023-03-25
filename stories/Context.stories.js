import Context from '@/components/elements/Context'
import React from 'react'
import '../sass/main.scss'

export default {
    title: "Basic/Context",
    component: Context
}

const Template = ({ ...args }) => {

    return (
        <div id="style--basic">
            <Context>
                <p className='my-3'>Right click to open Context</p>
            </Context>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {

}
