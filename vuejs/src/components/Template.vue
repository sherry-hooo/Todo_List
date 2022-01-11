<template>
  <form class="form">
    <div class="form_header" :class="{ header_fill: taskStar }">
      <label for="checkbox">
        <span></span>
        <input type="checkbox" id="checkbox" v-model="taskChecked" />
      </label>
      <input
        v-model="taskTitle"
        type="text"
        placeholder="Type Something Here..."
      />
      <label for="star">
        <input v-model="taskStar" type="checkbox" id="star" />
        <i
          class="fa-fw far fa-star star_icon"
          data-name="star"
          data-on="false"
        ></i>
      </label>
      <label for="pen">
        <input v-model="taskPen" type="checkbox" id="pen" />
        <i
          class="fa-fw far fa-edit pen_icon"
          data-name="pen"
          data-on="false"
        ></i>
      </label>
    </div>
    <div class="form_body">
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
        <label for="attachment">
          <div v-if="fileName">
            <p>{{ fileName }}</p>
            <p>{{ uploadTimeFromNow }}</p>
          </div>
          <input type="file" id="attachment" @change="getFileDetail" />
          <span class="file_icon"></span>
        </label>
      </fieldset>
      <fieldset class="column_comment">
        <legend><i class="far fa-fw fa-comment-dots"></i>Comment</legend>
        <textarea v-model="taskComment" name="" id=""></textarea>
      </fieldset>
    </div>
    <div class="form_footer">
      <button class="cancel_button" @click="cancelTask">Cancel</button>
      <button class="save_button" @click="createTask">&plus; Add Task</button>
    </div>
  </form>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default {
  data() {
    return {
      taskTitle: "",
      taskDate: "",
      taskTime: "",
      taskFile: "",
      taskComment: "",
      taskStar: false,
      taskPen: true,
      taskChecked: false,
      fileName: null,
      // uploadTimeFromNow: null,
    };
  },
  computed: {
    taskData() {
      let task = {
        id: new Date().valueOf(),
        taskStar: this.taskStar,
        taskPen: false,
        taskChecked: this.taskChecked,
        taskTitle: this.taskTitle,
        taskDate: this.taskDate,
        taskTime: this.taskTime,
        taskFile: this.taskFile,
        taskComment: this.taskComment,
      };
      return task;
    },
    uploadTimeFromNow() {
      dayjs.extend(relativeTime);
      console.log(dayjs(this.taskDate).fromNow());
      return dayjs(this.taskDate).fromNow();
    },
  },
  methods: {
    cancelTask(event) {
      event.preventDefault();
      this.$emit("templateAction", "cancelTask");
    },
    createTask(event) {
      event.preventDefault();
      this.$emit("templateAction", "createTask");
      this.$emit("createTask", this.taskData);
    },
    getFileDetail(event) {
      // file name
      let attachment = event.target.files[0].name;
      if (attachment) {
        this.taskFile = true;
      }
      this.fileName = attachment;

      //file time
      let uploadDate = dayjs(new Date()).format("YYYY-MM-DD");
      this.uploadTimeFromNow = dayjs(uploadDate).fromNow();
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
  margin: 0 auto 24px;
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
    label[for="checkbox"] > span {
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

  @include global.tablet {
    width: 620px;
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

    > div {
      margin-right: 1rem;
      p {
        font-size: 12px;
        color: global.$black;
        &:nth-child(2) {
          color: global.$dark-grey;
        }
      }
    }
    .file_icon {
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
      display: none;
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
input[type="checkbox"]:checked + .star_icon {
  color: global.$dark-yellow;
  font-weight: 900;
  transition: all 0.2s ease-in-out;
}

input[type="checkbox"]:checked + .pen_icon {
  color: global.$light-blue;
  font-weight: 900;
  transition: all 0.2s ease-in-out;
}

// checkbox 打勾效果
#checkbox:checked + span {
  box-shadow: inset 0 0 0 15px global.$light-blue;
  transition: all 0.3s ease-in-out;
  &::after {
    content: "\2713";
    font-size: 16px;
    color: white;
  }
}
</style>
