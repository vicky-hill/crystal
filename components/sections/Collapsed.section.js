import React, { useState } from 'react'
import Button from '../elements/Button';
import Collapsed from '../elements/Collapse';
import Card from '../elements/Card';

const CollapsedSection = ({ }) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <section id="collapse">
            <div className="row">
                <div className="col-4">
                    <Button onClick={() => setCollapsed(!collapsed)}>Open Collapse</Button>
                   
                    <Collapsed collapsed={collapsed}>

                    <Card
                        title="Card Title"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias?"
                    />

                    </Collapsed>

                </div>
            </div>
        </section>
    )
}

export default CollapsedSection;
