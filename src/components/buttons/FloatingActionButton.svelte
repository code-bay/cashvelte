<script>
	import Icon from '@iconify/svelte'
	export let action
	export let icon
	export let theme
</script>

<button class={`floating-action-button ${theme}`} on:click={action}>
	{#if icon}
		<Icon icon={icon} width="24" height="24"/>
	{/if}
</button>

<style lang="stylus">
.floating-action-button
	align-items center
	background var(--primary)
	border-radius 16px
	color var(--on-primary)
	display flex
	height 56px
	justify-content center
	width 56px

// 🔧 Mods
.extended
	min-width 80px

.fixed
	bottom 16px
	box-shadow rgba(#000, .24) 0px 3px 8px
	right 16px
	position fixed
	z-index 1
</style>  