<template>
  <form
    class="form"
    :class="{ dragging: !taskChecked && !taskPen }"
    draggable="true"
    :id="task.id"
  >
    <div class="form_header" :class="{ header_fill: taskStar }">
      <!-- check -->
      <label :for="`check-${task.id}`" class="checkbox_icon">
        <input
          v-model="taskChecked"
          @click="completeTask"
          type="checkbox"
          :id="`check-${task.id}`"
        />
        <span></span>
      </label>
      <!-- title -->
      <input
        v-model="taskTitle"
        :class="{ complete_task: taskChecked }"
        :disabled="!taskPen"
        type="text"
        placeholder="Type Something Here..."
      />
      <!-- star  -->
      <label :for="`star-${task.id}`" class="star_icon">
        <input
          v-model="taskStar"
          @click="setImportant"
          :disabled="taskChecked"
          type="checkbox"
          :id="`star-${task.id}`"
        />
        <i class="fa-fw far fa-star"></i>
      </label>
      <!--  edit -->
      <label :for="`pen-${task.id}`" class="pen_icon">
        <input
          v-model="taskPen"
          @click="editTask"
          type="checkbox"
          :id="`pen-${task.id}`"
        />
        <i class="fas fa-pencil-alt"></i>
        <!-- <i class="fa-fw far fa-edit"></i> -->
      </label>
      <!-- 縮圖 -->
      <div v-if="!taskChecked" class="content_thumbnails">
        <i v-if="taskDate" class="far fa-calendar-alt fa-fw"></i>
        <span v-if="taskDate">{{ briefDate }}</span>
        <i v-if="taskFile" class="far fa-file fa-fw"></i>
        <i v-if="taskComment" class="far fa-comment-dots"></i>
      </div>
    </div>
    <div class="form_body" v-if="taskPen === true">
      <!-- 日期區 -->
      <fieldset class="column_deadline">
        <legend><i class="far fa-fw fa-calendar-alt"></i>Deadline</legend>
        <div>
          <label for="date">
            <input
              :disabled="taskChecked"
              v-model="taskDate"
              type="date"
              id="date"
            />
          </label>
          <label for="time">
            <input
              :disabled="taskChecked"
              v-model="taskTime"
              type="time"
              id="time"
            />
          </label>
        </div>
      </fieldset>
      <!-- 附件區 -->
      <fieldset class="column_file">
        <legend><i class="far fa-fw fa-file"></i>File</legend>
        <label for="attachment" @change="getAttachment">
          <div v-if="fileName">
            <p>{{ fileName }}</p>
            <p>{{ fileTimeFromNow }}</p>
          </div>
          <input :disabled="taskChecked" type="file" id="attachment" />
          <span class="file_icon"></span>
        </label>
      </fieldset>
      <!-- 留言區 -->
      <fieldset class="column_comment">
        <legend><i class="far fa-fw fa-comment-dots"></i>Comment</legend>
        <textarea
          :disabled="taskChecked"
          v-model="taskComment"
          name=""
          id=""
        ></textarea>
      </fieldset>
    </div>
    <div class="form_footer" v-if="taskPen === true">
      <button class="cancel_button" @click="cancelTask">Cancel</button>
      <button :disabled="taskChecked" class="save_button" @click="saveTask">
        &plus; Add Task
      </button>
    </div>
  </form>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
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
      taskDeleted: false,
      fileTimeFromNow: "",
      fileName: "",
    };
  },
  computed: {
    taskData() {
      let task = {
        id: this.task.id,
        taskStar: this.taskStar,
        taskPen: this.taskPen,
        taskChecked: this.taskChecked,
        taskDeleted: this.taskDeleted,
        taskTitle: this.taskTitle,
        taskDate: this.taskDate,
        taskTime: this.taskTime,
        taskFile: this.taskFile,
        taskComment: this.taskComment,
      };
      return task;
    },
    briefDate() {
      return this.taskDate.slice(5).replace("-", "/");
    },
    // uploadTimeFromNow() {
    //   dayjs.extend(relativeTime);
    //   console.log(dayjs("1999-01-01").fromNow());
    //   return "test";
    // },
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
    },
    getAttachment(event) {
      // file name
      let attachment = event.target.files[0].name;
      if (attachment) {
        this.taskFile = true;
      }
      this.fileName = attachment;

      //file time
      let uploadDate = dayjs(new Date()).format("YYYY-MM-DD");
      this.fileTimeFromNow = dayjs(uploadDate).fromNow();
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
      setTimeout(() => {
        this.$emit("editTask", this.taskData);
      }, 500);
    },
    deleteTask(event) {
      this.taskDeleted = event.target.checked;
      this.$emit("editTask", this.taskData);
    },
    wheelEvent(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/component/_form.scss";
@use "@/assets/scss/component/_dragging.scss";

* {
  // outline: 1px solid green;
}

// header 填色
.header_fill {
  background: global.$light-yellow;
}

// 刪除線
.complete_task {
  text-decoration: line-through;
  color: global.$medium-grey;
}

// 縮圖區
.content_thumbnails {
  flex: 1 1 100%;
  margin: 8px 0 0 28px;
  color: global.$dark-grey;
  font-size: 14px;
  span {
    margin-left: 5px;
  }
  * + i {
    margin-left: 8px;
  }
  i {
    font-size: 14px;
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
</style>
