/* eslint-disable */ 'use strict'
import React, { useState } from 'react'
import Accordion from '../elements/Accordion'
import Button from '../elements/Button';

const AccordionSection = ({ }) => {
    const [active, setActive] = useState([0, 1, 2]);

    return (
        <section id="accordion" className="w-full lg:w-1/2">
            <Accordion active={active} setActive={setActive}>
                <Accordion.Item title="Accordion 1">
                    This is the first one <br />
                    kajsdfkas
                    kasdjf
                </Accordion.Item>

                <Accordion.Item title="Accordion 2">
                    This is the second one
                </Accordion.Item >

                <Accordion.Item title="Accordion 3">
                    This is the third one
                </Accordion.Item>
            </Accordion>
            <Button onClick={() => setActive(2)}>Set 3 active</Button>
        </section>
    )
}

export default AccordionSection;
