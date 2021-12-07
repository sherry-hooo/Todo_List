// 引入

// 取節點
let get = (tag) => document.querySelector(tag)
let listedTaskArea = get('.listed_task_area')

// content
export function checkFormContent(targetTask) {
  let iconCodeList = [
    {
      name: 'date',
      thumbnail: `<i class="far fa-fw fa-calendar-alt"></i> ${targetTask.content.date}`,
    },
    {
      name: 'file',
      thumbnail: `<i class="far fa-fw fa-file"></i>`,
    },
    {
      name: 'comment',
      thumbnail: `<i class="far fa-fw fa-comment-dots"></i>`,
    },
  ]

  return iconCodeList
    .filter((input) => targetTask.content[input.name] !== '', '<-------')
    .map((icon) => icon.thumbnail)
    .join('')
}
