let get = (tag) => document.querySelector(tag)
let templateTask = get('.template_task')
let showTaskCount = get('.task_count')
let listedTaskArea = get('.listed_task_area')
// 監聽點擊完成
templateTask.addEventListener('change', countTasks)

// 顯示 task 數量
export default function countTasks(event) {
  console.log(`計算task, 進行中數量為`)
  let allTask = [...listedTaskArea.children]
  let progressTask = allTask.filter((form) => !form[0].checked)
  // 顯示task數量
  showTaskCount.innerText = progressTask.length + ' task left'
}

// 自定義 event
export const taskCountEvent = new CustomEvent('lengthChange', {
  detail: {
    message: 'lengthChange',
  },
  bubbles: true,
  cancelable: true,
})

// listedTaskArea.dispatchEvent(taskCountEvent)
listedTaskArea.addEventListener('lengthChange', countTasks)
