import Gallery from "../elements/Gallery"
import image1 from '@/public/images/slide-1.jpg'
import image2 from '@/public/images/slide-2.jpg'
import image3 from '@/public/images/slide-3.jpg'


const GallerySection = ({ }) => {
    const images = [image1,image2, image3]

    return (
        <section id="gallery" className='w-full lg:w-1/2'>
            <Gallery images={images} />
        </section>
    )
}

export default GallerySection;
