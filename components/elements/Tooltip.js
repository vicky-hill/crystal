'use client'

import Button from './Button'

export default function Tooltip({ }) {

    return (
        <div>
            <div className='p-2 w-max mb-4 bg-rose-200 rounded-md' data-top data-tooltip="Lorem ipsum">
                Tooltip on top
            </div>
           
            <Button data-tooltip-bottom data-tooltip="Lorem ipsum">
                Tooltip on bottom
            </Button>
        </div>
    )
}