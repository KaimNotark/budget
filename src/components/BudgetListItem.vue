<template>
  <div class="budget-list-item-wrap">
    {{ sortByIncome }}
    {{ sortByOutcome }}
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <div class="item-wrap" v-if="item.type === sortByOutcome">
        <span class="budget-comment">
          {{ item.comment }}
        </span>
        <span
          class="budget-value"
          :class="{ __red: item.value < 0, __green: item.value > 0 }"
        >
          <i class="el-icon-top" v-if="item.value > 0"></i>
          <i class="el-icon-bottom" v-else></i>
          {{ item.value }}
        </span>
        <ElButton
          type="danger"
          icon="el-icon-delete"
          circle
          @click="deleteItem(item.id)"
        ></ElButton>
      </div>
    </div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop + 'q'">
      <div class="item-wrap" v-if="item.type === sortByIncome">
        <span class="budget-comment">
          {{ item.comment }}
        </span>
        <span
          class="budget-value"
          :class="{ __red: item.value < 0, __green: item.value > 0 }"
        >
          <i class="el-icon-top" v-if="item.value > 0"></i>
          <i class="el-icon-bottom" v-else></i>
          {{ item.value }}
        </span>
        <ElButton
          type="danger"
          icon="el-icon-delete"
          circle
          @click="deleteItem(item.id)"
        ></ElButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",

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

  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.__red {
  color: red;
}
.__green {
  color: green;
}
</style>
