// 引入
import { populateList } from './populateTask.js'
import { taskStatus } from './filterTask.js'

// 取節點
let get = (tag) => document.querySelector(tag)
let main = get('main')

// icon 點擊事件
main.addEventListener('click', clickIcon)

// eventHandler
export function clickIcon(event) {
  event.stopImmediatePropagation()
  if (
    !event.target.matches('i') ||
    event.target.parentNode.parentNode.classList.contains('.template_task')
  ) {
    return
  }
  console.log('icon check')
  let targetIcon = event.target
  let targetTask = targetIcon.closest('form')
  //點擊星星
  if (targetIcon.dataset.name === 'star') {
    clickStar(targetIcon, targetTask)
  }
  //點擊編輯
  if (targetIcon.dataset.name === 'pen') {
    clickPen(targetIcon, targetTask)
  }
}

// 星星
export function clickStar(icon, form) {
  let taskList = JSON.parse(localStorage.getItem('taskList')) || []
  console.log('star點擊')
  console.log(icon)
  console.log(form)
  // let id = +form.getAttribute('data-id')
  let id = +form.dataset.id
  console.log(id)
  console.log(taskList)
  let targetIndex = taskList.findIndex((task) => task.id === id)
  console.log(taskList.findIndex((task) => task.id === id))
  console.log(taskList.indexOf((task) => task.id === id))
  console.log(targetIndex)

  taskList[targetIndex].star = icon.dataset.on === 'true' ? 'false' : 'true'
  console.log(taskList[targetIndex])

  // 放置位置
  // let position = taskList[targetIndex].star === 'true' ? 0 : taskList.length - 1
  // move(index, position, taskList)

  // 存入localStorage
  localStorage.setItem('taskList', JSON.stringify(taskList))
  console.log(taskList[targetIndex])
  taskList = JSON.parse(localStorage.getItem('taskList')) || []
  // 渲染 會有bug
  // populateList(taskList)

  // filter
  let filters = get('header')
  let allFilterButton = [...filters.children]
  let currentPageIndex = allFilterButton.findIndex((button) =>
    button.classList.contains('focus'),
  )
  let status = allFilterButton[currentPageIndex].name
  taskStatus(status)
}

// 排序function
export function move(from, to, arr) {
  console.log('move')
  const item = arr.splice(from, 1)[0]
  arr.splice(to, 0, item)
  console.log(arr)
  return arr
}

// 編輯
export function clickPen(icon, form) {
  console.log('pen點擊')
  console.log(icon)
  console.log(form)
  // let id = +form.getAttribute('data-id')
  let id = +form.dataset.id

  let targetIndex = taskList.findIndex((task) => task.id === +id)
  taskList[targetIndex].pen = icon.dataset.on === 'true' ? 'false' : 'true'
  console.log(taskList[targetIndex].done)
  // 存入localStorage
  localStorage.setItem('taskList', JSON.stringify(taskList))
  // taskList = JSON.parse(localStorage.getItem('taskList')) || []

  // 渲染 會有bug
  // populateList(taskList)

  // filter
  let filters = get('header')
  let allFilterButton = [...filters.children]
  let currentPageIndex = allFilterButton.findIndex((button) =>
    button.classList.contains('focus'),
  )
  let status = allFilterButton[currentPageIndex].name
  taskStatus(status)
}
