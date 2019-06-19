<template>
  <section class="content">
    <ul class="header">
      <!-- pc 页面菜单 左侧 -->
      <div class="left-menu">
        <router-link class="logo" tag="a" to="/home">
          <img width="36" height="36" src="./../../../../static/images/logo.jpg" title="测试网站" alt>
        </router-link>
        <router-link tag="a" to="/home">
          <li>首页</li>
        </router-link>
        <router-link tag="a" to="/blog">
          <li>博客</li>
        </router-link>
        <router-link tag="a" to="/about">
          <li>关于</li>
        </router-link>
      </div>

      <!-- pc 页面菜单 右侧 -->
      <div class="right-menu">
        <router-link tag="a" to="/user" v-if="getUserInfo">
          <li class="li-icon" title="用户信息">
            <i class="el-icon-user-solid el-icon-me"><span>{{getUserInfo.username}}</span></i>
          </li>
        </router-link>
        <router-link tag="a" to="/user" v-else>
          <li class="li-icon" title="登陆">
            <i class="el-icon-user el-icon-me"></i>
          </li>
        </router-link>
        <router-link tag="a" to="/setting">
          <li class="li-icon" title="设置">
            <i class="el-icon-setting el-icon-me"></i>
          </li>
        </router-link>
      </div>
    </ul>
    <transition name="fade">
      <keep-alive>
        <router-view class="li_list"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    //计算属性的 getter
    ...mapGetters([
      'getUserInfo'
    ]),
  },
  components: {}
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import './../../../common/stylus/global.styl';
@import './../../../common/stylus/common.styl';

.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    z-index: 1;
    margin: 0;
    font-size: 0;

    .left-menu {
      position: absolute;
      top: 0;
      left: 20px;
      height: 40px;

      a {
        list-style: none;
        display: inline-block;
        font-size: 14px;
        padding: 0 14px;
        margin: 0;
        color: $content_header_text_color;
        cursor: pointer;
        font-family: 'Segoe UI', Segoe, Tahoma, Arial, Verdana, sans-serif;
        text-decoration: none;

        &.router-link-active {
          li {
            color: $content_header_text_active_color;
            border-bottom: 1px solid $content_header_border_color;
          }
        }

        &.logo {
          padding-left: 0;
        }

        img {
          width: 36px;
          vertical-align: middle;
          border: none;
        }
      }
    }

    .right-menu {
      position: absolute;
      right: 10px;
      height: 40px;
      top: 0;
      font-size: 0;

      a {
        list-style: none;
        display: inline-block;
        font-size: 14px;
        margin: 0 8px;
        color: $text_color;
        cursor: pointer;
        font-family: 'Segoe UI', Segoe, Tahoma, Arial, Verdana, sans-serif;
        text-decoration: none;

        &.router-link-active {
          li {
            color: $content_header_text_active_color;
            border-bottom: 1px solid $content_header_border_color;
          }
        }

        li {
          display: flex;
          height: 40px;
          align-items: center;
        }

        span{
          font-size: 14px
          margin-left : 5px

        }
      }
    }
  }

  .li_list {
    z-index: 0;
    padding-top: 40px;
    transform: translate3d(0, 0, 0);

    &.fade-enter-to, &.fade-leave-to {
      transition: all 0.8s;
    }

    &.fade-enter, &.fade-leave-to {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }
  }
}

.icon-reward {
  &:before {
    color: $active_color;
  }
}
</style>