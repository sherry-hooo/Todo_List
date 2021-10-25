// 引入
import { putOnTop, putOnBottom } from './icon.js'
import { taskCountEvent } from './count.js'
import { toggleTask } from './toggle.js'

// 取節點
let get = (tag) => document.querySelector(tag)
let createTaskButton = get('.create_task_button')
// let templateTask = get('.template_task')
// let listedTaskArea = get('.listed_task_area')
let star = get(`i[data-name=star]`)

// 監聽 創建、新增、取消
// createTaskArea.addEventListener('click', createAction)

// event handler
export function createAction(event) {
  console.log('createArea點擊事件')
  let templateTask = get('.template_task')

  switch (event.target.name) {
    case 'create':
      openTemplate(event, templateTask)
      break
    case 'add':
      addNewTask(event, templateTask)
      // reset template task
      resetTemplate(templateTask)
      break
    case 'cancel':
      cancelNewTask(event, templateTask)
      break
  }
}

// 建立task  function
function openTemplate(event, template) {
  console.log(
    `click ${event.target.name} 按鈕，開啟 template 隱藏create button`,
  )
  event.stopImmediatePropagation()
  // 將創建按鈕隱藏
  event.target.style.display = 'none'
  // 顯示template task
  template.style.display = 'block'
}

//按鈕設置參考 https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role

// 點擊 加入task
function addNewTask(event, templateTask) {
  console.log(`click ${event.target.name} 按鈕，新增task, create button 回復`)
  // 清預設
  event.preventDefault()
  event.stopImmediatePropagation()

  // 顯示創建按鈕
  createTaskButton.style.display = 'flex'

  // 加入 listed task area
  let newTask = templateTask.cloneNode(true)
  let listedTaskArea = get('.listed_task_area')

  listedTaskArea.appendChild(newTask) // 加到listed area下
  newTask.style.display = 'block' // display 修改顯示
  newTask.setAttribute('name', 'save') // 換 name 為 save
  newTask.classList.remove('template_task') // 移除class template_task

  // 若點擊星星放置頂
  if (newTask.children[0].children[2].dataset.on === 'true') {
    console.log('預設放置頂')
    putOnTop(newTask, listedTaskArea)
  }
  // 拿掉 pen 樣式
  let pen = newTask.children[0].children[3]
  pen.classList.remove('pen_fill')
  pen.dataset.on = 'false'

  // 收起body&footer
  toggleTask(newTask)

  // 設置新task thumbnail
  // checkFormContent

  // 綁定 count 監聽
  listedTaskArea.dispatchEvent(taskCountEvent)
}

// 點擊 刪除task
function cancelNewTask(event, templateTask) {
  console.log(`click ${event.target.name} 按鈕 取消template編輯`)
  // 創建按鈕回復
  createTaskButton.style.display = 'flex'
  // template 消失
  templateTask.style.display = 'none'
}

// 清除樣板樣式
function resetTemplate(templateTask) {
  console.log(`reset task`)
  templateTask.reset()
  templateTask.style.display = 'none'
  // 回復新增 task button
  createTaskButton.style.display = 'flex'

  // 清除星星 & 背景顏色
  star.classList.remove('star_fill')
  star.dataset.on = 'false'
  templateTask.children[0].style.backgroundColor = 'initial'
}

let taskList = []
// 設置新task(拆成 toggle 和寫在add task內)
export function saveTask(newTask) {
  console.log('設置新task')
  // task body & footer 不顯示
  let subSection = [...newTask.children]
  subSection
    .filter((item) => item.className !== 'task_header')
    .map((section) => (section.style.display = 'none'))

  // 拿掉 pen 樣式
  let pen = newTask.children[0].children[3]
  pen.classList.remove('pen_fill')
  pen.dataset.on = 'false'

  let task = {
    content: {
      title: newTask.querySelector(`[class='task_title']`).value,
      date: newTask.date.value,
      attachment: newTask.file.value,
      comment: newTask.comment.value,
    },
    done: newTask.checked,
    star: pen.dataset.on,
    pen: pen.dataset.on,
  }

  taskList.push(task)
  localStorage.setItem('taskList', JSON.stringify(taskList))
  console.log(taskList)
}
