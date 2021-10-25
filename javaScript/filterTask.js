// 取節點
let get = (tag) => document.querySelector(tag)
let getAll = (tag) => document.querySelectorAll(tag)
let createTaskButton = get('.create_task_button')
let templateTask = get('.template_task')
let addTaskButton = get('input.add_task_button')
let listedTaskArea = get('.listed_task_area')
let inputDate = get(`input[type=date]`)
let star = get(`i[data-name=star]`)
let pen = get(`i[data-name=pen]`)
let showTaskCount = get('.task_count')
let filters = get('header')
let date = get('#date')
let file = get('#file')
let comment = get('#comment')

filters.addEventListener('click', filterTasks)

function filterTasks(event) {
  console.log('點擊' + event.target.name + '篩選')
  let allTask = [...listedTaskArea.children]
  allTask.map((task) => (task.style.display = 'block'))
  let ongoingTask = allTask.filter((form) => !form[0].checked)
  let completedTask = allTask.filter((form) => form[0].checked)

  switch (event.target.name) {
    case 'myTasks':
      console.log('顯示全部task')
      break
    case 'progress':
      console.log('顯示所有進行中task')
      completedTask.map((task) => (task.style.display = 'none'))
      break
    case 'completed':
      console.log('顯示所有已完成task')
      ongoingTask.map((task) => (task.style.display = 'none'))
      showTaskCount.innerText = completedTask.length + ' task completed'
      break
  }
}
