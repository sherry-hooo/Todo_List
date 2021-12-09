<template>
  <main>
    <section v-if="allTaskData">
      <Task
        v-for="task in allProgressTasks"
        :key="task.id"
        :task="task"
        @editTask="editTask"
      ></Task>
    </section>
  </main>
  <footer>
    <p>
      {{ allProgressTasks.length }} tasks
      <span>{{ $router.name === "Completed" ? "completed" : "left" }}</span>
    </p>
  </footer>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  components: { Task },
  data() {
    return {
      allTaskData: [],
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
