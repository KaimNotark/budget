import Vue from "vue";

const budgetStore = {
  namespaced: true,

  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comments",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some comments",
        id: 2,
      },
      3: {
        type: "INCOME",
        value: 70,
        comment: "Some comments",
        id: 3,
      },
    },
  },

  getters: {
    list: ({ list }) => Object.values(list),
  },

  mutations: {
    DELL_ITEM(state, id) {
      Vue.delete(state.list, id);
    },

    ADD_ITEM(state, item) {
      console.log("ADD_ITEM", state, item);
      Vue.set(state.list, item.id, item);
    },
  },

  actions: {
    dellItem({ commit }, id) {
      commit("DELL_ITEM", id);
    },

    addItem({ commit }, item) {
      const newItem = { ...item, id: String(Math.random()) };
      commit("ADD_ITEM", newItem);
    },
  },
};

export default budgetStore;
