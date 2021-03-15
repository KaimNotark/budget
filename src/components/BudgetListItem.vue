<template>
  <div class="budget-list-item-wrap">
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-comment">
        {{ item.comment }}
      </span>
      <span
        class="budget-value"
        :class="{ __red: item.value < 0, __green: item.value > 0 }"
      >
        {{ item.value }}
      </span>
      <i class="el-icon-top" v-if="item.value > 0"></i>
      <i class="el-icon-bottom" v-else></i>
      <ElButton type="danger" size="mini" @click="deleteItem(item.id)">
        Delete
      </ElButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",

  props: {
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
