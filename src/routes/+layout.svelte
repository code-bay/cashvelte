<script>
  import '$styles/index.styl'
</script>

<div id="app">
  <slot></slot>
</div>

<style lang="stylus">
#app
  background var(--surface-5)
  display flex
  flex-direction column
  height 100vh
</style>