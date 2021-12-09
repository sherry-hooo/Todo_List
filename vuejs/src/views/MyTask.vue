<template>
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
    ></Task>
  </section>
</template>

<script>
import Template from "@/components/Template.vue";
import Task from "../components/Task.vue";

export default {
  name: "MyTask",
  components: {
    Template,
    Task,
  },
  data() {
    return {
      openTemplate: false,
      templateAction: "",
      allTaskData: JSON.parse(localStorage.getItem("taskList")) || [],
    };
  },
  methods: {
    getTemplateAction(templateStatus) {
      this.templateAction = templateStatus;
      this.openTemplate = false;
    },
    getNewTaskData(taskData) {
      this.allTaskData.push(taskData);
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
