import React from 'react'
import List from '../elements/List';

const ListSection = ({ }) => {

    return (
        <section id="lists" className='w-3/5'>
            
            {/* Basic List */}
            <List>
                <List.Item>Featured</List.Item>
                <List.Item>Cras justo odio</List.Item>
                <List.Item>Dapibus ac facilisis in</List.Item>
                <List.Item>Vestibulum at eros</List.Item>
            </List>

            {/* List with Header */}
            <List header>
                <List.Item>Featured</List.Item>
                <List.Item>Cras justo odio</List.Item>
                <List.Item>Dapibus ac facilisis in</List.Item>
                <List.Item>Vestibulum at eros</List.Item>
            </List>

            {/* Horizontal List */}
            <List horizontal>
                <List.Item>Featured</List.Item>
                <List.Item>Cras justo odio</List.Item>
                <List.Item>Dapibus ac facilisis in</List.Item>
                <List.Item>Vestibulum at eros</List.Item>
            </List>

            {/* List with badges */}
            <List header>
                <List.Item>Featured</List.Item>
                <List.Item badge="17">Cras justo odio</List.Item>
                <List.Item badge="15">Dapibus ac facilisis in</List.Item>
                <List.Item badge="20">Vestibulum at eros</List.Item>
            </List>

        </section>
    )
}

export default ListSection;
