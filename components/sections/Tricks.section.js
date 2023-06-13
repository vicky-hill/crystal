import React from 'react'
import Input from '../elements/Input'

const TricksSection = ({ }) => {

    const row = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }

    const half = {
        width: '49%',
        marginBottom: 10
    }

    const full = {
        width: '100%',
        marginBottom: 10
    }

    return (
        <>

            {/* Easy half and full columns with flex */}

            <h3 className='mb-5'>Half and Full columns with Flex</h3>
            <div className="row">
                <div className="col-6">
                    <div style={row}>
                        <Input style={half}  />
                        <Input style={half}  />
                        <Input style={full}  />
                        <Input style={half}  />
                        <Input style={half}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TricksSection;
