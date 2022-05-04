<template>
  <div class="loading">
    <img
      src="../assets/loading.svg"
      alt="loading..."
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingCustom",
});
</script>
<style scoped>
.loading {
  text-align: center;
  padding: 30px;
}
</style>
