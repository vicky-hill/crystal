import Card from '@/components/elements/Card';
import '../sass/main.scss';
import pink from '@/public/images/pink.png';
import book from '@/public/images/book.png';

export default {
    title: "Basic/Card",
    component: Card
}

const Template = ({ ...args }) => <div id="style--basic"><Card {...args} /></div>

export const CardWithHeader = Template.bind({})
CardWithHeader.args = {
    header: "Header",
    title: "Card Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithoutHeader = Template.bind({})
CardWithoutHeader.args = {
    title: "Card Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithImage = Template.bind({})
CardWithImage.args = {
    image: pink,
    title: "Card Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithHorizontalImage = Template.bind({})
CardWithHorizontalImage.args = {
    image: book,
    horizontal: true,
    title: "Card Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const WellCard = Template.bind({})
WellCard.args = {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithGlowingCorners = Template.bind({})
CardWithGlowingCorners.args = {
    glowing: true
}

