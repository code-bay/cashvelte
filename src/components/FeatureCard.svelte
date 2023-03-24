<script>
	import Icon from '@iconify/svelte';
	export let description;
	export let icon;
	export let title;
</script>

<div class="card">
	<div class="symbol"><Icon {icon} width="24" height="24" /></div>
	<div class="title">{title}</div>
	<div class="description">{description}</div>
</div>

<style lang="stylus">
.card
	border-radius 12px
	display flex
	flex-direction column
	
.elevated
	background var(--surface)
</style>
