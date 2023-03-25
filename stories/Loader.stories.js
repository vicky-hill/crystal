import Loader from '@/components/elements/Loader';
import '../sass/main.scss';

export default {
    title: "Basic/Loader",
    component: Loader
}

const Template = ({ ...args }) => <Loader {...args} />

export const Spinner = Template.bind({})
Spinner.args = {
    type: 'spinner'
}

export const Dots = Template.bind({})
Spinner.args = {
    type: 'dots'
}