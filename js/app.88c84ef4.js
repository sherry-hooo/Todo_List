(function(t){function e(e){for(var n,i,o=e[0],r=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==c[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},c={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"74141838"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=c[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=n);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=i(t);var l=new Error;s=function(e){r.onerror=r.onload=null,clearTimeout(u);var a=c[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}c[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:r})}),12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Todo_List/",o.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e4a":function(t,e,a){"use strict";a("af90")},"19d1":function(t,e,a){},2777:function(t,e,a){},"2eb1":function(t,e,a){"use strict";a("19d1")},"43fe":function(t,e,a){"use strict";var n=a("7a23"),c=function(t){return Object(n["v"])("data-v-f7ffba26"),t=t(),Object(n["t"])(),t},s=["id"],i=["for"],o=["id"],r=c((function(){return Object(n["g"])("span",null,null,-1)})),l=["disabled"],u=["for"],d=["disabled","id"],f=c((function(){return Object(n["g"])("i",{class:"fa-fw far fa-star"},null,-1)})),k=["for"],b=["id"],p=c((function(){return Object(n["g"])("i",{class:"fas fa-pencil-alt"},null,-1)})),m={key:0,class:"content_thumbnails"},O={key:0,class:"far fa-calendar-alt fa-fw"},g={key:1},j={key:2,class:"far fa-file fa-fw"},h={key:3,class:"far fa-comment-dots"},T={key:0,class:"form_body"},v={class:"column_deadline"},D=c((function(){return Object(n["g"])("legend",null,[Object(n["g"])("i",{class:"far fa-fw fa-calendar-alt"}),Object(n["h"])("Deadline")],-1)})),y={for:"date"},C=["disabled"],_={for:"time"},w=["disabled"],P={class:"column_file"},I=c((function(){return Object(n["g"])("legend",null,[Object(n["g"])("i",{class:"far fa-fw fa-file"}),Object(n["h"])("File")],-1)})),S={key:0},N=["disabled"],x=c((function(){return Object(n["g"])("span",{class:"file_icon"},null,-1)})),F={class:"column_comment"},A=c((function(){return Object(n["g"])("legend",null,[Object(n["g"])("i",{class:"far fa-fw fa-comment-dots"}),Object(n["h"])("Comment")],-1)})),M=["disabled"],E={key:1,class:"form_footer"},H=["disabled"];function L(t,e,a,c,L,U){return Object(n["s"])(),Object(n["f"])("form",{class:Object(n["o"])(["form",{dragging:!L.taskChecked&&!L.taskPen}]),draggable:"true",id:a.task.id},[Object(n["g"])("div",{class:Object(n["o"])(["form_header",{header_fill:L.taskStar}])},[Object(n["g"])("label",{for:"check-".concat(a.task.id),class:"checkbox_icon"},[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return L.taskChecked=t}),onClick:e[1]||(e[1]=function(){return U.completeTask&&U.completeTask.apply(U,arguments)}),type:"checkbox",id:"check-".concat(a.task.id)},null,8,o),[[n["D"],L.taskChecked]]),r],8,i),Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return L.taskTitle=t}),class:Object(n["o"])({complete_task:L.taskChecked}),disabled:!L.taskPen,type:"text",placeholder:"Type Something Here..."},null,10,l),[[n["E"],L.taskTitle]]),Object(n["g"])("label",{for:"star-".concat(a.task.id),class:"star_icon"},[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return L.taskStar=t}),onClick:e[4]||(e[4]=function(){return U.setImportant&&U.setImportant.apply(U,arguments)}),disabled:L.taskChecked,type:"checkbox",id:"star-".concat(a.task.id)},null,8,d),[[n["D"],L.taskStar]]),f],8,u),Object(n["g"])("label",{for:"pen-".concat(a.task.id),class:"pen_icon"},[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return L.taskPen=t}),onClick:e[6]||(e[6]=function(){return U.editTask&&U.editTask.apply(U,arguments)}),type:"checkbox",id:"pen-".concat(a.task.id)},null,8,b),[[n["D"],L.taskPen]]),p],8,k),L.taskChecked?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("div",m,[L.taskDate?(Object(n["s"])(),Object(n["f"])("i",O)):Object(n["e"])("",!0),L.taskDate?(Object(n["s"])(),Object(n["f"])("span",g,Object(n["B"])(U.briefDate),1)):Object(n["e"])("",!0),L.taskFile?(Object(n["s"])(),Object(n["f"])("i",j)):Object(n["e"])("",!0),L.taskComment?(Object(n["s"])(),Object(n["f"])("i",h)):Object(n["e"])("",!0)]))],2),!0===L.taskPen?(Object(n["s"])(),Object(n["f"])("div",T,[Object(n["g"])("fieldset",v,[D,Object(n["g"])("div",null,[Object(n["g"])("label",y,[Object(n["H"])(Object(n["g"])("input",{disabled:L.taskChecked,"onUpdate:modelValue":e[7]||(e[7]=function(t){return L.taskDate=t}),type:"date",id:"date"},null,8,C),[[n["E"],L.taskDate]])]),Object(n["g"])("label",_,[Object(n["H"])(Object(n["g"])("input",{disabled:L.taskChecked,"onUpdate:modelValue":e[8]||(e[8]=function(t){return L.taskTime=t}),type:"time",id:"time"},null,8,w),[[n["E"],L.taskTime]])])])]),Object(n["g"])("fieldset",P,[I,Object(n["g"])("label",{for:"attachment",onChange:e[9]||(e[9]=function(){return U.getAttachment&&U.getAttachment.apply(U,arguments)})},[L.fileName?(Object(n["s"])(),Object(n["f"])("div",S,[Object(n["g"])("p",null,Object(n["B"])(L.fileName),1),Object(n["g"])("p",null,Object(n["B"])(L.fileTimeFromNow),1)])):Object(n["e"])("",!0),Object(n["g"])("input",{disabled:L.taskChecked,type:"file",id:"attachment"},null,8,N),x],32)]),Object(n["g"])("fieldset",F,[A,Object(n["H"])(Object(n["g"])("textarea",{disabled:L.taskChecked,"onUpdate:modelValue":e[10]||(e[10]=function(t){return L.taskComment=t}),name:"",id:""},null,8,M),[[n["E"],L.taskComment]])])])):Object(n["e"])("",!0),!0===L.taskPen?(Object(n["s"])(),Object(n["f"])("div",E,[Object(n["g"])("button",{class:"cancel_button",onClick:e[11]||(e[11]=function(){return U.cancelTask&&U.cancelTask.apply(U,arguments)})},"Cancel"),Object(n["g"])("button",{disabled:L.taskChecked,class:"save_button",onClick:e[12]||(e[12]=function(){return U.saveTask&&U.saveTask.apply(U,arguments)})}," + Add Task ",8,H)])):Object(n["e"])("",!0)],10,s)}a("ac1f"),a("5319"),a("fb6a"),a("b0c0");var U=a("5a0c"),V=a.n(U),$=a("4208"),Y=a.n($);V.a.extend(Y.a);var B={props:{task:{type:Object,required:!0}},data:function(){return{taskTitle:this.task.taskTitle,taskDate:this.task.taskDate,taskTime:this.task.taskTime,taskFile:this.task.taskFile,taskComment:this.task.taskComment,taskStar:this.task.taskStar,taskPen:this.task.taskPen,taskChecked:this.task.taskChecked,taskDeleted:!1,fileTimeFromNow:"",fileName:""}},computed:{taskData:function(){var t={id:this.task.id,taskStar:this.taskStar,taskPen:this.taskPen,taskChecked:this.taskChecked,taskDeleted:this.taskDeleted,taskTitle:this.taskTitle,taskDate:this.taskDate,taskTime:this.taskTime,taskFile:this.taskFile,taskComment:this.taskComment};return t},briefDate:function(){return this.taskDate.slice(5).replace("-","/")}},methods:{cancelTask:function(t){t.preventDefault(),this.taskPen=!1,this.$emit("editTask",this.taskData)},saveTask:function(t){t.preventDefault(),this.taskPen=!1,this.$emit("editTask",this.taskData)},getAttachment:function(t){var e=t.target.files[0].name;e&&(this.taskFile=!0),this.fileName=e;var a=V()(new Date).format("YYYY-MM-DD");this.fileTimeFromNow=V()(a).fromNow()},setImportant:function(t){this.taskStar=t.target.checked,this.$emit("editTask",this.taskData)},editTask:function(t){this.taskPen=t.target.checked,this.$emit("editTask",this.taskData)},completeTask:function(t){var e=this;this.taskChecked=t.target.checked,setTimeout((function(){e.$emit("editTask",e.taskData)}),500)},deleteTask:function(t){this.taskDeleted=t.target.checked,this.$emit("editTask",this.taskData)},wheelEvent:function(){}}},J=(a("46cb"),a("6b0d")),z=a.n(J);const q=z()(B,[["render",L],["__scopeId","data-v-f7ffba26"]]);e["a"]=q},"46cb":function(t,e,a){"use strict";a("dcce")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=Object(n["h"])("My Tasks"),s=Object(n["h"])("In Progress"),i=Object(n["h"])("Completed");function o(t,e,a,o,r,l){var u=Object(n["z"])("router-link"),d=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("header",null,[Object(n["g"])("nav",null,[Object(n["i"])(u,{to:"/",active:"",onClick:l.toggleMenu,class:"myTask"},{default:Object(n["G"])((function(){return[c]})),_:1},8,["onClick"]),Object(n["i"])(u,{to:"/inProgress",onClick:l.toggleMenu,class:"inProgress"},{default:Object(n["G"])((function(){return[s]})),_:1},8,["onClick"]),Object(n["i"])(u,{to:"/completed",onClick:l.toggleMenu,class:"completed"},{default:Object(n["G"])((function(){return[i]})),_:1},8,["onClick"]),Object(n["g"])("i",{class:"fas fa-caret-down toggle_btn",onClick:e[0]||(e[0]=function(){return l.toggleMenu&&l.toggleMenu.apply(l,arguments)})})])]),Object(n["i"])(d)],64)}var r={data:function(){return{}},methods:{toggleMenu:function(){var t=document.querySelector("header");t.classList.toggle("openMenu")}}},l=(a("ba18"),a("6b0d")),u=a.n(l);const d=u()(r,[["render",o]]);var f=d,k=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),b=(a("b0c0"),{class:"displayCounts"});function p(t,e,a,c,s,i){var o=Object(n["z"])("Template"),r=Object(n["z"])("Task"),l=Object(n["z"])("Trash");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("main",null,[s.openTemplate?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("button",{key:0,class:"addTask_button",onClick:e[0]||(e[0]=function(t){return s.openTemplate=!s.openTemplate})}," + Add Task ")),s.openTemplate?(Object(n["s"])(),Object(n["d"])(o,{key:1,onTemplateAction:i.getTemplateAction,onCreateTask:i.getNewTaskData},null,8,["onTemplateAction","onCreateTask"])):Object(n["e"])("",!0),Object(n["g"])("section",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(s.allTaskData,(function(t){return Object(n["s"])(),Object(n["d"])(r,{key:t.id,task:t,onEditTask:i.editTask,onDragstart:i.dragTask},null,8,["task","onEditTask","onDragstart"])})),128))]),Object(n["g"])("p",b,[Object(n["h"])(Object(n["B"])(i.leftTasksCount)+" tasks ",1),Object(n["g"])("span",null,Object(n["B"])("Completed"===t.$router.name?"completed":"left"),1)])]),Object(n["g"])("footer",null,[Object(n["i"])(l,{draggingTaskId:s.draggingTaskId,onDeleteTask:i.deleteTask},null,8,["draggingTaskId","onDeleteTask"])])],64)}a("e9c4"),a("d81d"),a("c740"),a("a434"),a("a9e3"),a("4de4");var m=function(t){return Object(n["v"])("data-v-908e387a"),t=t(),Object(n["t"])(),t},O={class:"form"},g={for:"checkbox"},j=m((function(){return Object(n["g"])("span",null,null,-1)})),h={for:"star"},T=m((function(){return Object(n["g"])("i",{class:"fa-fw far fa-star star_icon","data-name":"star","data-on":"false"},null,-1)})),v={for:"pen"},D=m((function(){return Object(n["g"])("i",{class:"fa-fw far fa-edit pen_icon","data-name":"pen","data-on":"false"},null,-1)})),y={class:"form_body"},C={class:"column_deadline"},_=m((function(){return Object(n["g"])("legend",null,[Object(n["g"])("i",{class:"far fa-fw fa-calendar-alt"}),Object(n["h"])("Deadline")],-1)})),w={for:"date"},P={for:"time"},I={class:"column_file"},S=m((function(){return Object(n["g"])("legend",null,[Object(n["g"])("i",{class:"far fa-fw fa-file"}),Object(n["h"])("File")],-1)})),N={for:"attachment"},x={key:0},F=m((function(){return Object(n["g"])("span",{class:"file_icon"},null,-1)})),A={class:"column_comment"},M=m((function(){return Object(n["g"])("legend",null,[Object(n["g"])("i",{class:"far fa-fw fa-comment-dots"}),Object(n["h"])("Comment")],-1)})),E={class:"form_footer"};function H(t,e,a,c,s,i){return Object(n["s"])(),Object(n["f"])("form",O,[Object(n["g"])("div",{class:Object(n["o"])(["form_header",{header_fill:s.taskStar}])},[Object(n["g"])("label",g,[j,Object(n["H"])(Object(n["g"])("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":e[0]||(e[0]=function(t){return s.taskChecked=t})},null,512),[[n["D"],s.taskChecked]])]),Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.taskTitle=t}),type:"text",placeholder:"Type Something Here..."},null,512),[[n["E"],s.taskTitle]]),Object(n["g"])("label",h,[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.taskStar=t}),type:"checkbox",id:"star"},null,512),[[n["D"],s.taskStar]]),T]),Object(n["g"])("label",v,[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return s.taskPen=t}),type:"checkbox",id:"pen"},null,512),[[n["D"],s.taskPen]]),D])],2),Object(n["g"])("div",y,[Object(n["g"])("fieldset",C,[_,Object(n["g"])("div",null,[Object(n["g"])("label",w,[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.taskDate=t}),type:"date",id:"date"},null,512),[[n["E"],s.taskDate]])]),Object(n["g"])("label",P,[Object(n["H"])(Object(n["g"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return s.taskTime=t}),type:"time",id:"time"},null,512),[[n["E"],s.taskTime]])])])]),Object(n["g"])("fieldset",I,[S,Object(n["g"])("label",N,[s.fileName?(Object(n["s"])(),Object(n["f"])("div",x,[Object(n["g"])("p",null,Object(n["B"])(s.fileName),1),Object(n["g"])("p",null,Object(n["B"])(i.uploadTimeFromNow),1)])):Object(n["e"])("",!0),Object(n["g"])("input",{type:"file",id:"attachment",onChange:e[6]||(e[6]=function(){return i.getFileDetail&&i.getFileDetail.apply(i,arguments)})},null,32),F])]),Object(n["g"])("fieldset",A,[M,Object(n["H"])(Object(n["g"])("textarea",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return s.taskComment=t}),name:"",id:""},null,512),[[n["E"],s.taskComment]])])]),Object(n["g"])("div",E,[Object(n["g"])("button",{class:"cancel_button",onClick:e[8]||(e[8]=function(){return i.cancelTask&&i.cancelTask.apply(i,arguments)})},"Cancel"),Object(n["g"])("button",{class:"save_button",onClick:e[9]||(e[9]=function(){return i.createTask&&i.createTask.apply(i,arguments)})},"+ Add Task")])])}var L=a("5a0c"),U=a.n(L),V=a("4208"),$=a.n(V),Y={data:function(){return{taskTitle:"",taskDate:"",taskTime:"",taskFile:"",taskComment:"",taskStar:!1,taskPen:!0,taskChecked:!1,fileName:null}},computed:{taskData:function(){var t={id:(new Date).valueOf(),taskStar:this.taskStar,taskPen:!1,taskChecked:this.taskChecked,taskTitle:this.taskTitle,taskDate:this.taskDate,taskTime:this.taskTime,taskFile:this.taskFile,taskComment:this.taskComment};return t},uploadTimeFromNow:function(){return U.a.extend($.a),U()(this.taskDate).fromNow()}},methods:{cancelTask:function(t){t.preventDefault(),this.$emit("templateAction","cancelTask")},createTask:function(t){t.preventDefault(),this.$emit("templateAction","createTask"),this.$emit("createTask",this.taskData)},getFileDetail:function(t){var e=t.target.files[0].name;e&&(this.taskFile=!0),this.fileName=e;var a=U()(new Date).format("YYYY-MM-DD");this.uploadTimeFromNow=U()(a).fromNow()}}};a("f66b");const B=u()(Y,[["render",H],["__scopeId","data-v-908e387a"]]);var J=B,z=a("43fe"),q=a("72b0"),G={props:[],name:"MyTask",components:{Template:J,Task:z["a"],Trash:q["a"]},data:function(){return{openTemplate:!1,templateAction:"",allTaskData:JSON.parse(localStorage.getItem("taskList"))||[],draggingTaskId:""}},methods:{getTemplateAction:function(t){this.templateAction=t,this.openTemplate=!1},getNewTaskData:function(t){this.allTaskData.push(t),this.storageData("taskList",this.allTaskData)},storageData:function(t,e){localStorage.setItem(t,JSON.stringify(e))},renderTask:function(){JSON.parse(localStorage.getItem("taskList"))},editTask:function(t){var e=this.allTaskData.map((function(e){return e.id===t.id&&(e=t),e}));this.storageData("taskList",e),t.taskStar&&this.lineTop(t.id)},lineTop:function(t){var e=this,a=this.allTaskData.findIndex((function(e){return e.id===t}));function n(t,e,a){var n=a.splice(t,1)[0];return a.splice(e,0,n),a}setTimeout((function(){n(a,0,e.allTaskData)}),300)},dragTask:function(t){this.draggingTaskId=t.target.id},deleteTask:function(t){this.allTaskData=JSON.parse(localStorage.getItem("taskList"))||[];var e=this.allTaskData.findIndex((function(e){return e.id===Number(t)}));this.allTaskData.splice(e,1),this.storageData("taskList",this.allTaskData)}},computed:{leftTasksCount:function(){return this.allTaskData.filter((function(t){return 1!=t.taskChecked})).length}}};a("0e4a");const K=u()(G,[["render",p],["__scopeId","data-v-e3424b3e"]]);var Q=K,R=[{path:"/",name:"MyTasks",component:Q},{path:"/inProgress",name:"InProgress",component:function(){return a.e("about").then(a.bind(null,"d73f"))}},{path:"/completed",name:"Completed",component:function(){return a.e("about").then(a.bind(null,"cc90"))}}],W=Object(k["a"])({history:Object(k["b"])("/Todo_List/"),routes:R}),X=W,Z=a("5502"),tt=Object(Z["a"])({state:{deletedId:""},mutations:{deletedId:function(t,e){t.deletedId=e}},actions:{storeDeletedId:function(t,e){t.commit("deletedId",e)}},modules:{}});a("c1c3");Object(n["c"])(f).use(tt).use(X).mount("#app")},"72b0":function(t,e,a){"use strict";var n=a("7a23"),c=function(t){return Object(n["v"])("data-v-7a2967b0"),t=t(),Object(n["t"])(),t},s=c((function(){return Object(n["g"])("i",{class:"far fa-trash-alt fa-fw"},null,-1)})),i=[s];function o(t,e,a,c,s,o){return Object(n["s"])(),Object(n["f"])("div",{class:Object(n["o"])(["delete_area",{drop:s.enterDropArea}]),onDrop:e[0]||(e[0]=Object(n["I"])((function(){return o.drogToDelete&&o.drogToDelete.apply(o,arguments)}),["prevent"])),onDragover:e[1]||(e[1]=Object(n["I"])((function(){return t.dragOver&&t.dragOver.apply(t,arguments)}),["prevent"])),onDragleave:e[2]||(e[2]=function(){return o.dragLeave&&o.dragLeave.apply(o,arguments)}),onDragenter:e[3]||(e[3]=function(){return o.dragEnter&&o.dragEnter.apply(o,arguments)})},i,34)}var r={props:["draggingTaskId"],data:function(){return{enterDropArea:!1}},methods:{drogToDelete:function(){var t=this.draggingTaskId;this.$emit("deleteTask",t),this.enterDropArea=!1},dragEnter:function(){this.enterDropArea=!0},dragLeave:function(t){t.stopImmediatePropagation(),t.relatedTarget.nodeName&&"I"===t.target.nodeName||(this.enterDropArea=!1)}}},l=(a("2eb1"),a("6b0d")),u=a.n(l);const d=u()(r,[["render",o],["__scopeId","data-v-7a2967b0"]]);e["a"]=d},af90:function(t,e,a){},ba18:function(t,e,a){"use strict";a("ea93")},c1c3:function(t,e,a){},dcce:function(t,e,a){},ea93:function(t,e,a){},f66b:function(t,e,a){"use strict";a("2777")}});
//# sourceMappingURL=app.88c84ef4.js.map