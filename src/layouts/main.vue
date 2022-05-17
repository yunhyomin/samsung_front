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
        <nav class="topMenu">
          <ul class="gnb1Depth">
            <li class="topMenuDepth01 active">
                            <span>
                                {{ t('guidelines')}}
                            </span>
            </li>
            <li class="topMenuDepth02">
                            <span>
                                {{ t('brand_asset')}}
                            </span>
            </li>
            <li class="topMenuDepth03">
                            <span>
                                {{ t('request')}}
                            </span>
            </li>
            <li class="topMenuDepth04">
                            <span>
                                {{ t('qna')}}
                            </span>
            </li>
          </ul>
        </nav>
      </div>
      <ul class="rightUtil">
        <li class="search">
          <span></span>
        </li>
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
    <ul class="siteMap">
      <li>
        <ul class="siteMapList">
          <li class="siteMapListTit">{{ t('guidelines')}}</li>
          <li class="mt10">{{ t('brand_strategy')}}</li>
          <li class="mt5">{{ t('brand_elements')}}</li>
          <li class="mt5">{{ t('brand_applications')}}</li>
        </ul>
      </li>
      <li>
        <ul class="siteMapList">
          <li class="siteMapListTit">{{ t('brand_asset')}}</li>
        </ul>
      </li>
      <li>
        <ul class="siteMapList">
          <li class="siteMapListTit">{{ t('request')}}</li>
        </ul>
      </li>
      <li>
        <ul class="siteMapList">
          <li class="siteMapListTit">{{ t('qna')}}</li>
          <li class="mt10">{{ t('inquiry')}}</li>
          <li class="mt5">{{ t('faq')}}</li>
        </ul>
      </li>
    </ul>
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
