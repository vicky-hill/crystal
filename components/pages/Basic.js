import React from 'react'
import AlertSection from '../sections/Alert.section'
import BreadcrumbsSection from '../sections/Breadcrumbs.section'
import ButtonSection from '../sections/Button.section'
import CardSection from '../sections/Card.section'
import LoaderSection from '../sections/Loader.section'
import ModalSection from '../sections/Modal.section'
import PaginationSection from '../sections/Pagination.section'
import ProgressSection from '../sections/Progress.section'
import ToastSection from '../sections/Toast.section'

const Basic = ({ }) => {

    return (
        <div className="container main">
            <ButtonSection />
            <ProgressSection />
            <BreadcrumbsSection />
            <ModalSection />
            <LoaderSection />
            <PaginationSection />
            <ToastSection />
            <AlertSection />
            <CardSection />
        </div>
    )
}

export default Basic;
