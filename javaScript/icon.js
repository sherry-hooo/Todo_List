let get = (tag) => document.querySelector(tag)

// 置頂
export function clickStar(icon, form) {
  let formHeader = form.firstElementChild
  icon.dataset.on = icon.dataset.on === 'true' ? 'false' : 'true'
  console.log(icon.dataset.on)

  if (icon.dataset.on === 'true') {
    console.log('開啟星星')
    icon.classList.add('star_fill')
    // 不是template 的放置頂
    putOnTop(form)

    // 星星變
    console.log(form.firstElementChild, 'formheader變色')
    formHeader.style.backgroundColor = '#FFF2DC'
  } else if (icon.dataset.on === 'false') {
    console.log('關閉星星')
    icon.classList.remove('star_fill')

    //背景回復
    formHeader.style.backgroundColor = 'initial'
    putOnBottom(form)
  } else {
    return
  }
}

// 置頂
export function putOnTop(target) {
  let listedTaskArea = get('.listed_task_area')
  let firstTask = listedTaskArea.children[0]
  target.classList.contains('template_task')
    ? ''
    : listedTaskArea.insertBefore(target, firstTask)
  console.log(`${target.classList.contains('template_task')}`)
}

// 置底
export function putOnBottom(target) {
  let listedTaskArea = get('.listed_task_area')
  let totalTasksNumber = listedTaskArea.length
  let lastTask = listedTaskArea.children[totalTasksNumber]
  target.classList.contains('template_task')
    ? ''
    : listedTaskArea.insertBefore(target, lastTask)
}

// 編輯
export function clickPen(icon, form) {
  let bodyAndFooter = Array.from(form.children).filter(
    (item) => item.className !== 'task_header',
  )
  icon.dataset.on = icon.dataset.on === 'true' ? 'false' : 'true'
  if (icon.dataset.on === 'false') {
    console.log('收起來')
    icon.classList.remove('pen_fill')
    bodyAndFooter.map((section) => (section.style.display = 'none'))
    icon.dataset.on = 'false'
  } else if (icon.dataset.on === 'true') {
    console.log('展開')
    icon.classList.add('pen_fill')
    bodyAndFooter.map((section) => (section.style.display = 'flex'))
    icon.dataset.on = 'true'
  } else {
    return
  }
}
