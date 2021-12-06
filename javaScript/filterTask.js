// 引入
import { populateList } from './populateTask.js'
import { populateCounts } from './count.js'

// 取節點
let get = (tag) => document.querySelector(tag)
let filteredTasks = get('.filteredTask_btn_group')
let header = get('header')

// 監聽事件
filteredTasks.addEventListener('click', filterTasks)
header.addEventListener('click', toggleMenu)

// toggleMenu
function toggleMenu(event){
  if(event.target.matches('.toggle_btn')){
    let toggle_btn = event.target
    toggle_btn.dataset.toggle = toggle_btn.dataset.toggle === 'false' ? true : false
  }
}

// filterHandler
export function filterTasks(event) {
  Array.from(this.children).map((button) => button.classList.remove('focus'))
  let targetButton = event.target
  targetButton.classList.add('focus')

  let status = event.target.name
  taskStatus(status)
}

export function taskStatus(status) {
  console.log('篩選task!!!!!!!!')
  let taskList = JSON.parse(localStorage.getItem('taskList')) || []
  console.log(taskList)

  switch (status) {
    case 'myTasks':
      console.log('顯示全部task')
      //渲染
      populateList(taskList)
      // populateCounts(ongoingTask.length)
      break
    case 'progress':
      let ongoingTask = taskList.filter((task) => !task.done)

      console.log('顯示所有進行中task')
      console.log(ongoingTask)

      //渲染
      populateList(ongoingTask)
      // populateCounts(ongoingTask.length)
      break
    case 'completed':
      console.log('顯示所有已完成task', '這是完成要渲染的taskList')
      let completedTask = taskList.filter((task) => task.done)
      console.log(completedTask)

      //渲染
      populateList(completedTask)
      // populateCounts(completedTask.length, 'completed')
      break
  }
}
