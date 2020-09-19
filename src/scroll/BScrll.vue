<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      dscroll: null
    }
  },
  mounted() {
    this.dscroll = new BScroll(this.$refs.wrapper, {
      //是否时实监听页面坐标
      probeType: this.probeType,
      //可以被点击
      click: this.clickflag,
      //可以被再一次下拉上拉刷新
      pullUpLoad: this.pullUpLoad
    })
  },
  methods: {
    refresh() {
      this.dscroll && this.dscroll.refresh()
    },
  }
}
</script>

<style>

</style>