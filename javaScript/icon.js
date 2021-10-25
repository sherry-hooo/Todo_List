let get = (tag) => document.querySelector(tag)

// document.body.addEventListener('click', iconAction)

// export function iconAction(event) {
//   let targetIcon = event.target
//   let targetTask = event.target.parentNode.parentNode
//   console.log(event.target.name)
//   console.log('偵測到icon點擊事件', targetIcon.name)
//   console.log('iconAction 的this是誰', this)
//   // listedTaskArea.dispatchEvent(taskCountEvent)

//   //點擊星星
//   if (targetIcon.dataset.name === 'star') {
//     targetIcon.classList.toggle('star_fill')
//     clickStar(targetIcon, targetTask)
//   }
//   //點擊編輯
//   if (targetIcon.dataset.name === 'pen') {
//     targetIcon.classList.toggle('pen_fill')
//     clickPen(targetIcon, targetTask)
//   }
// }

// 置頂
export function clickStar(icon, form) {
  let listedTaskArea = get('.listed_task_area')
  let formHeader = form.firstElementChild
  if (icon.dataset.on === 'false') {
    console.log('開啟星星')
    icon.classList.add('star_fill')
    // 不是template 的放置頂
    if (form.parentNode.className !== 'create_task_area') {
      // 放到第一個task以前
      console.log('置頂')
      putOnTop(form)
    }
    // 星星變
    console.log(form.firstElementChild, 'formheader變色')
    formHeader.style.backgroundColor = '#FFF2DC'
    icon.dataset.on = 'true'
  } else {
    console.log('關閉星星')
    icon.classList.remove('star_fill')
    // let totalTasksNumber = listedTaskArea.length
    // let lastTask = listedTaskArea.children[totalTasksNumber]
    // listedTaskArea.insertBefore(form, lastTask)
    putOnBottom(form)

    //背景回復
    formHeader.style.backgroundColor = 'initial'
    icon.dataset.on = 'false'
  }
}

// 置頂
export function putOnTop(target) {
  let listedTaskArea = get('.listed_task_area')
  let firstTask = listedTaskArea.children[0]
  listedTaskArea.insertBefore(target, firstTask)
}

// 置底
export function putOnBottom(target) {
  let listedTaskArea = get('.listed_task_area')
  let totalTasksNumber = listedTaskArea.length
  let lastTask = listedTaskArea.children[totalTasksNumber]
  listedTaskArea.insertBefore(target, lastTask)
}

// 編輯
export function clickPen(icon, form) {
  let bodyAndFooter = Array.from(form.children).filter(
    (item) => item.className !== 'task_header',
  )
  if (icon.dataset.on === 'true') {
    console.log('收起來')
    icon.classList.remove('pen_fill')
    bodyAndFooter.map((section) => (section.style.display = 'none'))
    icon.dataset.on = 'false'
  } else {
    console.log('展開')
    icon.classList.add('pen_fill')
    bodyAndFooter.map((section) => (section.style.display = 'flex'))
    icon.dataset.on = 'true'
  }
}
