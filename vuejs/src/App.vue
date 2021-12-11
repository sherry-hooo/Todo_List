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
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      let header = document.querySelector("header");
      header.classList.toggle("openMenu");
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
  .displayCounts {
    font-family: Roboto-Italic;
    color: global.$medium-grey;
    text-align: center;
  }
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
</style>
