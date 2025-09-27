function recordWorkout(){
    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const repetitions = document.getElementById("repetitions").value;
    const weight = document.getElementById("weight").value;

    console.log(`Exercise: ${exercise}, Sets: ${sets}, Repetitions: ${repetitions}, Weight: ${weight}`);
}