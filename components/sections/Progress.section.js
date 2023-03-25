/* eslint-disable */
import React, { useState } from 'react'
import Button from '../elements/Button'
import Progress from '../elements/Progress'

const ProgressSection = () => {
    const [progress, setProgress] = useState(37);

    const addFive = () => {
        setProgress(progress => progress + 5)
    }
    
    return (
        <section id="progress">
            <Button onClick={addFive}>Click to progress</Button>
            <Progress progress={progress} />
            <Progress small progress={progress} />
        </section>
    )
}


export default ProgressSection;
