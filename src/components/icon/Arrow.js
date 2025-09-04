import { useState } from "react";
import { GrFormDown, GrFormUp } from "react-icons/gr";

export default function Arrow({onClick}){
    let [isUp, setIsUp] = useState(true);

    let onClickEvent = e => {
        setIsUp(!isUp);
        if(onClick) onClick(e);
    }

    return isUp ? <GrFormUp className='Clickable IgnoreDrag' onClick={onClickEvent} /> : 
        <GrFormDown className='Clickable IgnoreDrag' onClick={onClickEvent} />
}