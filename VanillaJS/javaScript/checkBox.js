// 引入
import { move } from './icon.js'
import { addCounts } from './count.js'
import { taskStatus } from './filterTask.js'

// 取節點
let get = (tag) => document.querySelector(tag)
let listedTaskArea = get('.listed_task_area')

//- checkbox
export function checkTask(event) {
  let taskList = JSON.parse(localStorage.getItem('taskList')) || []
  // event.stopImmediatePropagation()
  if (
    !event.target.matches(`input[type=checkbox]`) ||
    event.target.parentNode.parentNode.classList.contains('.template_task')
  ) {
    return
  }
  console.log('check')
  let id = +event.target.dataset.id
  let targetIndex = taskList.findIndex((task) => task.id === id)
  console.log(taskList[targetIndex], '陣列中的index值')
  taskList[targetIndex].done = !taskList[targetIndex].done

  // 放置位置
  // let firstCheckedIndex =
  //   taskList.findIndex((task) => task.done) < 0
  //     ? 0
  //     : taskList.findIndex((task) => task.done)
  // console.log(firstCheckedIndex, '???????')
  // let position = taskList[targetIndex].done
  //   ? taskList.length - 1
  //   : firstCheckedIndex
  // console.log(position)
  // move(targetIndex, position, taskList)

  // 存local
  localStorage.setItem('taskList', JSON.stringify(taskList))
  // populateList(taskList) 不能加!!!! 加了有bug
  // addCounts(taskList)

  // filter
  let filters = get('header')
  let allFilterButton = [...filters.children]
  let currentPageIndex = allFilterButton.findIndex((button) =>
    button.classList.contains('focus'),
  )
  let status = allFilterButton[currentPageIndex].name
  taskStatus(status)
}
