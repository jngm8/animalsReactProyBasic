import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

import { useState } from 'react';
import './AnimalsShow.css';

const mapOfAnimals = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}


function AnimalShow({ type }) {

    const [click, setClick] = useState(0);

    const handleClick = () => {
        setClick(click + 1);
    }

    return (
        <div className="animals-show" onClick={handleClick}>
            <img className='animal' alt="" src={mapOfAnimals[type]}></img>
            <img 
                className='heart'
                alt=""
                src={heart}
                style={{ width: 10 + 10 * click + 'px' }}
            >
            </img>
        </div>
    )
}


export default AnimalShow;