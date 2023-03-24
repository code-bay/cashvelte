<script>
	import Divider from '$components/Divider.svelte';
	import FloatingActionButton from '$components/buttons/FloatingActionButton.svelte';
	import IconButton from '$components/buttons/IconButton.svelte';
	import SimpleButton from '$components/buttons/SimpleButton.svelte';
	import Card from '$components/Card.svelte';
	import FeatureCard from '$components/FeatureCard.svelte';
	import TextInput from '$components/TextInput.svelte';
	import TopAppBar from '$components/TopAppBar.svelte';
	import Icon from '@iconify/svelte';
	import Upload from '$components/Upload.svelte';
</script>

<TopAppBar title="Cashvelte" />
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
			<FloatingActionButton color="primary" type="extended" label="Open app" />
			<FloatingActionButton color="surface" type="extended" label="Learn more" />
			<Upload />
		</div>
	</section>
</main>
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

<style lang="stylus">
main
	background url("/bauhaus.svg") no-repeat right;
	display flex
	flex 1
	flex-direction column
	margin 0 64px

.hero
	justify-content center
	display flex
	flex-direction column
	width 500px
	flex 1

footer
	align-items center
	color var(--on-surface)
	display flex
	height 80px
	justify-content space-between
	margin 0 64px

.copyright
	align-items center
	display flex
	font var(--body-medium)
	gap 8px

.title
	color var(--on-surface)
	font var(--display-large)
	margin-bottom 12px

.description
	color var(--on-surface-variant)
	font var(--body-large)
	margin-bottom 28px

.accent
	color var(--primary-container)
</style>
