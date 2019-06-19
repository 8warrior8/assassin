<template>
  <div v-if="getTipsVisible" class="tips">
    <div class="fixedbg"></div>
    <div class="content">
      <div class="title">{{getTipsObj.title}}</div>
      <div class="sub-title">{{getTipsObj.subTitle}}</div>
      <div class="infoList">
        <div
          class="info"
          v-for="(item, index) in getTipsObj.infoList"
          :key="item"
        >{{index+1}}. {{item}}</div>
      </div>
      <div v-if="getTipsObj.buttonText !== ''"  class="button" @click="submitFunc">{{getTipsObj.buttonText}}</div>
    </div>
    <div class="update-time">{{getTipsObj.updateTime}}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "about",
  data() {
    //数据属性
    return {
    };
  },
  methods: {
    //方法
    ...mapMutations(["setTipsVisible"]),
    submitFunc() {
      this.setTipsVisible(false);
    }
  },
  computed: {
    //计算属性的 getter
    ...mapGetters(["getTipsObj", "getTipsVisible"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.tips {
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  .fixedbg{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(12,14,27,.96);
  }

  .content {
    font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
    background-color: rgba(0,0,0,0.9);
    box-sizing: border-box;
    position: absolute;
    top: 45%;
    left: 50%;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 414px;
    padding: 0 30px;
    height: auto;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 4px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;

    .title {
      padding: 15px;
      text-align: center;
      margin: 0;
      font-size: 22px;
      font-weight: 600;
    }

    .sub-title {
      float: right;
      font-size: 12px;
      font-weight: 600;
      display: flex;
      justify-content: flex-end;
    }

    .infoList {
      flex: 1 1;
      padding: 15px 0;
      line-height: 1.8;
      font-size: 14px;

      .info {
        float: left;
        margin: 10px 0px;
      }
    }

    .button {
      width: 100%;
      height: 36px;
      margin: 30px 0px;
      font-size: 16px;
      line-height: 36px;
      border-radius: 0;
      border: 1px solid rgba(255, 12, 12, 0.03);
      cursor: pointer;
      background: red;
      opacity: 0.9;
    }
  }

  .update-time {
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: #fff;
    font-size: 12px;
  }
}
</style>