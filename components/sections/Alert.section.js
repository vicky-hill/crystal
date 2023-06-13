/* eslint-disable */
import React, { useState } from 'react'
import Alert from '../elements/Alert'
import Button from '../elements/Button'

const AlertSection = () => {

    const [alert, setAlert] = useState('This is  a primary alert');

    return (
        <section id="alert" className="w-1/2">
            <Alert message={alert} closeAlert={() => setAlert(null)} />
            <Button onClick={() => setAlert('This is  a primary alert')}>Show alert</Button>
        </section>
    )
}

export default AlertSection;