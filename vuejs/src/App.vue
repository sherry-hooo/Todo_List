<template>
  <header>
    <nav>
      <router-link to="/" active @click="toggleMenu" class="myTask"
        >My Tasks</router-link
      >
      <router-link to="/inProgress" @click="toggleMenu" class="inProgress"
        >In Progress</router-link
      >
      <router-link to="/completed" @click="toggleMenu" class="completed"
        >Completed</router-link
      >
      <i class="fas fa-caret-down toggle_btn" @click="toggleMenu"></i>
    </nav>
  </header>
  <router-view />
  <div
    class="delete_area"
    @drop="dragToTrash"
    @dragover.prevent="dragOver"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    :class="{ drop: enter }"
  >
    <i class="far fa-trash-alt fa-fw"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteTaskId: "",
      enter: false,
    };
  },
  methods: {
    toggleMenu() {
      let header = document.querySelector("header");
      header.classList.toggle("openMenu");
    },
    dragToTrash(event) {
      event.preventDefault();
      console.log(this.deleteTaskId, "drop");
    },
    dragStart(event) {
      console.log(event.target.id);
      console.dir(event.target);
      this.deleteTaskId = event.target.id;
    },
    dragOver() {
      // console.log(event);
      // this.enter = true;
    },
    dragEnter(event) {
      // 怎樣可以避免取到 i?
      event.preventDefault();
      if (event.target.nodeName !== "DIV") {
        return;
      }
      console.log("enter", event.target.nodeName);
      this.enter = true;
    },
    dragLeave(event) {
      if (event.target.nodeName !== "DIV") {
        return;
      }
      console.log("leave", event.target.nodeName);
      this.enter = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto-Medium;
  background: global.$light-grey;
  min-height: 100vh;
}

header {
  background: global.$light-blue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.openMenu {
  nav > a {
    display: block;
  }
}

nav {
  display: flex;
  flex-direction: column;
  position: relative;
  a {
    display: none;
    color: global.$dark-blue;
    // font-size: 1rem;
    line-height: 28px;
    width: 220px;
    padding: 23px 0;
    text-align: center;
    &:hover {
      color: white;
    }
    &.router-link-exact-active {
      display: block;
      color: global.$white;
      order: 0;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: calc(100% - 5px);
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 5px;
        margin: auto;
        background: global.$dark-blue;
      }
    }
  }
  .completed {
    order: 3;
  }
  .myTask {
    order: 1;
  }
  .inProgress {
    order: 2;
  }
  .toggle_btn {
    align-self: flex-start;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: -25px;
  }
  @include global.tablet {
    flex-direction: row;
    position: unset;
    a {
      display: block;
      padding: 23px 0;

      &.router-link-exact-active {
        order: unset;
      }
    }
    .toggle_btn {
      display: none;
    }
    .completed,
    .myTask,
    .inProgress {
      order: unset;
    }
  }
}

main {
  padding: 24px 5px;

  @include global.mobile {
    padding: 24px;
  }
}
footer {
  font-family: Roboto-Italic;
  color: global.$medium-grey;
  text-align: center;
}

#app {
  position: relative;
  .delete_area {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 400px;
    height: 100px;
    margin: 0 auto;
    border-radius: 200px 200px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;
    i {
      display: none;
      cursor: pointer;
    }
    &:hover {
      height: 200px;
      background: #c8c8c86b;
      animation: slow_breathing 1.4s linear infinite alternate;
      transition: height 0.4s ease-in-out, background-color 0.6s linear;

      i {
        display: block;
        font-size: 55px;
        // transition: display 0.4s 2s ease-in-out;

        animation: breathing 0.3s linear infinite alternate;
      }
    }
  }
}

#app {
  .drop {
    height: 200px;
    background: #c8c8c86b;
    transition: height 0.4s ease-in-out, background-color 0.6s linear;
    animation: slow_breathing 1.4s linear infinite alternate;

    i {
      display: block;
      font-size: 55px;
      animation: breathing 0.3s linear infinite alternate;
      // transition: display 0.4s 2s ease-in-out;
    }
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
