<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores'

	import Icon from '@iconify/svelte'
	import FloatingActionButton from '$components/buttons/FloatingActionButton.svelte'

	export let navigation

</script>

<div class="navigation-rail" in:fade="{{delay: 200, duration: 150}}" out:fade="{{delay: 0, duration: 100}}">
	<div class="header">
		<div class="logo">
			<img src="../logo.svg" width="32px" height="32x" alt="logo"/>
		</div>
		<FloatingActionButton
			color="surface"
			icon="material-symbols:add-rounded"
			size="standard"
			type="file"
		/> 
	</div>
	<nav class="navigation">
		{#each navigation as item}
			<a href={item.url} class="item target">
				<span class="indicator ripple" class:selected={$page.url.pathname===item.url}>
					<Icon icon={item.icon} width="24" height="24"/>
				</span>
				<span class="label">{item.label}</span>
			</a>
		{/each}
	</nav>
</div>

<style lang="stylus">
.navigation-rail
	display flex
	flex-direction column
	height 100%
	max-width 80px
	padding 16px 0
	position fixed
	top 0
	width 100%
	z-index 1

.header
	align-items center
	display flex
	flex-direction column
	font var(--title-medium)
	padding-bottom 45px

.logo
	color var(--on-surface)
	display flex
	gap 12px
	margin-bottom 16px

.navigation
	flex 1
	overflow auto

.item
	align-items center
	color #a8a29e // !
	display flex
	flex-direction column
	font var(--label-medium)
	justify-content center
	text-decoration none
	width 100%

.indicator
	align-items center
	border-radius 28px
	display flex
	height 100%
	justify-content center
	height 32px
	width 56px

	&.selected
		background var(--surface-3)
		color var(--primary)

.label
	margin 4px 0 12px 0
</style>