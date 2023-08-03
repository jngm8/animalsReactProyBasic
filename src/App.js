import { useState } from "react";

import AnimalShow from './AnimalsShow';


const getRandomAnimal = () => {

    const animals = ["dog", "cat","horse","cow","horse","gator"];

    return animals[Math.floor(Math.random()*animals.length)];
}

// Here for future projects, we only call the parent componenst and the routing wuth the routes
function App(){

    const [animals,setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals(
            [...animals,getRandomAnimal()] // List i had before flattended plus the new animal 
        );
    }

    const RenderedAnimals = animals.map((item,index) => <AnimalShow type= {item} key = {index}/>);

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
            <div>{RenderedAnimals}</div>
        </div>
    );
}

export default App;