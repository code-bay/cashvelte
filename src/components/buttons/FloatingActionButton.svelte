<script>
	import Icon from '@iconify/svelte'
	export let action
	export let color
	export let icon
	export let label
	export let options
	export let type
</script>

<button
	class={`floating-action-button ${color} ${options} ${type} ripple`}
	on:click={action}
>
	{#if icon}
		<Icon icon={icon} width="24" height="24"/>
	{/if}
	{#if label}
		<span class="label">{label}</span>
	{/if}
</button>

<style lang="stylus">
.floating-action-button
	align-items center
	border-radius 16px
	display flex
	font var(--label-large)
	height 56px
	justify-content center
	width 56px

// Mods ----- //
// 1 - Color
.surface
	background var(--surface-4)
	color var(--on-surface)

.primary
	background var(--primary-container)
	color var(--on-primary-container)

// 2 - Shape
.round
	border-radius 50%

// 3 - Size
.extended
	min-width 80px
	padding 0 16px

.large
	height 72px
	width 72px

// 4 - Position
.fixed
	bottom 16px
	box-shadow rgba(#000, .24) 0px 3px 8px
	right 16px
	position fixed
	z-index 1
</style>  