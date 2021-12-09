<template>
  <form class="form">
    <div class="form_header" :class="{ header_fill: taskStar }">
      <label :for="`check-${task.id}`" class="checkbox_icon">
        <input
          v-model="taskChecked"
          @click="completeTask"
          type="checkbox"
          :id="`check-${task.id}`"
        />
        <span></span>
      </label>
      <input
        v-model="taskTitle"
        :class="{ complete_task: taskChecked }"
        :disabled="!taskPen"
        type="text"
        placeholder="Type Something Here..."
      />
      <label :for="`star-${task.id}`" class="star_icon">
        <!-- star click 事件 -->
        <input
          v-model="taskStar"
          @click="setImportant"
          type="checkbox"
          :id="`star-${task.id}`"
        />
        <i class="fa-fw far fa-star"></i>
      </label>
      <label :for="`pen-${task.id}`" class="pen_icon">
        <!--  v-model -->
        <input
          v-model="taskPen"
          @click="editTask"
          type="checkbox"
          :id="`pen-${task.id}`"
        />
        <i class="fa-fw far fa-edit"></i>
      </label>
    </div>
    <div class="form_body" v-if="taskPen === true">
      <fieldset class="column_deadline">
        <legend><i class="far fa-fw fa-calendar-alt"></i>Deadline</legend>
        <div>
          <label for="date">
            <input v-model="taskDate" type="date" id="date" />
          </label>
          <label for="time">
            <input v-model="taskTime" type="time" id="time" />
          </label>
        </div>
      </fieldset>
      <fieldset class="column_file">
        <legend><i class="far fa-fw fa-file"></i>File</legend>
        <label for="attachment" @change="getAttachment">
          <input type="file" id="attachment" />
          <span></span>
        </label>
      </fieldset>
      <fieldset class="column_comment">
        <legend><i class="far fa-fw fa-comment-dots"></i>Comment</legend>
        <textarea v-model="taskComment" name="" id=""></textarea>
      </fieldset>
    </div>
    <div class="form_footer" v-if="taskPen === true">
      <button class="cancel_button" @click="cancelTask">Cancel</button>
      <button class="save_button" @click="saveTask">&plus; Add Task</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["task", "key"],
  data() {
    return {
      taskTitle: this.task.taskTitle,
      taskDate: this.task.taskDate,
      taskTime: this.task.taskTime,
      taskFile: this.task.taskFile,
      taskComment: this.task.taskComment,
      taskStar: this.task.taskStar,
      taskPen: this.task.taskPen,
      taskChecked: this.task.taskChecked,
    };
  },
  computed: {
    taskData() {
      let task = {
        id: this.task.id,
        taskStar: this.taskStar,
        taskPen: this.taskPen,
        taskChecked: this.taskChecked,
        taskTitle: this.taskTitle,
        taskDate: this.taskDate,
        taskTime: this.taskTime,
        taskFile: this.taskFile,
        taskComment: this.taskComment,
      };
      return task;
    },
  },
  methods: {
    cancelTask(event) {
      event.preventDefault();
      this.taskPen = false;
      this.$emit("editTask", this.taskData);
    },
    saveTask(event) {
      event.preventDefault();
      this.taskPen = false;
      this.$emit("editTask", this.taskData);
      console.log(this.task.id);
    },
    getAttachment(event) {
      console.log(event);
    },
    setImportant(event) {
      //置頂action
      this.taskStar = event.target.checked;
      this.$emit("editTask", this.taskData);
    },
    editTask(event) {
      // 展開編輯模式
      this.taskPen = event.target.checked;
      this.$emit("editTask", this.taskData);
    },
    completeTask(event) {
      this.taskChecked = event.target.checked;
      this.$emit("editTask", this.taskData);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  // outline: 1px solid green;
}
.form {
  background: global.$pale-grey;
  width: 300px;
  margin: 0 auto 8px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 4px 4px global.$medium-grey;

  @include global.mobile {
    width: 500px;
  }
  @include global.tablet {
    width: 620px;
  }

  .header_fill {
    background: global.$light-yellow;
  }
  &_header {
    display: flex;
    align-items: center;
    padding: 1rem;
    @include global.tablet {
      padding: 28px 32px;
    }
    > * + * {
      margin-left: 10px;
      @include global.tablet {
        margin-left: 20px;
      }
    }
    & > label {
      font-size: 0;
    }
    input[type="checkbox"] {
      display: none;
    }
    input[type="text"] {
      flex: 1 2 150px;
      font-size: 16px;

      &::placeholder {
        color: black;
      }
      @include global.tablet {
        font-size: 20px;
      }
    }
    .checkbox_icon > span {
      display: inline-block;
      min-width: 20px;
      height: 20px;
      line-height: 20px;
      background: global.$white;
      position: relative;
      text-align: center;
      border-radius: 2px;

      &:hover::after {
        content: "\2713";
        font-size: 16px;
        color: global.$light-grey;
        vertical-align: middle;
      }

      @include global.tablet {
        min-width: 24px;
        height: 24px;
        line-height: 24px;
      }
    }
    i {
      font-size: 20px;
      transition: all 0.2s ease-in-out;

      @include global.tablet {
        font-size: 24px;
      }
    }
  }
  &_body {
    border-top: 2px solid global.$medium-grey;
    padding: 1rem;
    @include global.tablet {
      padding: 24px 72px;
    }
    fieldset {
      display: flex;
      & + fieldset {
        margin-top: 1rem;
      }
    }
    legend {
      margin-bottom: 8px;
      & > i {
        margin-right: 1rem;
      }
      & + * {
        margin-left: 1rem;
      }
    }
  }
  &_footer {
    font-size: 0;
    button {
      width: 50%;
      padding: 16px 0;
    }
    .cancel_button {
      background: global.$white;
      color: global.$red;
      border-radius: 0 0 0 5px;
    }
    .save_button {
      background: global.$light-blue;
      color: white;
      border-radius: 0 0 5px 0;
    }
  }
}

.column_deadline {
  input {
    background: global.$white;
    color: global.$medium-grey;
  }
  input[type="date" i]::-webkit-calendar-picker-indicator,
  input[type="time" i]::-webkit-calendar-picker-indicator {
    opacity: 0;
    margin: 0;
    width: 100%;
    position: absolute;
  }
}
.column_file {
  label[for="attachment"] {
    display: flex;
    span {
      width: 32px;
      height: 32px;
      background: global.$medium-grey;
      border-radius: 2px;
      text-align: center;
      position: relative;
      &:before {
        content: "";
        display: inline-block;
        height: 1px;
        width: 16px;
        color: white;
        background: #ffffff;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
      }
      &:after {
        content: "";
        display: inline-block;
        height: 1px;
        width: 16px;
        transform: rotate(90deg);
        color: white;
        background: #ffffff;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
      }
    }
    input[type="file"] {
      width: 100px;
    }
    input[type="file" i]::-webkit-file-upload-button {
      display: none;
    }
  }
}
.column_comment {
  textarea {
    background: global.$white;
    width: 80%;
    height: 120px;
    padding: 1rem;
  }
}

// 點擊 input 讓 icon 變亮
.star_icon > input[type="checkbox"]:checked + i {
  color: global.$dark-yellow;
  font-weight: 900;
  transition: all 0.2s ease-in-out;
}

.pen_icon > input[type="checkbox"]:checked + i {
  color: global.$light-blue;
  font-weight: 900;
  transition: all 0.2s ease-in-out;
}

// checkbox 打勾效果
.checkbox_icon > input[type="checkbox"]:checked + span {
  box-shadow: inset 0 0 0 15px global.$light-blue;
  transition: all 0.3s ease-in-out;
  &::after {
    content: "\2713";
    font-size: 16px;
    color: white;
  }
}

// 刪除線
.complete_task {
  text-decoration: line-through;
  color: global.$medium-grey;
}
</style>
