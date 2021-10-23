let get = (tag) => document.querySelector(tag)
let getAll = (tag) => document.querySelectorAll(tag)

document.body.addEventListener('click', iconAction)

function iconAction(event) {
  let targetIcon = event.target
  let targetTask = event.target.parentNode.parentNode
  console.log('偵測到icon點擊事件')
  console.log('iconAction 的this是誰', this)
  //點擊星星
  if (targetIcon.dataset.name === 'star') {
    targetIcon.classList.toggle('star_fill')
    setImportant(targetIcon, targetTask)
  }
  //點擊編輯
  if (targetIcon.dataset.name === 'pen') {
    targetIcon.classList.toggle('pen_fill')
    startEditing(targetIcon, targetTask)
  }
}

// 置頂
let listedTaskArea = get('.listed_task_area')
function setImportant(icon, form) {
  let formHeader = form.firstElementChild
  if (icon.dataset.on === 'false') {
    console.log('開啟星星')
    // 不是template 的放置頂
    if (form.parentNode.className !== 'create_task_area') {
      // 放到第一個task以前
      putOnTop(form)
    }
    // 星星變色
    console.log(form.firstElementChild, 'formheader變色')
    formHeader.style.backgroundColor = '#FFF2DC'
    icon.dataset.on = 'true'
  } else {
    console.log('關閉星星')
    let totalTasksNumber = listedTaskArea.length
    let lastTask = listedTaskArea.children[totalTasksNumber]
    listedTaskArea.insertBefore(form, lastTask)

    //背景回復
    formHeader.style.backgroundColor = 'initial'
    icon.dataset.on = 'false'
  }
}

// 置頂
export function putOnTop(target) {
  let firstTask = listedTaskArea.children[0]
  listedTaskArea.insertBefore(target, firstTask)
}

// 編輯
function startEditing(targetIcon, form) {
  console.log('點擊編輯')
  let bodyAndFooter = Array.from(form.children).filter(
    (item) => item.className !== 'task_header',
  )
  if (targetIcon.dataset.on === 'true') {
    console.log('收起來')
    bodyAndFooter.map((section) => (section.style.display = 'none'))
    targetIcon.dataset.on = 'false'
  } else {
    console.log('展開')
    bodyAndFooter.map((section) => (section.style.display = 'flex'))
    targetIcon.dataset.on = 'true'
  }
}
