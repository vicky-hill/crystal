/* eslint-disable */
import React from 'react'
import pink from '@/public/images/pink.png'
import book from '@/public/images/book.png'
import Card from '../elements/Card'

const CardSection = () => {

    return (
        <section id="cards">
            <div className="w-full lg:w-1/4">

                {/* Card with Header */}
                <Card
                    header="Header"
                    title="Card Title"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ad architecto impedit rem!"
                />
            </div>

            <div className="w-full lg:w-1/4">

                {/* Card without header */}
                <Card
                    title="Card Title"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias?"
                />
            </div>

            <div className="w-full lg:w-1/4">

                {/* Card with image */}
                <Card
                    image={pink}
                    title="Card Title"
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
            </div>

            <div className="w-full lg:w-1/4">

                {/* Well Card */}
                <Card>Some Text</Card>
            </div>

            <div className="w-full lg:w-1/4">

                {/* Horizontal card with image */}
                <Card
                    image={book}
                    title="Card Title"
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    horizontal
                />
            </div>

            {/* Card with glowing corners */}
            {/* <Card glowing /> */}

        </section>

    )
}



export default CardSection;
