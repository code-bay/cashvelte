<script>
  import FloatingActionButton from '$components/buttons/FloatingActionButton.svelte'
	import IconButton from '$components/buttons/IconButton.svelte';
  import SimpleButton from "$components/buttons/SimpleButton.svelte"
	import Card from '../components/Card.svelte';
	import TextInput from '../components/TextInput.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<SimpleButton icon="mdi:arrow-right" label="Click Here!" theme="filled"/>
<FloatingActionButton icon="mdi:heart" theme="fixed"/>
<IconButton icon="mdi:menu" theme="tonal"/>
<Card theme="elevated">Test card!</Card>
<TextInput type="text" label="Name"/>