<script>
	export let label
	export let type
	export let name
</script>

<label class="text-field">
	<input class="input" type={type} name={name} placeholder=" ">
	<span class="label">{label}</span>
</label>


<style lang="stylus">
.text-field
	align-items center
	border-radius 4px
	box-shadow inset 0px 0px 0px 1px var(--outline)
	display flex
	height 56px
	margin-bottom 24px
	position relative
	width 100%
	transition box-shadow .1s ease

	&:focus-within
		box-shadow inset 0px 0px 0px 2px var(--primary)

		.label
			background var(--surface-5)
			color var(--primary)
			pointer-events none
			transform translateY(-28px)
			font var(--body-small)

.label
	color var(--on-surface)
	font var(--body-large)
	margin-left 12px
	padding 0 4px
	position absolute
	transition font .2s, transform .2s

.input
	height 100%
	padding 0 16px
	width 100%
	font var(--body-large)
	
	&:not(:placeholder-shown) + .label
		background var(--surface-5)
		font var(--body-small)
		transform translateY(-28px)
</style>