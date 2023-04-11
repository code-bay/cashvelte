<script>
	import { fade, slide } from 'svelte/transition';

	import { page } from '$app/stores'
	import Icon from '@iconify/svelte'
	import FloatingActionButton from '$components/buttons/FloatingActionButton.svelte'

	export let navigation
	export let title
</script>


<div class="navigation-drawer" in:slide="{{delay: 100, duration: 160, axis: 'x'}}" out:slide="{{duration: 160, axis: 'x'}}">
	<div >
		<div class="header">
			<div class="logo">
				<img src="../logo.svg" width="32px" height="32x" alt="logo"/>
				<!-- <h3>{@html title}</h3> -->
			</div>
			<div>
				<FloatingActionButton
					color="surface"
					icon="material-symbols:add-rounded"
					label="Add transaction"
					size="extended"
					type="file"
				/> 
			</div>
		</div>
	
		<div class="title">Menu</div>
		<div class="navigation">
			{#each navigation as item}
				<a href={item.url} class="item ripple target" class:selected={$page.url.pathname===item.url}>
					<Icon icon={item.icon} width="24" height="24"/>
					<span class="label">{item.label}</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="stylus">
.navigation-drawer
	display flex
	flex-direction column
	height 100%
	max-width 256px
	position fixed
	top 0
	width 100%
	z-index 1

.header
	border-bottom solid 1px var(--surface-3)
	display flex
	flex-direction column
	font var(--title-medium)
	margin 16px 24px 20px 28px
	padding-bottom 32px

.logo
	color var(--on-surface)
	display flex
	gap 12px
	margin-bottom 16px

.title
	color var(--on-surface)
	font var(--label-large)
	margin 0 0 16px 28px

.navigation
	flex 1
	padding-right 8px
	overflow-x hidden

.item
	align-items center
	border-radius 0 28px 28px 0
	color #a8a29e // !
	display flex
	font var(--label-large)
	height 56px
	padding 0 16px 0 28px
	text-decoration none
	width 100%

	:global(.iconify)
		min-height 24px
		min-width 24px

	&.selected
		background var(--surface-4)
		color var(--primary)

.label
	margin-left 16px

.footer
	border-top solid 1px var(--secondary-container)
	color var(--secondary)
	font var(--title-medium)
	padding 18px 12px 0
</style>