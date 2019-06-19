<template>
  <div id="app">
    <!-- 图层1,固定背景层 -->
    <v-fixedbg></v-fixedbg>
    <!-- 图层2,视图层 -->
    <v-content></v-content>
    <!-- 图层3,加载层 -->
    <v-loader></v-loader>
    <!-- 图层4,消息提示层 -->
    <v-tips></v-tips>
  </div>
</template>

<script>
import fixedbackground from "@/components/common/fixedbackground/fixedbackground";
import content from "@/components/common/content/content";
import loader from "@/components/common/loader/loader";
import tips from "@/components/common/tips/tips";
import API from "@/config/api";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    "v-content": content,
    "v-fixedbg": fixedbackground,
    "v-loader": loader,
    "v-tips": tips
  },
  methods: {
    initData() {
      let storageInfo = this.getStorageInfo();
      if (storageInfo.login) {
        this.$axios
          .get(API.GET_UPDATE_INFO)
          .then(response => {
            let msg = response.data;
            localStorage.setItem("loginInfo", JSON.stringify(msg.data));
            this.setTipsObj(msg.data);
            this.setTipsVisible(true);
          })
          .catch(function(error) {
            console.error(error);
          });
      }
      if (storageInfo.update) {
        this.$axios
          .get(API.GET_UPDATE_INFO)
          .then(response => {
            let msg = response.data;
            localStorage.setItem("updateInfo", JSON.stringify(msg.data));
            this.setUserInfo(msg.data);
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    },
    getStorageInfo() {
      let storage = {
        login: null,
        update: null
      };
      if (window.localStorage) {
        storage.login = JSON.parse(localStorage.getItem("loginInfo"));
        if (storage.login) {
          this.setUserInfo(storage.login);
        }
        storage.update = JSON.parse(localStorage.getItem("updateInfo"));
        if (storage.update) {
          this.setTipsObj(storage.update);
        }
      }
      return storage;
    },
    getLoginInfoStorage() {
      let loginStorage = null;
      if (window.localStorage) {
        updateStorage = JSON.parse(localStorage.getItem("updateInfo"));
      }
      return updateStorage;
    },
    ...mapMutations(["setTipsObj", "setTipsVisible", "setUserInfo"])
  },
  mounted() {
    this.initData();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
