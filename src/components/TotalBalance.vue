<template>
  <div class="total-balance" :class="choiceColor">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",

  data: () => ({
    totalColor: "__zero",
  }),

  props: {
    total: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    choiceColor() {
      return {
        __positive: this.total > 0,
        __negative: this.total < 0,
        __zero: this.total === 0,
      };
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

.__zero {
  color: black;
}
.__positive {
  color: forestgreen;
}
.__negative {
  color: red;
}
</style>
