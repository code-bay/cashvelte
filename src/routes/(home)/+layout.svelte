<script>
	import Divider from '$components/Divider.svelte';
	import IconButton from '$components/buttons/IconButton.svelte';
	import TopAppBar from '$components/TopAppBar.svelte';
	import Icon from '@iconify/svelte';
</script>

<div id="app">
	<TopAppBar title="Cashvelte" />
	<slot />
	<Divider />
	<footer>
		<section class="copyright">
			<Icon icon="material-symbols:copyright-outline-rounded" width="24" height="24" />
			<span>Cashvelte {new Date().getFullYear()}</span>
		</section>
		<section>
			<IconButton color="surface" icon="tabler:brand-github" />
		</section>
	</footer>
</div>

<style lang="stylus">
#app
	background var(--surface-5)
	display flex
	flex-direction column
	height 100vh
	padding 0 24px
	min-width 360px
	
	@media(min-width 600px)
		padding 0 32px
	
	@media(min-width 840px)
		padding 0 48px

footer
	align-items center
	color var(--on-surface)
	display flex
	height 80px
	justify-content space-between

.copyright
	align-items center
	display flex
	font var(--body-medium)
	gap 8px
</style>
