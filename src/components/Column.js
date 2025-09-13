import './Column.css'
import Card from './Card';

export default function Column(){
    return <div className="Column">
        <Card number="1441" description="This is my description!" />
        <Card number="1442" description="This is my description!" />
        <Card number="1443" description="This is my description!" />
    </div>
}