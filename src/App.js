import './App.css';
import './components/DurationExercise/index.js'
import DurationComponent from './components/DurationExercise/index.js';
import './components/RepetitonExercise/index.js'
import RepetitionComponent from './components/RepetitonExercise/index.js';
import './components/NewExercise/index.js'
import FlexibilityComponent from './components/NewExercise/index.js';
import React, { useState } from 'react';


//set items
const exerciseItems = [
  {
    exerciseType: "Duration",
    exerciseNames: [
      { exerciseName: "Running" },
      { exerciseName: "Planks" }
    ]
  },
  {
    exerciseType: "Repetition",
    exerciseNames: [
      { exerciseName: "Push-Ups" },
      { exerciseName: "Squats" }
    ]
  },
  {
    exerciseType: "Flexibility",
    exerciseNames: [
      { exerciseName: "Stretching" }
    ]
  }
];



//app function
function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const button = (exerciseType, exerciseName) => {
    setSelectedExercise({ exerciseType, exerciseName });
  };

  const renderExerciseComponent = () => {
    if (!selectedExercise) return null;

    const { exerciseType, exerciseName } = selectedExercise;

    if (exerciseType === "Duration") {
      return <DurationComponent exerciseName={exerciseName} />;
    }
    if (exerciseType === "Repetition") {
      return <RepetitionComponent exerciseName={exerciseName} />;
    }
    if (exerciseType === "Flexibility") {
      return <FlexibilityComponent exerciseName={exerciseName} />;
    }
    return null;
  };
  //what shows on screen
  return (
    <div className="App">
      {!selectedExercise && <h1>The Exercise App</h1>}
      {selectedExercise ? (
        renderExerciseComponent()
      ) : (
        <div>
          <p>My Exercises:</p>
          {exerciseItems.map(item =>
            item.exerciseNames.map(exercise => (
              <button
                key={exercise.exerciseName}
                onClick={() => button(item.exerciseType, exercise.exerciseName)}
              >
                {exercise.exerciseName}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}


/* function App() {
  return (
    <div className="App">
      <h1>This is the exercise app!</h1>
      <p>Select Your Exercise:</p>
      <button onClick={DurationComponent}>Running</button>
      <button onClick={RepetitionComponent}>Push-ups</button>
      <button onClick={DurationComponent}>Planks</button>
      <button onClick={RepetitionComponent}>Squats</button>
    </div>
  );
} */

export default App;
