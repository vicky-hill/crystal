import Alert from '@/components/elements/Alert'
import "../sass/main.scss"

export default {
    title: "Basic/Alert",
    component: Alert
}

const Template = ({ ...args }) => <Alert {...args} />


export const Primary = Template.bind({})
Primary.args = {
    message: 'This is a primary alert',
    closeAlert: () => console.log('close alert function')
}

export const Secondary = Template.bind({})
Secondary.args = {
    message: 'This is a secondary alert',
    variant: 'secondary',
    closeAlert: () => console.log('close alert function')
}

export const Success = Template.bind({})
Success.args = {
    message: 'This is a success alert',
    variant: 'success',
    closeAlert: () => console.log('close alert function')
}

export const Warning = Template.bind({})
Warning.args = {
    message: 'This is a warning alert',
    variant: 'warning',
    closeAlert: () => console.log('close alert function')
}

export const Error = Template.bind({})
Error.args = {
    message: 'This is a error alert',
    variant: 'error',
    closeAlert: () => console.log('close alert function')
}

export const Info = Template.bind({})
Info.args = {
    message: 'This is a info alert',
    variant: 'info',
    closeAlert: () => console.log('close alert function')
}