<script>
// import IconButton from '@components/buttons/IconButton.svelte'

export let navigation
export let title


</script>


<header class="top-app-bar">
	<img width="32" src="/logo.svg" />
	<!-- 
	{#if navigation}
		<IconButton icon={navigation.icon} url={navigation.url}/>
	{/if} -->
	<span class="title">{title}</span>
	<!-- {#if $$slots}
		<section class="trailing">
			<slot/>
		</section>
	{/if} -->
</header>

<style lang="stylus">
.top-app-bar
	align-items center
	color var(--on-surface)
	display flex
	height 64px
	padding 0 64px
	position sticky
	top 0

	// @media(min-width 600px)
	// 	padding 0 12px

.title
	font var(--title-large)
	margin-left 16px

.has-navigation
	margin-left 4px

.trailing
	display flex
	flex 1
	justify-content flex-end
</style>