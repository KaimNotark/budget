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
</template>

<script>
export default {
  name: "BudgetListItem",

  data: () => ({}),

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },

  computed: {},
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
