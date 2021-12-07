// 取節點
let get = (tag) => document.querySelector(tag)
let createTaskButton = get('.create_task_button')
let templateTask = get('.template_task')

// template form cancel 監聽事件
templateTask.addEventListener('reset', cancelNewTask)

// 點擊 刪除task
function cancelNewTask(event) {
  if (!event.target.matches(`input[type=reset]`)) return
  console.log(`click ${event.target.name} 按鈕 取消template編輯`)
  // 取消冒泡
  event.stopImmediatePropagation()
  // 創建按鈕回復
  createTaskButton.style.display = 'flex'
  // template 消失
  this.style.display = 'none'
}
