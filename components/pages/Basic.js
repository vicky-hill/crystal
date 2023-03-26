import React from 'react'
import AccordionSection from '../sections/Accordion.section'
import AlertSection from '../sections/Alert.section'
import BreadcrumbsSection from '../sections/Breadcrumbs.section'
import ButtonSection from '../sections/Button.section'
import CardSection from '../sections/Card.section'
import ContextSection from '../sections/Context.section'
import LoaderSection from '../sections/Loader.section'
import ModalSection from '../sections/Modal.section'
import PaginationSection from '../sections/Pagination.section'
import ProgressSection from '../sections/Progress.section'
import TabsSection from '../sections/Tabs.section'
import ToastSection from '../sections/Toast.section'

const Basic = ({ }) => {

    return (
        <div className="container main">
            <TabsSection />
            <AccordionSection />
            <ButtonSection />
            <ProgressSection />
            <BreadcrumbsSection />
            <ModalSection />
            <LoaderSection />
            <PaginationSection />
            <ToastSection />
            <AlertSection />
            <CardSection />
            <ContextSection />
        </div>
    )
}

export default Basic;
