/* eslint-disable */
import React, { useState } from 'react'
import Pagination from '../elements/Pagination'

const PaginationSection = ({ }) => {

    const [active, setActive] = useState(0);

    return (
        <section id="pagination">
            <Pagination active={active} setActive={setActive} pages={4} />
        </section>
    )
}

export default PaginationSection;
