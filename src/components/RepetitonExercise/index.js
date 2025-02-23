//create a funcitonal component for the repetition screen
//include useState
//call exercise items from list

//for duration, include a reps counter that can be reset


//counter function code referenced from Week-6 PowerPoint, slides 3-4
import React, { useState } from 'react';



function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(prev => prev + 1);
    };

    const resetButton = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Reps: {count}</p>
            <button onClick={addOne}>Add Rep</button>
            <button onClick={resetButton}>Reset</button>
        </div>
    );
}

//rep functional component
function RepetitionComponent(exerciseItems) {
    return (
        <div>
            <h1>{exerciseItems.exerciseName}</h1>
            <Counter />
        </div>
    );
}

export default RepetitionComponent;
