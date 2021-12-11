import { createStore } from "vuex";

export default createStore({
  state: {
    deletedId: "",
  },
  mutations: {
    deletedId(state, status) {
      state.deletedId = status;
    },
  },
  actions: {
    storeDeletedId(context, status) {
      context.commit("deletedId", status);
    },
  },
  modules: {},
});
