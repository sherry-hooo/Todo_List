import { taskStatus } from './filterTask.js'
import { reviseTaskList } from './submission.js'
import { move } from './icon.js'

// 取節點
let get = (tag) => document.querySelector(tag)
const listedTaskArea = get('.listed_task_area')

// listed_task_area 監聽事件
listedTaskArea.addEventListener('drop', dropAction)
// listedTaskArea.addEventListener('dragStart', dragStart)
// listedTaskArea.addEventListener('dragOver', dragOver)
// listedTaskArea.addEventListener('dragEnter', dragEnter)
// listedTaskArea.addEventListener('dragLeave', dragLeave)
// listedTaskArea.addEventListener('dragend', dragEnd)

// filter
let filters = get('header')
let allFilterButton = [...filters.children]
let currentPageIndex = allFilterButton.findIndex((button) =>
  button.classList.contains('focus'),
)
let status = allFilterButton[currentPageIndex].name
taskStatus(status)
// 放置的錨點
let draggedTarget = null

// drop action
function dropAction(event) {
  event.preventDefault()
  console.log('drop事件')
  // this.insertBefore(draggedTarget, dropTarget)
  console.log(event.dataTransfer.getData('text/plain'))
  console.log(event.dataTransfer.items)
  // let fromIndex = draggedTarget.dataset.index
  // let toIndex = dropTarget.dataset.index
  let taskList = JSON.parse(localStorage.getItem('taskList')) || []
  // taskList = move(fromIndex, toIndex, taskList)
  localStorage.setItem('taskList', JSON.stringify(taskList))
  draggedTarget.classList.remove('dragging')

  // filter
  let filters = get('header')
  let allFilterButton = [...filters.children]
  let currentPageIndex = allFilterButton.findIndex((button) =>
    button.classList.contains('focus'),
  )
  let status = allFilterButton[currentPageIndex].name
  taskStatus(status)
}

listedTaskArea.addEventListener('dragstart', function (event) {
  // console.log('dragStart', draggedTarget) // test code
  // console.log(event.target)
  let draggingTarget = event.target
  draggedTarget.classList.add('dragging')

  // id 存dataTransfer 就不需要另外在global設定變數, 其他 drop event也可以取到 dragging item的 id
  console.log(draggingTarget, 'dragging item 的 id')
  console.log(
    event.dataTransfer.setData('text/plain', draggingTarget.dataset.id),
  )
})

listedTaskArea.addEventListener('dragend', function (event) {
  console.log(event.target, 'dragend 的 target')
})

let dropTarget
listedTaskArea.addEventListener('dragover', function (event) {
  event.preventDefault()
  // console.dir(event.target)
})

listedTaskArea.addEventListener('dragenter', function (event) {
  event.preventDefault()
  // dropTarget = event.target.closest('form')
  // dropTarget.classList.add('dragging')
  // console.log('現在enter', dropTarget.dataset.index)
})

listedTaskArea.addEventListener('dragleave', function (event) {
  event.preventDefault()
  // console.log('dragLeave的target', event.target)
  // console.log('dragLeave的form', event.target.closest('form'))
  dropTarget = event.target.closest('form')
  // console.log('現在leave', dropTarget.dataset.index)
})
