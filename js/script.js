// bg color change
let colors = ["#3752FD", "#780C28", "#FADA7A", "#AA60C8", "#D70654"];
let index = 0;

document.querySelector(".themeImage").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});

// window.location.href = "blogs.html";
document.getElementById("h3dBtn").addEventListener("click", function () {
  window.location.href = "blogs.html";
});



let totalButtons = document.querySelectorAll(".completedBtn").length; // Total 6 buttons
let clickedButtons = 0; // Track number of clicks

function updateTaskCount(event) {
  let taskNumbers = document.getElementById("taskNumbers");
  let number23 = document.getElementById("number23");

  let taskCount = parseInt(taskNumbers.innerText) || 0;
  let completedCount = parseInt(number23.innerText) || 0;

  if (taskCount > 0) {
    taskNumbers.innerText = taskCount - 1;
    number23.innerText = completedCount + 1;

    // Disable the clicked button
    event.target.disabled = true;
    event.target.style.backgroundColor = "gainsboro";
    event.target.style.cursor = "not-allowed";

    // Board Update Successfully"
    alert("Board Update Successfully");

    clickedButtons++;

    // "Congratulations! Board updated successfully."
    if (clickedButtons === totalButtons) {
      alert("Congratulations! Board updated successfully.");
    }
  }
}

document.querySelectorAll(".completedBtn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    updateTaskCount(event);
  });
});
