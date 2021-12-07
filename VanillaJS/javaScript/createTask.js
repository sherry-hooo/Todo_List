//- 點擊創建task 監聽事件
let createTaskButton = document.querySelector('.create_task_button')
createTaskButton.addEventListener('click', openTemplate)

// openTemplate
export function openTemplate(event) {
  console.log('開啟template')
  let templateTask = document.querySelector('.template_task')
  // 停止bubbling
  event.stopImmediatePropagation()
  // 將創建按鈕隱藏
  event.target.style.display = 'none'
  // 顯示template task
  templateTask.style.display = 'block'
}
