<template>
  <div class="view-me login">
    <div class="login-content">
      <div class="login-title">
        <span class="t-login" :class="{active: status === 0}" @click="changeMode(0)">登录</span>
        <span class="t-register" :class="{active: status !== 0}" @click="changeMode(1)">注册</span>
      </div>
      <div class="content">
        <div class="c-login" v-show="!status">
          <div class="block_area">
            <label for="userName">username</label>
            <input type="text" id="userName" v-model="username" placeholder="登陆用户名">
          </div>
          <div class="block_area">
            <label for="userPwd">password</label>
            <input type="password" id="userPwd" ref="usePwd" v-model="password" placeholder="登陆密码">
          </div>
          <input type="button" value="登录" @click="subInfo">
        </div>
        <div class="c-singin" v-show="status">
          <div class="block_area">
            <label for="suserName">username</label>
            <input type="text" id="suserName" v-model="susername" placeholder="注册用户名">
          </div>
          <div class="block_area">
            <label for="suserPwd">password</label>
            <input
              type="password"
              id="suserPwd"
              ref="susePwd"
              v-model="spassword"
              placeholder="注册密码"
            >
          </div>
          <input type="button" value="注册" @click="registerFunc">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import API from "@/config/api";

export default {
  name: "about",
  data() {
    //数据属性
    return {
      // 0 是登录  1是注册
      status: 0,
      showSinginThen: true,
      username: "",
      password: "",
      susername: "",
      spassword: "",
      rightSigninName: ""
    };
  },
  components: {
    //组件
  },
  computed: {
    //计算属性的 getter
  },
  watch: {
    //侦听属性
  },
  methods: {
    changeMode(val) {
      this.status = val;
    },
    subInfo() {
      if (this.status === 0) {
        this.login();
        return;
      }
      this.registerFunc();
    },
    login() {
      if (this.username === "") {
        this.$msg("请输入用户名");
        return;
      }
      if (this.password === "") {
        this.$msg("请输入密码");
        return;
      }
      let self = this;
      self.setLoaderVisible(true);
      setTimeout(() => {
        self.$axios
          .get(API.GET_LOGIN_INFO)
          .then(response => {
            let userList = response.data.data;
            let namePass = false;
            let pwdPass = false;

            userList.forEach(function(user) {
              if (user.username === self.username) {
                namePass = true;
                if (user.password === self.password) {
                  pwdPass = true;
                }
              }
            });

            if (namePass && pwdPass) {
              var userObj = {
                username: self.username,
                password: self.password
              };
              localStorage.setItem("loginInfo", JSON.stringify(userObj));
              this.setUserInfo(userObj);
              const url = decodeURIComponent(this.$route.query["redirect_url"]);
              if (url) {
                this.$router.push(url);
              } else {
                this.$router.push("/home");
              }
            } else if (!namePass) {
              self.$msg("用户名不存在");
            } else if (!pwdPass) {
              self.$msg("登录密码错误");
            }
          })
          .catch(function(error) {
            self.$msg("登陆失败, 服务连接异常");
          });

        self.setLoaderVisible(false);
      }, 3000);

      // self.$axios
      //   .get(API.GET_LOGIN_INFO)
      //   .then(response => {
      //     let userList = response.data.data;
      //     let namePass = false;
      //     let pwdPass = false;

      //     userList.forEach(function(user) {
      //       if (user.username === self.username) {
      //         namePass = true;
      //         if (user.password === self.password) {
      //           pwdPass = true;
      //         }
      //       }
      //     });

      //     if (namePass && pwdPass) {
      //       var userObj = {
      //         username: self.username,
      //         password: self.password
      //       };
      //       localStorage.setItem("loginInfo", JSON.stringify(userObj));
      //       this.setUserInfo(userObj);
      //       const url = decodeURIComponent(this.$route.query["redirect_url"]);
      //       if (url) {
      //         this.$router.push(url);
      //       } else {
      //         this.$router.push("/home");
      //       }
      //     } else if (!namePass) {
      //       self.$msg("用户名不存在");
      //     } else if (!pwdPass) {
      //       self.$msg("登录密码错误");
      //     }
      //   })
      //   .catch(function(error) {
      //     self.$msg("登陆失败, 服务连接异常");
      //   });
    },
    // 注册
    registerFunc() {
      if (this.susername === "") {
        this.$msg("请输入用户名");
        return;
      }
      if (!this.testPassword(this.spassword)) {
        this.$msg({
          text: "密码最少6位，包括至少1个大写字母，1个小写字母，1个数字",
          background: "red"
        });
        return;
      }
      this.$msg("待开发");
    },
    testPassword(password) {
      // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字
      let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
      return pPattern.test(password);
    },
    ...mapMutations(["setUserInfo", "setLoaderVisible"])
  },
  beforeCreate: function() {
    //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
    //el和data 并未初始化
    //可以在这加个loading事件
  },
  created: function() {
    //在实例创建完成后被立即调用。
    //在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调
    //然而，挂载阶段还没开始，$el 属性目前不可见 即Dom元素（$el指向当前组件的DOM元素）
    //完成了 data数据的初始化，el没有
  },
  beforeMount: function() {
    //挂载前
    //完成了 el 和 data 初始化
  },
  mounted: function() {
    //dom 元素加载完成
    //完成挂载
    //在这发起后端请求，拿回数据，配合路由钩子做一些事情
  },
  beforeUpdate: function() {
    //该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行
  },
  updated: function() {
    //该钩子在服务器端渲染期间不被调用
    //不能在这里修改数据，否则beforeUpdate updated死循环
    //注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated
  },
  activated: function() {
    //keep-alive 组件激活时调用
    //<keep-alive> 是Vue的一个内部组件，适合用来缓存不需要实时更新的组件，这样可以保留组件状态避免重新渲染。
  },
  deactivated: function() {
    //keep-alive 组件停用时调用
    //<keep-alive> 是Vue的一个内部组件，适合用来缓存不需要实时更新的组件，这样可以保留组件状态避免重新渲染。
  },
  beforeDestroy: function() {
    //实例销毁之前调用。在这一步，实例仍然完全可用
    //该钩子在服务器端渲染期间不被调用
    //keep-alive 包裹的组件(没有被exclude包含)不执行此方法 因为组件没被销毁，被缓存起来了。
  },
  destroyed: function() {
    //Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
    //该钩子在服务器端渲染期间不被调用
    //keep-alive 包裹的组件(没有被exclude包含)不执行此方法 因为组件没被销毁，被缓存起来了。
  },
  errorCaptured: function(error, vm, info) {
    //当捕获一个来自子孙组件的错误时被调用。
    //此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
    //此钩子可以返回 false 以阻止该错误继续向上传播
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import './../../common/stylus/global.styl';
@import './../../common/stylus/common.styl';

.login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    min-height: 300px;
    max-width: 340px;
    padding: 5px 0px;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(20, 40, 50, 0.4);

    .login-title {
      width: 100%;
      height: 48px;
      line-height: 48px;
      font-size: 0;
      padding: 0 5px;
      box-sizing: border-box;

      span {
        display: inline-block;
        font-size: 16px;
        color: #fff;
        width: 50%;
        text-align: center;
        vertical-align: middle;
        position: relative;
        cursor: pointer;

        &.active {
          &:before {
            content: '';
            width: 30%;
            height: 2px;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
          }
        }
      }
    }

    .content {
      position: relative;
      box-sizing: border-box;
      padding: 20px 20px;

      .c-singin, .c-login {
        .block_area {
          margin: 10px 0 20px 0;
        }

        label, input {
          display: block;
        }

        label {
          color: #aaa;
          font-size: 14px;
        }

        input[type='text'], input[type='password'], input[type='email'] {
          background: transparent;
          outline: none;
          height: 36px;
          width: 100%;
          color: #fff;
          text-indent: 4px;
          font-size: 14px;
          border: none;
          border-bottom: 1px solid #aaa;
          box-sizing: border-box;

          &:focus {
            border-bottom: 1px solid #fff;
          }
        }

        input[type='button'] {
          background: rgba(255, 12, 12, 0.03);
          border: 1px solid rgba(255, 12, 12, 0.03);
          height: 32px;
          width: 100%;
          border-radius: 2px;
          color: #fff;
          height: 36px;
          line-height: 36px;
          margin-top: 30px;
          margin-bottom: 10px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;

          &:hover {
            background: red;
          }
        }
      }
    }
  }
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px black inset;
  border: 1px solid #CCC !important;
  height: 36px !important;
  border-radius: 2px;
  -webkit-text-fill-color: #fff;
}

label {
  color: #aaa;
  font-size: 14px;
  display: block;

  &.inline {
    display: inline;
  }
}

input[type='text'], input[type='password'], input[type='email'] {
  background: transparent;
  // border: 1px solid #eee
  outline: none;
  height: 36px;
  width: 100%;
  color: #fff;
  text-indent: 4px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #aaa;
  box-sizing: border-box;
  display: block;

  &:focus {
    border-bottom: 1px solid #fff;
  }
}

input[type='button'] {
  background: $com_button_color;
  border: 1px solid $com_button_color;
  height: 32px;
  width: 100%;
  border-radius: 2px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  margin-top: 30px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: $com_button_active_color;
  }
}
</style>