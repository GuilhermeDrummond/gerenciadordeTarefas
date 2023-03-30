function saveTaskHour() {
    let task = document.getElementById("newTask").value;
    let hour = document.getElementById("hourSelect").value;
    let tasks = document.getElementById("tasks");

    console.log(task);
    console.log(hour);
    
    let newIten = document.createElement('li')
    newIten.innerText('teste')

    tasks.appendChild(newIten)

}