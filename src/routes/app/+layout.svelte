<script>
	import NavigationBar from "$components/NavigationBar.svelte";
	import NavigationDrawer from "$components/NavigationDrawer.svelte";
	import NavigationRail from '$components/NavigationRail.svelte';

	let innerWidth = 0
	let navigation = [
		{icon: "material-symbols:dashboard-rounded", label: "Dashboard", url: "/app"},
		{icon: "material-symbols:settings-rounded", label: "Settings", url: "/app/settings"}
	]

	$: m3_layout = innerWidth >= 1080 ? "expanded" : innerWidth >= 600 ? "medium" : "compact";
</script>

<svelte:window bind:innerWidth />

<div id="app">
	{#if m3_layout === "expanded"}
		<NavigationDrawer {navigation} />
	{:else if m3_layout === "medium"}
		<NavigationRail {navigation} />
	{:else if m3_layout === "compact"}
		<NavigationBar {navigation}/>
	{/if}
	<slot />
</div>

<style lang="stylus">
#app
	background var(--surface-5)
	display flex
	flex-direction column
	height 100vh

.transition-enforcement
	display grid
	justify-items left

.transition-enforcement > *
	grid-column 1
	grid-row 1
</style>
