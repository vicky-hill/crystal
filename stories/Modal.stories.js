import Modal from '@/components/elements/Modal'
import React, { useState } from 'react'
import '../sass/main.scss'

export default {
    title: "Basic/Modal",
    component: Modal
}

const Template = ({ ...args }) => {
    const [modal, setModal] = useState(true)

    return (
        <Modal open={modal} close={() => setModal(false)} {...args}>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates, nulla consequatur doloremque nam voluptatibus. Repellat distinctio maxime accusamus culpa!</p>
        </Modal>
    )
}

export const Default = Template.bind({})
Default.args = {
    title: 'Modal'
}
