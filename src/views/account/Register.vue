<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        :model="accountForm"
        ref="ruleForm"
        v-bind="formConfig.layout"
        @finish="handleFinish"
        :rules="rulesForm"
      >
        <a-form-item name="username">
          <label for="">用户名</label>
          <a-input
            v-model:value="accountForm.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="password">
          <label for="">密码</label>
          <a-input
            v-model:value="accountForm.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="passwords">
          <label for="">确认密码</label>
          <a-input
            v-model="accountForm.passwords"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="code">
          <label for="">验证码</label>
          <a-row :gutter="20">
            <a-col span="14"
              ><a-input v-model="accountForm.code" type="text"
            /></a-col>
            <a-col span="10"
              ><a-button block type="danger">获取验证码</a-button></a-col
            >
          </a-row>
        </a-form-item>

        <a-form-item>
          <Captcha />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
          <a-button type="primary" html-type="submit" block>注册</a-button>
        </a-form-item>
      </a-form>

      <div class="text-center fs-12">
        <a href="javascript:;" class="color-white">忘记密码 | </a>
        <router-link to="/login" class="color-white">登录</router-link>
        <router-view></router-view>
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
    const c = console.log.bind(document);
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
    const accountForm = ref({
      username: "",
      password: "",
      passwords: "",
      code: "",
    });

    const handleFinish = (value) => {
      c(value);
    };

    const checkUsername = async (rule, value) => {
      let regPhone = /^1[3456789]\d{9}$/;
      if (!value) {
        return Promise.reject("请输入用户名");
      } else if (!regPhone.test(value)) {
        return Promise.reject("请输入正确用户名");
      } else {
        Promise.resolve()
      }
    };

    const rulesForm = {
      username: [
        {
          required: true,
          validator: checkUsername,
        },
      ],
    };
    return {
      formConfig,
      handleFinish,
      accountForm,
      rulesForm,
      checkUsername,
    };
  },
};
</script>

<style lang="scss">
@import "./style";
</style>