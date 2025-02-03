const inputBox = document.getElementById("input-box");  // Ensure correct ID
const listContainer = document.getElementById("list-container");  // Ensure correct ID

function addTask() {
    if (inputBox.value.trim() === '') {  
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;  // Use textContent instead of innerHTML
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";  // Clear input after adding
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Initial call to populate the list from local storage
showTask();