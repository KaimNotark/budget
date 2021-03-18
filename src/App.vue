<template>
  <div id="app">
    <!-- {{list}} -->
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <SortButtons @onIncome="onIncome" @onOutcome="onOutcome" @onAll="onAll" />
    <BudgetList :list="listArray" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import SortButtons from "@/components/SortButtons";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    SortButtons,
  },

  data: () => ({
    listArray: [],
  }),

  computed: {
    ...mapGetters("budget", ["list"]),

    totalBalance() {
      return this.list.reduce((acc, item) => acc + item.value, 0);
    },
  },

  methods: {
    ...mapActions("budget", ["dellItem", "addItem"]),

    onDeleteItem(id) {
      if (confirm("Are you sure you want to delete it?")) {
        this.dellItem(id);
        this.listArray = this.list;
      }
    },

    onFormSubmit(data) {
      this.addItem(data);
      this.listArray = this.list;
    },

    onIncome() {
      this.listArray = this.list.filter((item) => item.type === "INCOME");
    },

    onOutcome() {
      this.listArray = this.list.filter((item) => item.type === "OUTCOME");
    },

    onAll() {
      this.listArray = this.list;
    },
  },

  created() {
    this.listArray = this.list;
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
