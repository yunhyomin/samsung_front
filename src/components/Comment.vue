<template>
  <el-dialog
    title="评论"
    width="60%"
    v-model="state.dialogDodel"
    @close="cancel"
  >
    <el-form>
      <el-form-item>
        <el-input
          type="textarea"
          v-model="state.content"
          placeholder="文明社会，理性评论"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="default"
        @click="cancel"
      >Cancel</el-button>
      <el-button
        type="primary"
        @click="handleOk"
      >OK</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, reactive, watch } from "vue";
import service from "../utils/https";
import urls from "../utils/urls";

export default defineComponent({
  name: "Comment",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    comment_id: {
      type: String,
      default: "",
    },
    article_id: {
      type: String,
      default: "",
    },
    to_user: {
      // type: any,
      default: {},
    },
  },
  emits: ["ok", "cancel"],
  setup(props, context) {
    const state = reactive({
      dialogDodel: props.visible,
      btnLoading: false,
      content: "",
      cacheTime: 0, // cache time
      times: 0, // number of messages
    });

    const cancel = (): boolean => {
      context.emit("cancel", false);
      return false;
    };

    const handleOk = async (): Promise<void> => {
      if (!props.article_id) {
        ElMessage({
          message: "This article does not exist！",
          type: "error",
        });
        return;
      }

      if (state.times > 2) {
        ElMessage({
          message: "You have run out of comments today, please come back tomorrow！",
          type: "warning",
        });
        return;
      }

      let now = new Date();
      let nowTime = now.getTime();
      if (nowTime - state.cacheTime < 4000) {
        ElMessage({
          message: "You are commenting too often, please try again in 1 minute!",
          type: "warning",
        });
        return;
      }

      if (!state.content) {
        ElMessage({
          message: "Comment content cannot be empty",
          type: "error",
        });
        return;
      }

      let user_id = "";
      if (window.sessionStorage.userInfo) {
        let userInfo = JSON.parse(window.sessionStorage.userInfo);
        user_id = userInfo._id;
      } else {
        ElMessage({
          message: "Login to comment, please login first!",
          type: "warning",
        });
        return;
      }
      state.btnLoading = true;
      await service.post(urls.addThirdComment, {
        article_id: props.article_id,
        user_id,
        comment_id: props.comment_id,
        to_user: JSON.stringify(props.to_user),
        content: state.content,
      });
      state.btnLoading = false;
      state.times++;

      state.cacheTime = nowTime;
      state.content = "";
      context.emit("ok", false);
      ElMessage({
        message: "Successful operation",
        type: "success",
      });
    };

    watch(props, (val, oldVal) => {
      state.dialogDodel = val.visible;
    });

    return {
      state,
      cancel,
      handleOk,
    };
  },
});
</script>
<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
