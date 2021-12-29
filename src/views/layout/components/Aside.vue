<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <template v-for="item of routers" :key="item.name">
        <div v-if="!item.children">
          <a-menu-item :key="item.name">{{ item?.meta?.title }}</a-menu-item>
        </div>

        <div v-else>
          <a-sub-menu :key="item.name">
            <template #title>{{item?.meta?.title}}</template>
            <a-menu-item v-for="child of item.children" :key="child.name">
              {{child?.meta?.title}}
            </a-menu-item>
          </a-sub-menu>
        </div>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "Aside",
  setup() {
    const { options } = useRouter();
    const routers = options.routes.filter((item) => !item.hidden);
    console.log(routers);
    const state = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return { ...toRefs(state), toggleCollapsed, routers };
  },

  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
});
</script>
