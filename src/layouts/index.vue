<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <header class="header">
    <div class="headerContainer">
      <div class="headerLeft">
        <h1 class="samsungLogo">
          <a href="#">
            <img src="https://semiconductor.samsung.com/etc.clientlibs/semiconductor/designs/global/common/resources/img/icon/global-samsung-logo.svg" alt="">
          </a>
        </h1>
      </div>
      <ul class="rightUtil">
        <li class="user">
          <span></span>
        </li>
        <li class="language">
          <span>{{ t('language.ko')}}</span>
        </li>
      </ul>
    </div>
  </header>

  <RouterView />

  <!-- footer -->
  <div class="footer">
    <div class="terms mt30">
      <div class="selWrap">
        <select class="wdh_110" name="" id="">
          <option value="ko">{{ t('language.lan_country_ko')}}</option>
          <option value="en">{{ t('language.lan_country_en')}}</option>
        </select>
      </div>
      <span>{{ t('footer.privacy')}}</span>
      <span>{{ t('footer.legal_notice')}}</span>
      <span>{{ t('footer.cookie')}}</span>
      <span>{{ t('footer.copyright')}}</span>
    </div>
  </div>
</template>
