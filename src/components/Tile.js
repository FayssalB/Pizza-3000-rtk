import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Tile = ({name, description, icon, bgColor, action}) => {
  return (
    <div className='' onClick={action} style={{backgroundColor: bgColor}}>
        <div className=''>
            <FontAwesomeIcon icon={icon}/>
        </div>
        <div className=''>
            <h2>fghfg</h2>
        </div>
    </div>
  )
}

export default Tile