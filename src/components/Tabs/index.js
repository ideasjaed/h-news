import { useState } from 'react';
import './style.scss'
import Card from '../Card'

const Tabs = () => {
    const [active, setActive] = useState(1);
    const handleClick = (index) => setActive(index);
    const checkActive = (index, className) => active === index ? className : "";
  return (
    <div>
        <div className="tabs">
            <button className={`tab ${checkActive(1, "active")}`}
                onClick={() => handleClick(1)}
            >
                All
            </button>
            <button className={`tab ${checkActive(2, "active")}`}
                onClick={() => handleClick(2)}
            >
                My Faves
            </button>
        </div>
        <div className="panels">
            <div className={`panel ${checkActive(1, "active")}`}>
                <Card />
            </div>
            <div className={`panel ${checkActive(2, "active")}`}>
                <p>dos</p>
            </div>
        </div>
    </div>
  )
}

export default Tabs;