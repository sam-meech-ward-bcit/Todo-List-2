document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#newTaskForm")

  const tasks = []

  form.addEventListener("submit", event => {
    event.preventDefault()
    const taskInput = document.querySelector("#createTask")
    const value = taskInput.value
    tasks.push(value)
    console.log(tasks)
  })
})