//create a funcitonal component for the flexibility screen
//include useState
//call exercise items from list

//make a countdown timer for stretching with options for five or ten minutes
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;


        if (isRunning && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }

        //reset timer
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    //start timer
    const startTimer = (duration) => {
        setSeconds(duration);
        setIsRunning(true);
    };

    //timer format
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    //stop timer
    const stopTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div>
            <p>Countdown: {formatTime(seconds)}</p>
            <button onClick={() => startTimer(300)} disabled={isRunning}>
                5 Mins
            </button>

            <button onClick={() => startTimer(600)} disabled={isRunning}>
                10 Mins
            </button>

            <button onClick={stopTimer}>
                Stop
            </button>

        </div>
    );
}


//felxibility functional component
function FlexibilityComponent(exerciseItems) {
    return (
        <div>
            <h1>{exerciseItems.exerciseName}</h1>
            <CountdownTimer />
        </div>
    );
}

export default FlexibilityComponent;