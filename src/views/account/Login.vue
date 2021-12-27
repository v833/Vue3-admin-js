<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="formConfig.layout">
        <a-form-item>
          <label for="">用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label for="">密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <Captcha />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>

      <div class="text-center fs-12">
        <router-link to="/forget" class="color-white">忘记密码 | </router-link>
        <router-link to="/register" class="color-white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import Captcha from "@/components/Captcha/index.vue";
export default {
  components: { Captcha },
  setup(props) {
    const formConfig = reactive({
      layout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 24,
        },
      },
    });
    return {
      formConfig,
    };
  },
};
</script>

<style lang="scss">
@import "./style";
</style>