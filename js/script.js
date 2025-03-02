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

// live date and time
window.onload = function () {
  let currentDate = new Date();
  let dateString = currentDate.toDateString();

  // 'currentDate'
  document.getElementById("currentDate").textContent = dateString;
};

// 6 button click done
let totalButtons = document.querySelectorAll(".completedBtn").length;
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

    //  row4's h2 text and current date & time
    let row4H2Text = event.target
      .closest(".row4")
      .querySelector("h2").innerText;
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();

    // new history log
    let historyContainer = document.getElementById("historyContainer");
    let historyLog = document.createElement("div");
    historyLog.classList.add("historyLog");
    historyLog.innerHTML = `
        <p style="color: black; background-color: #F4F7FF; padding: 20px; margin: 20px;border-radius: 8px;">
        You have Completed The Task ${row4H2Text} at ${dateString} 
    </p>
    `;

    // Append the new log to the history container
    historyContainer.appendChild(historyLog);

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

// history delete
document.getElementById("clearBtn").addEventListener("click", function () {
  let historyContainer = document.getElementById("historyContainer");
  historyContainer.innerHTML = "";
});
