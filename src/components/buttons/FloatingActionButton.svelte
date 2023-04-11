<script>	
	import Icon from '@iconify/svelte';
	//export let accept
	export let action = () => {};
	export let color;
	export let icon;
	export let label;
	export let position = "";
	export let size = "";
	export let type;
	export let href;
</script>

{#if href}
	<a {href} class={`floating-action-button ${color} ${position} ${size} ripple target`}>
		{#if icon}
			<Icon {icon} width="24" height="24" />
		{/if}
		{#if label}
			<span class="label">{label}</span>
		{/if}
	</a>
{:else if type === "button"}
	<button {type} class={`floating-action-button ${color} ${position} ${size} ripple target`} use:action>
		{#if icon}
			<Icon {icon} width="24" height="24" />
		{/if}
		{#if label}
			<span class="label">{label}</span>
		{/if}
	</button>
{:else}
	<label class={`floating-action-button ${color} ${position} ${size} ripple target`} use:action>
		<input {type} />
		{#if icon}
			<Icon {icon} width="24" height="24" />
		{/if}
		{#if label}
			<span class="label">{label}</span>
		{/if}
	</label>
{/if}

<style lang="stylus">
.floating-action-button
	align-items center
	border-radius 16px
	cursor pointer
	display inline-flex
	font var(--label-large)
	height 56px
	justify-content center
	min-width 56px
	white-space nowrap
	max-width 500px

// Mods ----- //
// 1 - Color
.neutral
	background var(--surface-4)
	color var(--on-surface)

.surface
	background var(--surface-4)
	color var(--primary)

.primary
	background var(--primary)
	color var(--on-primary)

// 2 - Shape
.round
	border-radius 50%

// 3 - Size
.extended
	max-width 500px
	padding 0 16px

	:global(.iconify)
		margin-right 12px

// 4 - Position
.fixed
	bottom 96px
	box-shadow rgba(#000, .24) 0px 3px 8px
	right 16px
	position fixed
	z-index 1

// 5 - Fixes

input[type="file"]
	display none
</style>
