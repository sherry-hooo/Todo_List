<template>
  <section v-if="allTaskData">
    <Task
      v-for="task in allProgressTasks"
      :key="task.id"
      :task="task"
      @editTask="editTask"
    ></Task>
  </section>
  <!-- <pre>{{ allProgressTasks }}</pre> -->
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
    editTask(data) {
      console.log(data);
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
