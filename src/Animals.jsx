import React, { useState } from 'react';
import bird from './svg/bird.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import cat from './svg/cat.svg';
import heart from './svg/heart.svg';

import './Animals.css';

const animalsObject = {
    bird,
    dog,
    horse,
    cow,
    gator,
    cat
}
function Animals({type}) {

    const [click,setClick] = useState(0);

    const handleClick = () => {
        setClick(click + 1)
    }
    return(
        <div className = "animals-show" onClick={handleClick}>
            <img  className = "animals" alt="" src={animalsObject[type]}></img>
            <img  className = "heart" alt="" src={heart} style={{width: 10 + 10*click + 'px'}}></img>
        </div>
    );
}


export default Animals;