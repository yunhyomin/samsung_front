<template>
  <el-dialog
    title="Log in"
    :width="isMobile ? '90%' : '50%'"
    v-model="state.dialogDodel"
    @close="cancel"
    :show-close="true"
  >
    <el-form>
      <el-formItem
        label="Mail"
        :label-width="state.formLabelWidth"
      >
        <el-input
          v-model="state.params.email"
          placeholder="Mail"
          autocomplete="off"
        >
        </el-input>
      </el-formItem>
      <el-formItem
        label="password"
        :label-width="state.formLabelWidth"
      >
        <el-input
          type="password"
          placeholder="password"
          v-model="state.params.password"
          autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-formItem
        v-if="handleFlag === 'register'"
        label="Nick name"
        :label-width="state.formLabelWidth"
      >
        <el-input
          v-model="state.params.name"
          placeholder="Username or Nickname"
          autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-formItem
        v-if="handleFlag === 'register'"
        label="phone"
        :label-width="state.formLabelWidth"
      >
        <el-input
          v-model="state.params.phone"
          placeholder="phone"
          autocomplete="off"
        ></el-input>
      </el-formItem>
      <el-formItem
        v-if="handleFlag === 'register'"
        label="Introduction"
        :label-width="state.formLabelWidth"
      >
        <el-input
          v-model="state.params.desc"
          placeholder="Personal profile"
          autocomplete="off"
        ></el-input>
      </el-formItem>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="success"
        @click="handleOAuth"
      >github Authorized login</el-button>
      <el-button
        v-if="handleFlag === 'login'"
        :loading="state.btnLoading"
        type="primary"
        @click="handleOk"
      >Log in</el-button>
      <el-button
        v-if="handleFlag === 'register'"
        :loading="state.btnLoading"
        type="primary"
        @click="handleOk"
      >register</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { key } from '../store'
import config from "../utils/config";
import { RegAndLogParams, UserInfo } from "../types/index";
import service from "../utils/https";
import urls from "../utils/urls";

export default defineComponent({
  name: "RegisterAndLogin",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    handleFlag: {
      type: String,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["ok", "cancel"],
  setup(props, context) {
    const store = useStore(key);
    const state = reactive({
      dialogDodel: props.visible,
      btnLoading: false,
      loading: false,
      formLabelWidth: props.isMobile ? "40px" : "60px",
      params: {
        email: "",
        name: "",
        password: "",
        phone: "",
        desc: "",
      } as RegAndLogParams,
    });

    const route = useRoute();
    const handleOAuth = (): void => {
      // Save the link content of the page before authorization
      let preventHistory: object = {
        name: route.name,
        query: route.query,
      };
      window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
      // window.location.href = 'https://github.com/login/oauth/authorize?client_id=6de90ab270aea2bdb01c&redirect_uri=http://biaochenxuying.cn/login'
      window.location.href = `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`;
    };

    const submit = async (): Promise<void> => {
      let data: any = "";
      state.btnLoading = true;
      if (props.handleFlag === "register") {
        data = await service.post(urls.register, state.params);
      } else {
        data = await service.post(urls.login, state.params);
      }
      state.btnLoading = false;

      const userInfo: UserInfo = {
        _id: data._id,
        name: data.name,
        avatar: data.avatar,
      };
      store.commit("SAVE_USER", {
        userInfo,
      });
      window.sessionStorage.userInfo = JSON.stringify(userInfo);
      context.emit("ok", false);
      ElMessage({
        message: "Successful operation",
        type: "success",
      });
    };

    const handleOk = (): void => {
      const reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); //regular expression
      if (!state.params.email) {
        ElMessage({
          message: "E-mail can not be empty！",
          type: "warning",
        });
        return;
      } else if (!reg.test(state.params.email)) {
        ElMessage({
          message: "Please enter a valid email address！",
          type: "warning",
        });
        return;
      }
      if (props.handleFlag === "register") {
        if (!state.params.password) {
          ElMessage({
            message: "password can not be blank！",
            type: "warning",
          });
          return;
        } else if (!state.params.name) {
          ElMessage({
            message: "Username can not be empty！",
            type: "warning",
          });
          return;
        }
        const re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (state.params.phone && !re.test(state.params.phone)) {
          ElMessage({
            message: "please enter a valid phone number!",
            type: "warning",
          });
          return;
        }
      }
      submit();
    };

    const cancel = (): boolean => {
      context.emit("cancel", false);
      return false;
    };

    watch(props, (val, oldVal) => {
      state.dialogDodel = val.visible;
    });

    return {
      state,
      handleOAuth,
      handleOk,
      submit,
      cancel,
    };
  },
});
</script>
<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
