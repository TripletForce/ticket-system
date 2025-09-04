import { MdDelete } from "react-icons/md";

export default function Delete({onClick}){
    return <MdDelete className='Clickable IgnoreDrag' onClick={e => {
        if(window.confirm('Do you want to delete?') && onClick) onClick(e);
    }} />
}