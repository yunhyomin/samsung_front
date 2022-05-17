<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="intoContainer">
    <div class="visual">
      <h2 class="visualTit" v-html="t('intro.welcome')">
      </h2>
      <p class="visualSubTit">{{ t('intro.visual-sub-tit') }}</p>
      <article class="introBtn">
        <button  class="whiteBtn">{{ t('intro.login') }}</button>
        <button class="darkBtn">{{ t('intro.regist') }}</button>
      </article>
    </div>

  </div>
</template>

<route lang="yaml">
meta:
  layout: index
</route>
