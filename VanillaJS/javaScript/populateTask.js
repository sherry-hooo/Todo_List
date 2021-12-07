// 引入
import { checkFormContent } from './checkFormContent.js'

let get = (tag) => document.querySelector(tag)
let taskList = JSON.parse(localStorage.getItem('taskList')) || []

// 渲染畫面 populate list
export function populateList(taskList) {
  console.log(taskList)
  let listedTaskArea = get('.listed_task_area')
  listedTaskArea.innerHTML = taskList
    .map((task, index) => {
      return `
    <form class="task " data-index=${index} data-id=${task.id} draggable='true'>
<div class='task_header ${task.star === 'true' ? 'yellow_bg' : ''}'>
  <input type="checkbox" name='check' ${task.done ? 'checked' : ''} data-id=${
        task.id
      }>
  <input class='task_title' type="text" name='title'  maxlength="15" placeholder='Type Something here...'
  value=${task.content.title}>
  <i class="fa-fw far fa-star star ${
    task.star === 'true' ? 'star_fill' : ''
  }" data-name='star' data-on=${task.star}></i>
  <i class="fa-fw far fa-edit ${
    task.pen === 'true' ? 'pen_fill' : ''
  } " data-name='pen' data-on=${task.pen}></i>
  <div class="content_icon ${
    checkFormContent(task) ? '' : 'disappear'
  }">${checkFormContent(task)}</div>
</div>

<div class='task_body  ${task.pen === 'true' ? '' : 'disappear'}'>
  <fieldset>
    <legend><i class="far fa-fw fa-calendar-alt"></i>Deadline</legend>
    <label for="date">
      <input type="date" id='date' name='date' value=${task.content.date}>
    </label>
    <label for="time">
      <input type="time" value="" id='time' name='time' value=${
        task.content.time
      }>
    </label>
  </fieldset>

  <fieldset>
    <legend><i class="far fa-fw fa-file"></i>File</legend>
    <label class='uploadFile' for="file">
      <span></span>
      <input type="file" id='file' name='file' value=${task.content.file}>
    </label>
  </fieldset>

  <fieldset>
    <legend><i class="far fa-fw fa-comment-dots"></i>Comment</legend>
    <textarea name="comment" id="comment" rows="10" cols='15' placeholder="Type your memo here...">${
      task.content.comment
    }</textarea>
  </fieldset>
</div>
<div class="task_footer   ${task.pen === 'true' ? '' : 'disappear'}">
  <input name='cancel' class="cancel_task_button" type="reset" value='&times; Cancel'></button>
  <input name='save' class="add_task_button" type="submit" value="&plus; Save Task"></button>
</div>
</form>`
    })
    .join('')
}
