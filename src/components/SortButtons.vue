<template>
  <div class="sort-buttons-wrap sort-buttons">
    <el-button type="success" plain class="sort-btn" @click="onIncome"
      >INCOME</el-button
    >
    <el-button type="danger" plain class="sort-btn" @click="onOutcome"
      >OUTCOME</el-button
    >
    <el-button type="info" plain class="sort-btn" @click="onAll"
      >ALL</el-button
    >
  </div>
</template>

<script>
export default {
  name: "SortButtons",

  methods: {
    onIncome() {
      this.$emit("onIncome");
    },
    onOutcome() {
      this.$emit("onOutcome");
    },
    onAll() {
      this.$emit("onAll");
    },
  },
};
</script>

<style scoped>
.sort-buttons {
  margin-bottom: 30px;
}

.sort-btn {
  width: 130px;
}
</style>
