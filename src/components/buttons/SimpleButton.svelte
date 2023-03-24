<script>
	import Icon from '@iconify/svelte';
	export let action;
	export let icon;
	export let label;
	export let theme;
	export let type = 'button';
	export let url;
</script>

{#if url}
	<a href={url} class={`simple-button ${theme}`}>
		{#if icon}
			<Icon {icon} width="24" height="24" />
		{/if}
		{label}
	</a>
{:else}
	<button class={`simple-button ${theme}`} {type} on:click={action}>
		{#if icon}
			<Icon {icon} width="24" height="24" />
		{/if}
		{label}
	</button>
{/if}

<style lang="stylus">
.simple-button
	align-items center
	border-radius 20px
	display flex
	font var(--label-large)
	height 40px
	justify-content center
	white-space nowrap

// 🎨 Themes
.filled
	background var(--primary)
	color var(--on-primary)
	padding 0 24px

	:global(.iconify)
		margin 0 8px 0 -8px

.tonal
	background var(--secondary)
	color var(--on-secondary)
	padding 0 24px

	:global(.iconify)
		margin 0 8px 0 -8px

.standard
	color var(--primary)
	padding 0 12px

	:global(.iconify)
		margin-right 8px
</style>
