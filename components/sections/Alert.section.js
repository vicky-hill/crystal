import React, { useState } from 'react'
import Alert from '../elements/Alert'
import Button from '../elements/Button'

const AlertSection = () => {

    const [alert, setAlert] = useState('This is  a primary alert');

    return (
        <section id="alert">
            <div className="row">
                <div className="col-6">
                    <Alert message={alert} closeAlert={() => setAlert(null)} />
                    <Button onClick={() => setAlert('This is  a primary alert')}>Show alert</Button>
                </div>
            </div>
        </section>
    )
}

export default AlertSection;