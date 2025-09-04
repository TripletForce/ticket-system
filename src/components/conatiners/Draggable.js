import React, { useRef } from "react";
import './Containers.css'

export default function Draggable({children, className, returnToCenter=true}){
    let draggableDiv = useRef(null);

    let isMouseDown = false;
    let offsetX, offsetY;
    function onMouseMoveEvent(e) {
        if(!isMouseDown) return;
        draggableDiv.current.style.left = (e.clientX - offsetX) + 'px';
        draggableDiv.current.style.top = (e.clientY - offsetY) + 'px';
    }

    function onMouseDown(e){
        if (e.target.closest('.IgnoreDrag')) return;

        isMouseDown=true; 
        offsetX = e.clientX - draggableDiv.current.getBoundingClientRect().left;
        offsetY = e.clientY - draggableDiv.current.getBoundingClientRect().top;
        document.body.classList.add('drag');

        window.addEventListener('mousemove', onMouseMoveEvent);
        window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseUp(e){
        isMouseDown=false
        if(returnToCenter){
            draggableDiv.current.style.left = '0px';
            draggableDiv.current.style.top = '0px';
        }
        document.body.classList.remove('drag');

        window.removeEventListener('mousemove', onMouseMoveEvent);
        window.removeEventListener('mouseup', onMouseUp);
    }

    return <div 
        style={{position: "relative"}} 
        className={className}
        ref={draggableDiv}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMoveEvent}
    >
        {children}
    </div>
}