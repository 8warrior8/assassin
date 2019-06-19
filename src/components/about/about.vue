<template>
  <div class="view-me">我是关于页面</div>
</template>

<script>
export default {
  name: "about",
  data() {
    //数据属性
    return {
      msg: "Welcome to Your Vue.js App"
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
  },
  methods: {
    //方法
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>