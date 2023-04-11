<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores'
	import Icon from '@iconify/svelte'
	export let navigation

</script>
<nav class="navigation-bar" in:fly="{{delay: 100, duration: 160, y: 80}}" out:fly="{{duration: 160, y: 80}}">
	{#each navigation as item}
		<a href={item.url} class="item target">
			<span class="indicator ripple" class:selected={$page.url.pathname===item.url}>
				<Icon icon={item.icon} width="24" height="24"/>
			</span>
			<span class="label">{item.label}</span>
		</a>
	{/each}
</nav>
	
<style lang="stylus">
.navigation-bar
	background var(--surface-4)
	display flex
	height 80px
	padding 0 16px
	position fixed
	bottom 0
	width 100%
	
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
	color var(--on-surface-variant)
</style>