<script>
	import {createEventDispatcher} from 'svelte';
	
	const dispatch = createEventDispatcher();
	
</script>

<header>
	<a href="#" class="toggle-menu">x</a>
	<button on:click="{() => dispatch('togglemenu')}">x</button>
	<h1>Notes app</h1>
</header>

<style>

</style>