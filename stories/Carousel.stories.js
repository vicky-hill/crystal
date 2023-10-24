import Carousel from '@/components/elements/Carousel'
import "../sass/main.scss"
import image1 from '@/public/images/slide-1.jpg'
import image2 from '@/public/images/slide-2.jpg'
import image3 from '@/public/images/slide-3.jpg'

const images = [image1, image2, image3]

export default {
    title: "Basic/Carousel",
    component: Carousel
}

const Template = ({ ...args }) => <Carousel images={images} {...args} />


export const Default = Template.bind({})
Default.args = {}