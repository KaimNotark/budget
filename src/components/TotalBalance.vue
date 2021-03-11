<template>
  <div class="total-balance">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-balance {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
