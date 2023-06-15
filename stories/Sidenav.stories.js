import Sidenav from '@/components/elements/Sidenav'
import "../sass/main.scss"

export default {
    title: "Basic/Sidenav",
    component: Sidenav
}

const Template = ({ ...args }) => <Sidenav {...args} />


export const Default = Template.bind({})
Default.args = {}