/* eslint-disable */ 'use strict'
import React, { useState, useRef } from 'react'

const DragnDrop = ({ data }) => {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);
    
    const dragItem = useRef();
    const dragNode = useRef();

    const getCurrentTarget = (e) => {
        if(e.toElement) {
            return e.toElement
        } else if(e.currentTarget) {
            return e.currentTarget
        } else if(e.srcElement) {
            return e.srcElement
        } else {
            return null;
        }
    }
     
    const handleDragStart = (e, params) => {
        dragItem.current = params;
        dragNode.current = e.target;

        e.dataTransfer.effectAllowed = 'move';
        
        const target = getCurrentTarget(e);
        target.style.cursor = 'grabbing'

        dragNode.current.addEventListener('dragend', handleDragEnd);
        
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    const handleDragEnter = (e, params ) => {
        const currentItem = dragItem.current;
        

        if(e.target !== dragNode.current) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.groupIndex].items.splice(params.itemIndex, 0, newList[currentItem.groupIndex].items.splice(currentItem.itemIndex, 1)[0]);
                dragItem.current = params;
                return newList;
            })
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    const handleDragEnd = (e) => {
        setDragging(false);

        const target = getCurrentTarget(e);
        target.style.cursor = 'default'

        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }


    const getStyles = (params) => {
        const currentItem = dragItem.current;
        
        if(currentItem.groupIndex === params.groupIndex && currentItem.itemIndex === params.itemIndex) {
            return 'current drag-n-drop__item'
        }
        return 'drag-n-drop__item'
    }

    return (
        <div className="drag-n-drop mb-10">
            {
                list && list.map((group, groupIndex) => (
                    <div 
                        key={groupIndex} 
                        className="drag-n-drop__group"
                        onDragEnter={dragging && !group.items.length ? (e) => handleDragEnter(e, {groupIndex, itemIndex: 0})  : null}
                        onDragOver={(e) => handleDragOver(e)}
                    >
                        <div className="drag-n-drop__title">{group.title}</div>
                        {
                            group.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    draggable 
                                    onDragStart={(e) => handleDragStart(e, { groupIndex, itemIndex })}
                                    onDragEnter={dragging ? (e) => handleDragEnter(e, {groupIndex, itemIndex}) : null }
                                    onDragOver={(e) => handleDragOver(e)}
                                    className={dragging ? getStyles({groupIndex, itemIndex}) : 'drag-n-drop__item'}

                                >
                                    <p>{item}</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default DragnDrop;
