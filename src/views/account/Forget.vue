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
            v-model:value="accountForm.passwords"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item name="code">
          <label for="">验证码</label>
          <a-row :gutter="20">
            <a-col span="14"
              ><a-input
                maxlength="6"
                v-model:value="accountForm.code"
                type="text"
            /></a-col>
            <a-col span="10"
              ><a-button
                :loading="buttonItem.button_loading"
                block
                type="danger"
                @click="getCode"
                :disabled="buttonItem.button_disabled"
                >{{ buttonItem.button_text }}</a-button
              ></a-col
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
        <router-link to="/register" class="color-white">注册 | </router-link>
        <router-link to="/login" class="color-white">登录</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ReactiveEffect, ref, toRefs } from "vue";
import Captcha from "@/components/Captcha/index.vue";
import { message } from "ant-design-vue";
import {
  checkPhone,
  checkPassword as password,
  checkCode as code,
} from "@/utils/validate";
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
    const accountForm = reactive({
      username: "",
      password: "",
      passwords: "",
      code: "",
    });

    const buttonItem = reactive({
      button_text: "获取验证码",
      button_loading: false,
      button_disabled: false,
      sec: 3,
      timer: null,
    });

    const handleFinish = (value) => {};

    const checkUsername = async (rule, value) => {
      if (!value) {
        return Promise.reject("请输入用户名");
      } else if (!checkPhone(value)) {
        return Promise.reject("请输入正确用户名");
      } else {
        Promise.resolve();
      }
    };
    const checkPassword = async (rule, value) => {
      const passwords = accountForm.passwords;
      if (!value) {
        return Promise.reject("请输入密码");
      } else if (!password(value)) {
        return Promise.reject("请输入正确密码");
      } else if (passwords !== value) {
        return Promise.reject("两次密码输入不一致");
      } else {
        Promise.resolve();
      }
    };
    const checkPasswords = async (rule, value) => {
      if (!value) {
        return Promise.reject("请再次输入密码");
      } else if (value !== accountForm.password) {
        return Promise.reject("两次输入密码不一致");
      } else {
        Promise.resolve();
      }
    };
    const checkCode = async (rule, value) => {
      if (!value) {
        return Promise.reject("请输入验证码");
      } else if (!code(value)) {
        return Promise.reject("请输入正确验证码");
      } else {
        Promise.resolve();
      }
    };

    const getCode = function () {
      // 用户名不存在的情况
      if (!accountForm.username) {
        message.error({
          content: '用户名不能为空',
          // onClose: () => {
          //   alert(111)
          // }
        })
      }

      // 优先判断定时器是否存在，存在则先清除后再开启
      // if (buttonItem.timer) {
      //   clearInterval(buttonItem.timer);
      // }
      buttonItem.timer && clearInterval(buttonItem.timer);

      buttonItem.button_loading = true;
      buttonItem.button_disabled = true;
      buttonItem.timer = setInterval(() => {
        const s = buttonItem.sec--;
        buttonItem.button_text = `${s} 秒`;
        if (s <= 0) {
          clearInterval(buttonItem.timer);
          buttonItem.button_text = "重新获取";
          buttonItem.button_loading = false;
          buttonItem.button_disabled = false;
        }
      }, 1000);
    };

    const rulesForm = {
      username: [
        {
          required: true,
          validator: checkUsername,
        },
      ],
      password: [
        {
          required: true,
          validator: checkPassword,
        },
      ],
      passwords: [
        {
          required: true,
          validator: checkPasswords,
        },
      ],
      code: [
        {
          required: true,
          validator: checkCode,
        },
      ],
    };
    return {
      formConfig,
      handleFinish,
      accountForm,
      rulesForm,
      checkUsername,
      getCode,
      buttonItem,
    };
  },
};
</script>

<style lang="scss">
@import "./style";
</style>