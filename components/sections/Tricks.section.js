import React from 'react'
import Input from '../elements/Input'
import image1 from '@/public/images/slide-1.jpg'

const TricksSection = ({ }) => {

    const row = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }

    const half = {
        width: '49%',
        marginBottom: 10
    }

    const full = {
        width: '100%',
        marginBottom: 10
    }

    return (
        <section className='w-full lg:w-1/2'>

            {/* Easy half and full columns with flex */}

            <h3 className='mb-5'>Half and Full columns with Flex</h3>
            <div style={row}>
                <Input style={half} />
                <Input style={half} />
                <Input style={full} />
                <Input style={half} />
                <Input style={half} />
            </div>

            {/* Zoom image on hover */}
            <div className="img__box mt-10">
                <img src={image1.src} alt="" />
            </div>
        </section>
    )
}

export default TricksSection;
