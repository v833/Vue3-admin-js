<template>
  <span class="header-title">1234</span>
  <span class="header-menu">
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click.prevent>
        <img src="@/assets/logo.png" title="个人信息" />
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item key="0">
            <div class="menu-item">15662392395</div>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="1">
            <div class="menu-item menu-lang">
              <span
                @click="toggleLang(item.value)"
                v-for="item in data.lang"
                :key="item.value"
                :class="{ current: data.lang_current == item.value }"
              >
                {{ item.label }}
              </span>
            </div>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <div class="menu-item">{{ $t("header_menu.logout") }}</div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </span>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const data = ref({
  lang: [
    { label: "中文", value: "ch" },
    { label: "英文", value: "en" },
  ],
  lang_current: "ch",
});

const { locale } = useI18n({ useScope: "global" });
const toggleLang = (lang) => {
  locale.value = lang;
  data.value.lang_current = lang;
};
</script>
<style lang="scss" scpoed>
.header-title {
  padding: 0 20px;
  height: 64px;
}
.header-menu {
  float: right;
  padding-right: 40px;
  img {
    width: 30px;
    height: 30px;
    margin-top: 18px;
  }
}
.menu-item {
  font-size: 14px;
  font-family: "黑体";
  padding: 5px 10px;
  text-align: center;
  color: #999999;
}
.menu-lang {
  span {
    margin-right: 10px;
  }
  span.current {
    color: #333333;
  }
}
</style>