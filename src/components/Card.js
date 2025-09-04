import './Card.css'

import Arrow from './icon/Arrow.js'
import Delete from './icon/Delete.js';
import Tree from './icon/Tree.js'
import Settings from './icon/Settings.js'

import Draggable from './conatiners/Draggable.js';

export default function Card({title, description}) {
  return <Draggable className="Card">
    <div className='CardHeader'>
      <span className='first'>{title}</span>
      <div className='middle'>
      </div>
      <div className='last'>
        <Settings />
        <Tree />
        <Arrow />
        <Delete />
      </div>
    </div>

    <div className='CardBody'>
      <hr></hr>
      <p>{description}</p>
    </div>
  </Draggable>
}