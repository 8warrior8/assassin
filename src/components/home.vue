<template>
  <div class="home view-me">
    {{msg}}
    <br>
    <br>提示信息：
    <button @click="testFunc1">vue-message方法1</button>
    <button @click="testFunc4">vue-message方法2</button>
    <button @click="testFunc2">el-message方法1</button>
    <button @click="testFunc3">el-message方法2</button>
    <br>loader测试(5秒)：
    <button @click="loaderFunc">loader</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      msg: "我是home主页面"
    };
  },
  methods: {
    //方法
    testFunc1() {
      this.$msg("请输入用户名");
    },
    testFunc4() {
      this.$msg({
        text: "密码最少6位，包括至少1个大写字母，1个小写字母，1个数字",
        background: "red",
        duration: 3000
      });
    },
    testFunc2() {
      this.$message.error("请输入用户名");
    },
    testFunc3() {
      this.$message({
        showClose: true,
        message: "你已经被管理员禁用，5s后将自动退出",
        type: "error",
        duration: 3000
      });
    },
    loaderFunc() {
      var self = this;
      self.setLoaderVisible(true);
      setTimeout(() => {
        self.setLoaderVisible(false);
      }, 3000);
    },
    tipsFunc() {
      var self = this;
      self.setTipsObj("loader");
      self.setTipsVisible(true);
      // setTimeout(() => {
      //   self.setTipsObj("-");
      //   self.setTipsVisible(false);
      // }, 5000);
    },
    ...mapMutations(["setTipsObj", "setTipsVisible", "setLoaderVisible"])
  },
  computed: {
    //计算属性的 getter
    ...mapGetters([
      'getLoaderVisable',
      'getTipsObj', 
      'getTipsVisible'
    ]),
  },
  mounted: function() {
    //dom 元素加载完成
    //完成挂载
    //在这发起后端请求，拿回数据，配合路由钩子做一些事情
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.home {
  // background-color: aquamarine
}
</style>
