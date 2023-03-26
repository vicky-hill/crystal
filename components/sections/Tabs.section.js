/* eslint-disable */
import React, { useState } from 'react'
import Tabs from '../elements/Tabs'

const TabsSection = ({ }) => {
    const [active, setActive] = useState(0);

    return (
        <section id="tabs">
            <Tabs active={active} setActive={setActive}>
                <Tabs.Item title="Tab No 1">
                    Content of Tab 1 <br />
                </Tabs.Item>

                <Tabs.Item title="Tab No 2">
                    Content of Tab 2
                </Tabs.Item>

                <Tabs.Item title="Tab No 3">
                    Content of Tab 3
                </Tabs.Item>
            </Tabs>
        </section>
    )
}

export default TabsSection;
