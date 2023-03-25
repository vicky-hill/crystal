import React from 'react'
import AlertSection from '../sections/Alert.section'
import BreadcrumbsSection from '../sections/Breadcrumbs.section'
import ButtonSection from '../sections/Button.section'
import LoaderSection from '../sections/Loader.section'
import ModalSection from '../sections/Modal.section'
import ProgressSection from '../sections/Progress.section'

const Basic = ({ }) => {

    return (
        <div className="container main">
            <ButtonSection />
            <ProgressSection />
            <AlertSection />
            <BreadcrumbsSection />
            <ModalSection />
            <LoaderSection />
        </div>
    )
}

export default Basic;
