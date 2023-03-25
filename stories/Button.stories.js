import Button from '../components/elements/Button'
import "../styles/main.scss"

export default {
    title: "Basic/Button",
    component: Button,
    argTypes: {
        buttonLabel: { type: "string", defaultValue: 'Button' }
    }
}

const Template = ({ buttonLabel, ...args }) => <div><Button {...args}>{ buttonLabel }</Button></div>

export const Primary = Template.bind({})
Primary.args = {
    variant: 'teal',
    buttonLabel: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'regular',
    variant: 'grey',
    buttonLabel: 'Secondary Button'
}

export const Outline = Template.bind({})
Outline.args = {
    size: 'regular',
    variant: 'teal',
    buttonLabel: 'Outline Button',
    outline: true
}

export const Round = Template.bind({})
Round.args = {
    size: 'regular',
    variant: 'teal',
    buttonLabel: 'Round Button',
    round: true
}

export const Loading = Template.bind({})
Loading.args = {
    size: 'regular',
    variant: 'teal',
    loading: true,
    buttonLabel: 'Loading Button'
}