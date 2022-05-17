<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="container">
    <div class="visual">
      <h2 class="visualTit">{{ t('main.title') }}</h2>
      <p v-html="t('main.desc')">
      </p>
    </div>
    <div class="inner">
      <div class="mainMenuArea">
        <ul class="menuLine menuLine01">
          <li>
            <h3 class="innerSubTit">{{ t('main.menu') }}</h3>
          </li>
          <li>
            <div class="card">
              <p>{{ t('guidelines') }}</p>
              <span v-html="t('guidelines.desc')"></span>
            </div>
          </li>
        </ul>
        <ul class="menuLine menuLine02">
          <li>
            <div class="card">
              <p>{{ t('brand_asset') }}</p>
              <span v-html="t('brand_asset.desc')"></span>
            </div>
          </li>
          <li>
            <div class="card">
              <p>{{ t('request') }}</p>
              <span v-html="t('request.desc')"></span>
            </div>
          </li>
          <li>
            <div class="card">
              <p>{{ t('qna') }}</p>
              <span v-html="t('qna.desc')"></span>
            </div>
          </li>
        </ul>
      </div>

      <div class="requestArea">
        <h3 class="innerSubTit">{{  t('main.my_request.title') }}</h3>
        <p>{{  t('main.my_request.desc') }}</p>
        <ul class="requestViewer">
          <li>
            <strong class="count">2</strong>
            <span>{{ t('main.my_request.request') }}</span>
          </li>
          <li>
            <strong class="count">1</strong>
            <span>{{ t('main.my_request.review') }}</span>
          </li>
          <li>
            <strong class="count">17</strong>
            <span>{{  t('main.my_request.completed') }}</span>
          </li>
        </ul>
        <div class="btnWrap mt60">
          <button class="">{{  t('main.go') }}</button>
        </div>
      </div>

      <div class="searchArea">
        <h4>{{  t('main.search') }}</h4>
        <div class="inpWrap mt40">
          <span></span>
          <input class="limit" type="text">
        </div>
        <div class="srchList mt20">
          <span>{{  t('font') }}</span>
          <span>{{  t('color') }}</span>
          <span>{{  t('placement') }}</span>
          <span>{{  t('media_kit') }}</span>
          <span>{{  t('lettermark') }}</span>
        </div>
      </div>
    </div>



  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
