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
        type: "OUTCOME",
        value: -70,
        comment: "Some comments",
        id: 3,
      },
    },
  },

  getters: {
    list: ({ list }) => Object.values(list),
  },

  mutations: {},

  actions: {},
};

export default budgetStore;
