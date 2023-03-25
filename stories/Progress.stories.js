import Progress from '@/components/elements/Progress'
import '../sass/main.scss'

export default {
    title: "Basic/Progress",
    component: Progress
}

const Template = ({ ...args }) => <Progress {...args} />

export const Text = Template.bind({})
Text.args = {
    progress: 36
}

export const Small = Template.bind({})
Small.args = {
    progress: 36,
    small: true
}