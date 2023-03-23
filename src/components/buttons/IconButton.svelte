<script>
	import Icon from '@iconify/svelte'
	export let action
	export let icon 
	export let color
	export let url
</script>

{#if url}
	<a href={url} class="target">
		<span class={`icon-button ${color} ripple`}>
			<Icon icon={icon} width="24" height="24"/>
		</span>
	</a>
{:else}
	<button class="target" on:click={action}>
		<span class={`icon-button ${color} ripple`}>
			<Icon icon={icon} width="24" height="24"/>
		</span>
	</button>
{/if}

<style lang="stylus">
.target
	place-content center
	display grid
	height 48px
	width 48px

.icon-button
	place-content center
	border-radius 50%
	display grid
	height 40px
	width 40px

// 🎨 Themes
.surface
	color var(--on-surface)

.filled
	background var(--primary-container)
	color var(--on-primary-container)

.tonal
	background var(--secondary)
	color var(--on-secondary)

.standard
	color var(--primary)
</style>  