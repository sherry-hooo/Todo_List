<template>
  <main>
    <button
      class="addTask_button"
      @click="openTemplate = !openTemplate"
      v-if="!openTemplate"
    >
      &plus; Add Task
    </button>
    <Template
      v-if="openTemplate"
      @templateAction="getTemplateAction"
      @createTask="getNewTaskData"
    >
    </Template>
    <section>
      <Task
        v-for="task in allTaskData"
        :key="task.id"
        :task="task"
        @editTask="editTask"
        @dragstart="dragTask"
      ></Task>
    </section>
    <p class="displayCounts">
      {{ leftTasksCount }} tasks
      <span>{{ $router.name === "Completed" ? "completed" : "left" }}</span>
    </p>
  </main>
  <footer>
    <Trash :draggingTaskId="draggingTaskId" @deleteTask="deleteTask"></Trash>
  </footer>
</template>

<script>
import Template from "@/components/Template.vue";
import Task from "@/components/Task.vue";
import Trash from "@/components/Trash.vue";

export default {
  props: [],
  name: "MyTask",
  components: {
    Template,
    Task,
    Trash,
  },
  data() {
    return {
      openTemplate: false,
      templateAction: "",
      allTaskData: JSON.parse(localStorage.getItem("taskList")) || [],
      draggingTaskId: "",
    };
  },
  methods: {
    getTemplateAction(templateStatus) {
      this.templateAction = templateStatus;
      this.openTemplate = false;
    },
    getNewTaskData(taskData) {
      this.allTaskData.push(taskData);
      // this.sortTasks(this.allTaskData);
      this.storageData("taskList", this.allTaskData);
    },
    storageData(dataName, data) {
      // 存local
      localStorage.setItem(dataName, JSON.stringify(data));
    },
    renderTask() {
      JSON.parse(localStorage.getItem("taskList")) || [];
    },
    editTask(modifiedContent) {
      let newAllTaskData = this.allTaskData.map((task) => {
        if (task.id === modifiedContent.id) {
          task = modifiedContent;
        }
        return task;
      });
      this.storageData("taskList", newAllTaskData);
      if (modifiedContent.taskStar) {
        console.log("置頂");
        this.lineTop(modifiedContent.id);
      }
    },
    lineTop(starTaskId) {
      let fromIndex = this.allTaskData.findIndex(
        (task) => task.id === starTaskId
      );
      move(fromIndex, 0, this.allTaskData);
      // 排序function
      function move(fromIndex, to, arr) {
        const item = arr.splice(fromIndex, 1)[0];
        arr.splice(to, 0, item);
        return arr;
      }
    },
    dragTask(event) {
      this.draggingTaskId = event.target.id;
    },
    deleteTask(taskId) {
      // console.log("Mytask收到要刪除", taskId);
      this.allTaskData = JSON.parse(localStorage.getItem("taskList")) || [];

      let deleteTaskIndex = this.allTaskData.findIndex(
        (task) => task.id === Number(taskId)
      );
      this.allTaskData.splice(deleteTaskIndex, 1);
      this.storageData("taskList", this.allTaskData);
    },
  },
  computed: {
    leftTasksCount() {
      return this.allTaskData.filter((task) => task.taskChecked != true).length;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/component/_button.scss";

.addTask_button {
  display: block;
  width: 300px;
  height: 55px;
  margin: 0 auto 1rem;
  @include global.mobile {
    width: 500px;
    height: 65px;
  }
  @include global.tablet {
    width: 620px;
  }
}
</style>
