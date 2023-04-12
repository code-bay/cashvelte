<script>
	export let theme;
</script>

<div class={`card ${theme}`}>
	<slot />
</div>

<style lang="stylus">
.card
	border-radius 12px
	display flex
	flex-direction column
	width 300px
	
.elevated
	background var(--surface)
</style>
