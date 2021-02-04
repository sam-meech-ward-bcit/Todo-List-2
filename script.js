document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#newTaskForm")

  const taskList = document.querySelector("#taskList")

  const tasksString = localStorage.getItem("tasks") || "[]"
  const tasks = JSON.parse(tasksString)

  function taskElement(task) {
    const li = document.createElement('li')
    li.innerHTML = `${task.name}<span class="complete-task">${task.complete ? "🍏" : "🔴"}</span>`
    return li
  }

  function addTaskToList(element) {
    taskList.appendChild(element)
  }

  tasks.map(taskElement).forEach(addTaskToList)
  
  // tasks.forEach(task => {
  //   const element = taskElement(task)
  //   addTaskToList(element)
  // })


  form.addEventListener("submit", event => {
    event.preventDefault()
    const taskInput = document.querySelector("#createTask")
    const value = taskInput.value
    const task = {
      name: value,
      complete: false
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    const element = taskElement(task)
    addTaskToList(element)
    console.log(tasks)
  })
})