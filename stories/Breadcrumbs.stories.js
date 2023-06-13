import Breadcrumbs from '@/components/elements/Breadcrumbs';
import '../sass/main.scss';

export default {
    title: "Basic/Breadcrumbs",
    component: Breadcrumbs,
}

const Template = ({ numberOfChildren, ...args }) => (
    <Breadcrumbs {...args}>
        {[...Array(numberOfChildren).keys()].map((child, i, a) => <Breadcrumbs.Item active={i === a.length - 1}>Link {child + 1}</Breadcrumbs.Item>)}
    </Breadcrumbs>
)

export const Slash = Template.bind({})
Slash.args = {
    numberOfChildren: 3,
}

export const Caret = Template.bind({})
Caret.args = {
    numberOfChildren: 3,
    separator: 'caret'
}



