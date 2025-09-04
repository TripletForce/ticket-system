import './Card.css'

export default function Card({title, description, priority}) {
  return <div className="Card">
    <span>{title}</span>
    <hr></hr>
    <p>{description}</p>
  </div>
}