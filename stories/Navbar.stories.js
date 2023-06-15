import Navbar from '@/components/elements/Navbar'
import "../sass/main.scss"

export default {
    title: "Basic/Navbar",
    component: Navbar
}

const Template = ({ ...args }) => <Navbar {...args} />


export const Default = Template.bind({})
Default.args = {}