//create a funcitonal component for the duration screen
//include useState
//call exercise items from list

//for duration, include a timer that can be reset

//code referenced from https://react.dev/reference/react/useRef
//timer function

import { useState, useRef } from 'react';

function Timer() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    //start timer
    function start() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    //stop timer
    function stop() {
        clearInterval(intervalRef.current);
    }
    //reset timer
    function reset() {
        clearInterval(intervalRef.current);
        setStartTime(null);
        setNow(null);
    }


    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = ((now - startTime) / 1000).toFixed(2);
    }

    //pad digits
    let paddedSeconds = secondsPassed.toString().padStart(5, '0');

    return (
        <>
            <p>Timer: {paddedSeconds}</p>
            <button onClick={start}>
                Start
            </button>
            <button onClick={stop}>
                Stop
            </button>
            <button onClick={reset}> Reset</button>
        </>
    );
}




//duration functional component
function DurationComponent(exerciseItems) {
    return (
        <div>
            <h1>{exerciseItems.exerciseName}</h1>
            <Timer />
        </div>
    );
}
export default DurationComponent;