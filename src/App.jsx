import React from 'react';
import { useState } from 'react';
import Animals from './Animals';
import './App.css'


const getRandomAnimal = () => {
    const IntialAnimals = ["gator","dog","cow","horse","bird","cat"];
    const listAnimal = IntialAnimals[Math.floor(Math.random() * IntialAnimals.length)];
    return listAnimal;
}

function App () {

    const [animal,setAnimal] = useState([]);

    const handleClick = () => {
            setAnimal([...animal,getRandomAnimal()]);
    }

    // Map through the list of animals and add them to the props to pass it to the children

    const mapAnimals = animal.map((item,index) => <Animals key={index}type={item}/>)

    return (
        <div className = "app">
            <button onClick={handleClick}>Click Me!</button>
            <div className = "animals-list">{mapAnimals}</div>
        </div>
    );
}

export default App;