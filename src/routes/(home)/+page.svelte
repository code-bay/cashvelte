<script>
	import FloatingActionButton from '$components/buttons/FloatingActionButton.svelte';
</script>


<main>
	<section class="hero">
		<h1 class="title">
			Turn your
			<br />
			<span class="accent">Wallet</span> into <span class="accent">Data</span>
		</h1>
		<p class="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique semper congue. Class
			aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
		</p>
		<div style="display: flex; gap: 12px">
			<FloatingActionButton href="/app" color="primary" size="extended" label="Open app" />
			<FloatingActionButton href="/about"  color="surface" size="extended" label="Learn more" />
			<!-- <Upload /> -->
		</div>
	</section>
</main>

<style lang="stylus">
main
	display flex
	flex 1
	flex-direction column

.hero
	display flex
	flex 1
	flex-direction column
	justify-content center
	max-width 500px

.title
	color var(--on-surface)
	font var(--headline-large)
	margin-bottom 12px

	@media(min-width 600px)
		font var(--display-small)
	
	@media(min-width 840px)
		font var(--display-medium)

	@media(min-width 1080px)
		font var(--display-large)

.description
	color var(--on-surface-variant)
	font var(--body-large)
	margin-bottom 28px

.accent
	color var(--primary-container)
</style>
