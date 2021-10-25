// 引入
import { createAction } from './createTask.js'
import { taskClickHandler } from './task.js'
import './filterTask.js'
import './count.js'

// 取節點
let get = (tag) => document.querySelector(tag)

// 創建task事件
let createTaskArea = get('.create_task_area')
createTaskArea.addEventListener('click', createAction)

// icon點擊事件
let main = get('main')
let listedTaskArea = get('.listed_task_area')
main.addEventListener('click', taskClickHandler)
