/* eslint-disable */ 'use strict'
import React from 'react'
import Context from '../elements/Context'

const ContextSection = () => {
    return (
        <div className="mb-10">
            <Context>
                <div>Right click here for context menu</div>
            </Context>
        </div>
    )
}

export default ContextSection;
