import React from 'react'
import AccordionSection from '../sections/Accordion.section'
import AlertSection from '../sections/Alert.section'
import BreadcrumbsSection from '../sections/Breadcrumbs.section'
import ButtonSection from '../sections/Button.section'
import CardSection from '../sections/Card.section'
import ContextSection from '../sections/Context.section'
import FormSection from '../sections/Form.section'
import LoaderSection from '../sections/Loader.section'
import ModalSection from '../sections/Modal.section'
import PaginationSection from '../sections/Pagination.section'
import ProgressSection from '../sections/Progress.section'
import TabsSection from '../sections/Tabs.section'
import ToastSection from '../sections/Toast.section'
import CollapsedSection from '../sections/Collapsed.section'
import TricksSection from '../sections/Tricks.section'
import InputSection from '../sections/Input.section'
import CheckboxSection from '../sections/Checkbox.section'
import RadioSection from '../sections/Radio.section'
import SelectSection from '../sections/Select.section'
import ListSection from '../sections/List.section'
import SidenavSection from '../sections/Sidenav.section'
import Navbar from '../elements/Navbar'


const Basic = ({ }) => {

    return (
        <>
            <Navbar />
            <div className="container mt-36">

                <SidenavSection />
                <ListSection />
                <FormSection />
                <ButtonSection />
                <ProgressSection />
                <BreadcrumbsSection />
                <ModalSection />
                <LoaderSection />
                <PaginationSection />
                <ToastSection />
                <CollapsedSection />
                <AlertSection />
                <CardSection />
                <ContextSection />
                <TabsSection />
                <AccordionSection />
                <TricksSection />

                {/* Form Components */}
                <InputSection />
                <CheckboxSection />
                <RadioSection />
                <SelectSection />

            </div>
        </>

    )
}

export default Basic;
