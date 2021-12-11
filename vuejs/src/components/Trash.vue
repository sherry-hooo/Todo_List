<template>
  <div
    class="delete_area"
    @drop.prevent="drogToDelete"
    @dragover.prevent="dragOver"
    @dragleave="dragLeave"
    @dragenter="dragEnter"
    :class="{ drop: enterDropArea }"
  >
    <i class="far fa-trash-alt fa-fw"></i>
  </div>
</template>

<script>
export default {
  props: ["draggingTaskId"],
  data() {
    return {
      enterDropArea: false,
    };
  },
  methods: {
    drogToDelete() {
      let deleteTaskId = this.draggingTaskId;
      this.$emit("deleteTask", deleteTaskId);
      this.enterDropArea = false;
    },
    dragOver() {
      // console.log("dragover");
      // console.log(event);
      // this.enter = true;
    },
    // 為了增加樣式
    dragEnter(e) {
      console.log("enter", e.target.nodeName);
      this.enterDropArea = true;
    },
    dragLeave(event) {
      event.stopImmediatePropagation();
      if (event.relatedTarget.nodeName && event.target.nodeName === "I") {
        console.log("進入i");
        return;
      }
      // console.log("leave", event.target.nodeName);
      // console.log(event);
      this.enterDropArea = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.delete_area {
  width: 400px;
  height: 100px;
  border-radius: 200px 200px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  i {
    display: none;
    cursor: pointer;
  }
}

.drop {
  height: 200px;
  background: #c8c8c86b;
  transition: height 0.4s ease-in-out, background-color 0.6s linear;
  animation: slow_breathing 1.4s linear infinite alternate;

  i {
    display: block;
    font-size: 55px;
    animation: breathing 0.3s linear infinite alternate;
  }
}

@keyframes breathing {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes slow_breathing {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
