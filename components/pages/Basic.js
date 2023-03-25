import React from 'react'
import AlertSection from '../sections/Alert.section'
import ButtonSection from '../sections/Button.section'
import ProgressSection from '../sections/Progress.section'

const Basic = ({ }) => {

    return (
        <div className="container main">
            <ButtonSection />
            <ProgressSection />
            <AlertSection />
            
        </div>
    )
}

export default Basic;
