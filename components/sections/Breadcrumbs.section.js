/* eslint-disable */
import React from 'react'
import Breadcrumbs from '../elements/Breadcrumbs'

const BreadcrumbsSection = () => {
    return (
        <section id="breadcrumbs">
            <Breadcrumbs separator='caret'>
                <Breadcrumbs.Item>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item>Media</Breadcrumbs.Item>
                <Breadcrumbs.Item>Photos</Breadcrumbs.Item>
                <Breadcrumbs.Item active>Nature</Breadcrumbs.Item>
            </Breadcrumbs>
        </section>
    )
}

export default BreadcrumbsSection;
