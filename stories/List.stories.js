import List from '@/components/elements/List'
import '../sass/main.scss'

export default {
    title: "Basic/Lists",
    component: List
}

const Template = ({ numberOfChildren, badge, ...args }) => {

    return (
        <List {...args}>
            {[...Array(numberOfChildren).keys()].map((child) => <List.Item badge={badge}>
                Content {child + 1}
            </List.Item>)}
        </List>
    )
}

export const BasicList = Template.bind({})
BasicList.args = {
    numberOfChildren: 5
}

export const withHeader = Template.bind({})
withHeader.args = {
    numberOfChildren: 5,
    header: true
}

export const withBadge = Template.bind({})
withBadge.args = {
    numberOfChildren: 5,
    badge: 15
}

export const horizontal = Template.bind({})
horizontal.args = {
    numberOfChildren: 5,
    horizontal: true
}

