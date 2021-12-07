// import
import './createTask.js'
import { submission } from './submission.js'
import { populateList } from './populateTask.js'
import { populateCounts } from './count.js'
import './checkFormContent.js'
import './filterTask.js'
import { checkTask } from './checkBox.js'
// import './drag&drop.js'

// 存取 localStorage
let taskList = JSON.parse(localStorage.getItem('taskList')) || []
let leftTaskCount = JSON.parse(localStorage.getItem('leftTaskCount')) || 0

// 取節點
let get = (tag) => document.querySelector(tag)
let listedTaskArea = get('.listed_task_area')


// 監聽事件
listedTaskArea.addEventListener('click', checkTask)
document.addEventListener('submit', submission)

// load page 都會先執行渲染畫面一次
populateList(taskList)
populateCounts(leftTaskCount)
