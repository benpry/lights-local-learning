function startTimer() {
  // get the timer, creating it if necessary
  let timer = document.getElementById("timer");
  if (!timer) {
    console.log("no timer. creating one...");
    const jsPsychContent = document.getElementById("jspsych-content");
    timer = document.createElement("div");
    timer.id = "timer";
    timer.innerHTML = `<svg viewbox="-50 -50 100 100" stroke-width="10">
    <circle r="45"></circle>
    <circle r="45" pathlength="1"></circle></svg>`;
    jsPsychContent.insertBefore(timer, jsPsychContent.firstChild);
  } else {
    console.log("timer already exists");
  }
  // start the timer
  timer.classList.add("countdown");
}
