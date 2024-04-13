'use client'

import Button from './Button'

export default function Tooltip({ }) {

    return (
        <div>
            <Button data-top data-tooltip="Lorem ipsum">
                Tooltip on top
            </Button>
            <Button data-bottom data-tooltip="Lorem ipsum">
                Tooltip on bottom
            </Button>
        </div>

    )
}