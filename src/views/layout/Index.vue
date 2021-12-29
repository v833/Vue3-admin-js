<template>
  <a-layout id="layout-main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <LayoutAside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <LayoutHeader />
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <LayoutMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from "vue";
import LayoutAside from "./components/Aside.vue";
import LayoutHeader from "./components/Header.vue";
import LayoutMain from "./components/Main.vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref(["1"]);
const collapsed = ref(false);
</script>

<style lang="scss">
#layout-main {
  height: 100vh;
}

.anticon {
  margin-left: 20px;
  
}
</style>