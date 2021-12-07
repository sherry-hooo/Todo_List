// import
import { resetTask } from './resetTask.js'
import { populateCounts, addCounts } from './count.js'
import { checkFormContent } from './checkFormContent.js'
import { populateList } from './populateTask.js'
import { taskStatus } from './filterTask.js'

// 取節點
let get = (tag) => document.querySelector(tag)
let showTaskCount = get('.task_count')

// local stroage
let taskList = JSON.parse(localStorage.getItem('taskList')) || []

//- template form submit 監聽事件
// document.addEventListener('submit', submission)
export function submission(event) {
  // 清submit 預設
  event.preventDefault()
  // 事件分為創建 & 一般編輯
  let target = event.target.closest('form')
  if (target.classList.contains('template_task')) {
    console.log('創建')
    addToTaskList(target)
    addCounts(taskList)
  } else {
    console.log('一般修改')
    reviseTaskList(target)
    addCounts(taskList)
  }
}

// 修改 taskList
export function reviseTaskList(target) {
  let id = target.getAttribute('data-id')
  let index = taskList.findIndex((task) => task.id === +id)
  taskList[index].content.title = target.querySelector(
    `[class='task_title']`,
  ).value
  taskList[index].content.date = target.elements.date.value
  taskList[index].content.time = target.elements.time.value
  taskList[index].content.file = target.elements.file.value
  taskList[index].content.comment = target.elements.comment.value
  taskList[index].done = target.querySelector(`[type=checkbox]`).checked
  taskList[index].star = target.querySelector(`[data-name=star]`).dataset.on
  taskList[index].pen = 'false'

  localStorage.setItem('taskList', JSON.stringify(taskList))
  taskList = JSON.parse(localStorage.getItem('taskList'))
  // populateList(taskList)
  // filter
  let filters = get('header')
  let allFilterButton = [...filters.children]
  let currentPageIndex = allFilterButton.findIndex((button) =>
    button.classList.contains('focus'),
  )
  let status = allFilterButton[currentPageIndex].name
  taskStatus(status)
  // populate count
  populateCounts(showTaskCount)
}

// 加入 taskList
function addToTaskList(target) {
  let task = {
    id: generateID(),
    content: {
      title: target.elements.title.value,
      date: target.elements.date.value,
      time: target.elements.time.value,
      file: target.elements.file.value,
      comment: target.elements.comment.value,
    },
    done: target.querySelector(`[type=checkbox]`).checked,
    star: target.querySelector(`[data-name=star]`).dataset.on,
    pen: target.querySelector(`[data-name=pen]`).dataset.on,
  }

  function generateID() {
    return new Date().valueOf()
  }
  // 加入 taskList
  taskList.push(task)

  // 寫入 localStorage
  localStorage.setItem('taskList', JSON.stringify(taskList))

  // 渲染畫面
  populateList(taskList)

  // 回復template
  resetTask(target)
}

// 渲染畫面 populate list
// export function populateList(taskList) {
//   console.log('渲染畫面')
//   console.log(taskList)
//   let listedTaskArea = get('.listed_task_area')
//   listedTaskArea.innerHTML = taskList
//     .map((task, index) => {
//       return `
//     <form class="task " data-index=${index} data-id=${task.id} >
// <div class='task_header ${task.star === 'true' ? 'yellow_bg' : ''}'>
//   <input type="checkbox" name='check' ${task.done ? 'checked' : ''} data-id=${
//         task.id
//       }>
//   <input class='task_title' type="text" name='title'  maxlength="15" placeholder='Type Something here...'
//   value=${task.content.title}>
//   <i class="fa-fw far fa-star star ${
//     task.star === 'true' ? 'star_fill' : ''
//   }" data-name='star' data-on=${task.star}></i>
//   <i class="fa-fw far fa-edit ${
//     task.pen === 'true' ? 'pen_fill' : ''
//   } " data-name='pen' data-on=${task.pen}></i>
//   <div class="content_icon ${
//     checkFormContent(task) ? '' : 'disappear'
//   }">${checkFormContent(task)}</div>
// </div>

// <div class='task_body  ${task.pen === 'true' ? '' : 'disappear'}'>
//   <fieldset>
//     <legend><i class="far fa-fw fa-calendar-alt"></i>Deadline</legend>
//     <label for="date">
//       <input type="date" id='date' name='date' value=${task.content.date}>
//     </label>
//     <label for="time">
//       <input type="time" value="" id='time' name='time' value=${
//         task.content.time
//       }>
//     </label>
//   </fieldset>

//   <fieldset>
//     <legend><i class="far fa-fw fa-file"></i>File</legend>
//     <label class='uploadFile' for="file">
//       <span></span>
//       <input type="file" id='file' name='file' value=${task.content.file}>
//     </label>
//   </fieldset>

//   <fieldset>
//     <legend><i class="far fa-fw fa-comment-dots"></i>Comment</legend>
//     <textarea name="comment" id="comment" rows="10" cols='15' placeholder="Type your memo here...">${
//       task.content.comment
//     }</textarea>
//   </fieldset>
// </div>
// <div class="task_footer   ${task.pen === 'true' ? '' : 'disappear'}">
//   <input name='cancel' class="cancel_task_button" type="reset" value='&times; Cancel'></button>
//   <input name='save' class="add_task_button" type="submit" value="&plus; Save Task"></button>
// </div>
// </form>`
//     })
//     .join('')
// }
