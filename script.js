const exerciseList = [];
const setsList = [];
const repetitionsList = [];
const weightList = [];

if(localStorage.exerciseList) {
    exerciseList.push(...JSON.parse(localStorage.exerciseList));
}
if(localStorage.setsList) {
    setsList.push(...JSON.parse(localStorage.setsList));
}
if(localStorage.repetitionsList) {
    repetitionsList.push(...JSON.parse(localStorage.repetitionsList));
}
if(localStorage.weightList) {
    weightList.push(...JSON.parse(localStorage.weightList));
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
    localStorage.setItem("exerciseList", JSON.stringify(exerciseList));
    localStorage.setItem("setsList", JSON.stringify(setsList));
    localStorage.setItem("repetitionsList", JSON.stringify(repetitionsList));
    localStorage.setItem("weightList", JSON.stringify(weightList));

    console.log(`Exercise: ${exercise}, Sets: ${sets}, Repetitions: ${repetitions}, Weight: ${weight}`);
    console.log(setsList);
}