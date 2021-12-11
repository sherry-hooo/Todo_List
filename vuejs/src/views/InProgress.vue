<template>
  <main>
    <section v-if="allTaskData">
      <Task
        v-for="task in allProgressTasks"
        :key="task.id"
        :task="task"
        @editTask="editTask"
        @dragstart="dragTask"
      ></Task>
    </section>
    <p class="displayCounts">
      {{ allProgressTasks.length }} tasks
      <span>{{ $router.name === "Completed" ? "completed" : "left" }}</span>
    </p>
  </main>
  <footer>
    <Trash :draggingTaskId="draggingTaskId" @deleteTask="deleteTask"></Trash>
  </footer>
</template>

<script>
import Task from "@/components/Task.vue";
import Trash from "@/components/Trash.vue";

export default {
  components: { Task, Trash },
  data() {
    return {
      allTaskData: [],
      draggingTaskId: "",
    };
  },
  methods: {
    editTask(modifiedContent) {
      let newAllTaskData = this.allTaskData.map((task) => {
        if (task.id === modifiedContent.id) {
          task = modifiedContent;
        }
        return task;
      });
      this.allTaskData = newAllTaskData;
      this.storageData("taskList", newAllTaskData);
    },
    storageData(dataName, data) {
      // 存local
      localStorage.setItem(dataName, JSON.stringify(data));
    },
    dragTask(event) {
      this.draggingTaskId = event.target.id;
    },
    deleteTask(taskId) {
      this.allTaskData = JSON.parse(localStorage.getItem("taskList")) || [];

      let deleteTaskIndex = this.allTaskData.findIndex(
        (task) => task.id === Number(taskId)
      );
      this.allTaskData.splice(deleteTaskIndex, 1);
      this.storageData("taskList", this.allTaskData);
    },
  },
  computed: {
    allProgressTasks() {
      let allProgressTasks = this.allTaskData.filter(
        (task) => task.taskChecked === false
      );
      return allProgressTasks;
    },
  },
  created() {
    this.allTaskData = JSON.parse(localStorage.getItem("taskList"));
  },
};
</script>
