<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <SortButtons @onIncome="onIncome" @onOutcome="onOutcome" @onAll="onAll" />
    <BudgetList
      :list="list"
      @deleteItem="onDeleteItem"
      :sortByIncome="sortByIncome"
      :sortByOutcome="sortByOutcome"
    />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import SortButtons from "@/components/SortButtons";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    SortButtons,
  },

  data: () => ({
    sortByIncome: "INCOME",
    sortByOutcome: "OUTCOME",

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
    },
  }),

  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },

  methods: {
    onDeleteItem(id) {
      if (confirm("Are you sure you want to delete it?")) {
        this.$delete(this.list, id);
      }
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };

      this.$set(this.list, newObj.id, newObj);
    },
    onIncome() {
      this.sortByIncome = "INCOME";
      this.sortByOutcome = "";
    },
    onOutcome() {
      this.sortByIncome = "";
      this.sortByOutcome = "OUTCOME";
    },
    onAll() {
      this.sortByIncome = "INCOME";
      this.sortByOutcome = "OUTCOME";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
