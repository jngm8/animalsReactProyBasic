import { useState } from "react";

import AnimalShow from './AnimalsShow';

import './App.css';


const getRandomAnimal = () => {

    const animals = ["dog", "cat","horse","cow","horse","gator"];

    return animals[Math.floor(Math.random()*animals.length)];
}

// Here for future projects, we only call the parent componenst and the routing wuth the routes
function App(){

    const [animals,setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals(
            [...animals,getRandomAnimal()] // List I had before flattended plus the new animal 
        );
    }

    const RenderedAnimals = animals.map((item,index) => <AnimalShow type= {item} key = {index}/>);

    return (
        <div className="app">
            <button onClick={handleClick}>Add animal</button>
            <div className="animals-list">{RenderedAnimals}</div>
        </div>
    );
}

export default App;