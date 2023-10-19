const inputText=document.getElementById("newTask");
const resultText=document.getElementById("placeForNewTask");
function addElement(){
    const text = inputText.value.trim();
    if(text!=""){
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox">
        <label>${text}</label>
        <button class="delete-button" >Delete</button>
        <button class="edit-button" >Edit</button>`;
        resultText.appendChild(li);
        inputText.value="";
     
    }    
    
}
function clearElement(){
    const completedTasks = resultText.querySelectorAll("li input[type='checkbox']:checked");
        completedTasks.forEach(function (task) {
            const li = task.parentElement;
            li.remove();
        });

}

resultText.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        const listItem = event.target.parentElement;
        resultText.removeChild(listItem);
    }
    else if (event.target.classList.contains("edit-button")) {
        // Handle edit action
        const listItem = event.target.parentElement;
        const label = listItem.querySelector("label");
        const newText = prompt("Edit the task:", label.textContent);
        if (newText !== null) {
            label.textContent = newText;
        }
    }
});