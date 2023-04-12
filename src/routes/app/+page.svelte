<script>
	import FloatingActionButton from '$components/buttons/FloatingActionButton.svelte';
	import DoughnutChart from '$components/charts/DoughnutChart.svelte';
	import Card from '$components/Card.svelte';

	let innerWidth = 0

	$: m3_layout = innerWidth >= 1080 ? "expanded" : innerWidth >= 600 ? "medium" : "compact";
</script>

<svelte:window bind:innerWidth />

<main>
	<Card>
		<DoughnutChart />
	</Card>
	{#if m3_layout === "compact"}
		<FloatingActionButton
			color="surface"
			icon="material-symbols:add-rounded"
			position="fixed"
			size="standard"
			type="file"
		/> 
	{/if}
</main>

<style lang="stylus">
main
	display flex
	flex 1
	flex-direction column
	padding-left 282px
	padding-top 100px

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
