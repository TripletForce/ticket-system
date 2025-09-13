import React, { useRef } from "react";
import './Containers.css'

export default function Draggable({children, className, returnToCenter=true, onDragStart=e=>{}}){
    let draggableDiv = useRef(null);

    let isMouseDown = false;
    let offsetX, offsetY;
    function onMouseMoveEvent(e) {
        if(!isMouseDown) return;
        draggableDiv.current.style.transform = `translate(${(e.clientX - offsetX)}px, ${(e.clientY - offsetY)}px)`;
    }

    function onMouseDown(e){
        if (e.target.closest('.IgnoreDrag')) return;
        onDragStart(e);

        isMouseDown=true; 
        offsetX = e.clientX;
        offsetY = e.clientY;
        document.body.classList.add('drag');
        e.target.closest('.Draggable').classList.add('bringForward');
        
        window.addEventListener('mousemove', onMouseMoveEvent);
        window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseUp(e){
        isMouseDown=false
        if(returnToCenter) draggableDiv.current.style.transform = `translate(0, 0)`;
        
        document.body.classList.remove('drag');
        e.target.closest('.Draggable').classList.remove('bringForward');

        window.removeEventListener('mousemove', onMouseMoveEvent);
        window.removeEventListener('mouseup', onMouseUp);
    }

    return <div 
            style={{position: "relative"}} 
            className={className+" Draggable"}
            ref={draggableDiv}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMoveEvent}
        >
            {children}
        </div>
}