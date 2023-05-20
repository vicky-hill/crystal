import React from 'react'

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
                        <input style={half} type='text' />
                        <input style={half} type='text' />
                        <input style={full} type='text' />
                        <input style={half} type='text' />
                        <input style={half} type='text' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TricksSection;
