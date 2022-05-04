
<template>
  <div class="footer">
    <div>Full stack practice ©2018 Created by BiaoChenXuYing</div>
    <div class="number">
      <a href="http://www.beian.miit.gov.cn" target="_blank"
        >Guangdong ICP No. 18141506</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>

