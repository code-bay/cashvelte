<script>
	import Icon from '@iconify/svelte'
	export let action
	export let icon 
	export let theme
	export let url
</script>

{#if url}
	<a href={url} class="target">
		<span class={`icon-button ${theme} ripple`}>
			{#if icon}
				<Icon icon={icon} width="24" height="24"/>
			{/if}
		</span>
	</a>
{:else}
	<button class="target" on:click={action}>
		<span class={`icon-button ${theme} ripple`}>
			{#if icon}
				<Icon icon={icon} width="24" height="24"/>
			{/if}
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
.filled
	background var(--primary)
	color var(--on-primary)

.tonal
	background var(--secondary)
	color var(--on-secondary)

.standard
	color var(--primary)
</style>  