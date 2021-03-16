<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem
          :list="list"
          @deleteItem="deleteItem"
          :sortByIncome="sortByIncome"
          :sortByOutcome="sortByOutcome"
        />
      </template>

      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },

  props: {
    sortByIncome: {
      type: String,
      require: true,
      default: "INCOME",
    },
    sortByOutcome: {
      type: String,
      require: true,
      default: "OUTCOME",
    },

    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "List is empty",
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
