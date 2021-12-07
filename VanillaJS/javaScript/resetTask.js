const createTaskButton = document.querySelector('.create_task_button')

export function resetTask(resetTarget) {
  console.log(`reset task`)
  resetTarget.reset()
  resetTarget.style.display = 'none'
  // 回復新增 task button
  createTaskButton.style.display = 'flex'

  // 清除星星 & 背景顏色
  resetTarget.querySelector(`[data-name=star]`).classList.remove('star_fill')
  resetTarget.querySelector(`[data-name=star]`).dataset.on = 'false'
  resetTarget.querySelector('.task_header').style.backgroundColor = 'initial'
}
