import image1 from '@/public/images/slide-1.jpg'
import image2 from '@/public/images/slide-2.jpg'
import image3 from '@/public/images/slide-3.jpg'
import Carousel from '../elements/Carousel'
const images = [image1, image2, image3]

const CarouselSection = ({ }) => {

    return (
        <section id="carousel" className='w-full lg:w-1/2'>
            <Carousel images={images} />
        </section>
    )
}

export default CarouselSection;
