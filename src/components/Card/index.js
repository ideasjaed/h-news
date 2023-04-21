import React from 'react'
import getIcon from '../Icon/index';
import './style.scss';

const index = () => {
  return (
    <div className="container-card">
        <div className="contend-side">
            <div className="time-post">
                {getIcon('time-icon')}
                <p>3 hours ago by author</p>
            </div>
            <p>Yes, React is taking over front-end development. The question is why.</p>
        </div>
        <div className="favorite-side">
            {getIcon('favorite-icon')}
        </div>
    </div>
  )
}

export default index