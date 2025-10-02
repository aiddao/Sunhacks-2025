const exerciseList = [];
const setsList = [];
const repetitionsList = [];
const weightList = [];

if(localStorage.exerciseList != null && localStorage.setsList && localStorage.repetitionsList && localStorage.weightList) {
    exerciseList.push(...JSON.parse(localStorage.exerciseList));
    setsList.push(...JSON.parse(localStorage.setsList));
    repetitionsList.push(...JSON.parse(localStorage.repetitionsList));
    weightList.push(...JSON.parse(localStorage.weightList));
    for(let i = 0; i < exerciseList.length; i++) {
        addWorkoutToLog(exerciseList[i], setsList[i], repetitionsList[i], weightList[i]);
    }
}

function recordWorkout(){
    event.preventDefault();
    let exercise = document.getElementById("exercise").value;
    let sets = document.getElementById("sets").value;
    let repetitions = document.getElementById("repetitions").value;
    let weight = document.getElementById("weight").value;

    exerciseList.push(exercise);
    setsList.push(sets);
    repetitionsList.push(repetitions);
    weightList.push(weight);

    addWorkoutToLog(exercise, sets, repetitions, weight);

    localStorage.setItem("exerciseList", JSON.stringify(exerciseList));
    localStorage.setItem("setsList", JSON.stringify(setsList));
    localStorage.setItem("repetitionsList", JSON.stringify(repetitionsList));
    localStorage.setItem("weightList", JSON.stringify(weightList));

}

function addWorkoutToLog(exercise, sets, repetitions, weight) {
    let workoutList = document.getElementById("workout-log");
    let listItem = document.createElement("li");
    listItem.textContent = `${exercise}: ${sets} sets, ${repetitions} reps, ${weight} kg`;
    workoutList.appendChild(listItem);
}
