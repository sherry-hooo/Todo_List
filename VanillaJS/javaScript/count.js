// 引入
import { populateList } from './populateTask.js'

let get = (tag) => document.querySelector(tag)
let showTaskCount = get('.task_count')

// 加入counts計算
export function addCounts(taskList) {
  let leftTaskCount = taskList.filter((task) => !task.done).length
  let completedTaskCount = taskList.filter((task) => task.done).length
  console.log('剩餘數量為' + leftTaskCount) // check only
  localStorage.setItem('leftTaskCount', JSON.stringify(leftTaskCount))
  localStorage.setItem('completedTaskCount', JSON.stringify(completedTaskCount))
  populateCounts(leftTaskCount)
}
// 渲染畫面
export function populateCounts(taskCount, display = 'left') {
  showTaskCount.innerHTML = `${taskCount}  task ${display}`
}
