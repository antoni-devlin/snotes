<script>
  import Header from '$lib/header.svelte'
  import Sidebar from '$lib/sidebar.svelte'
  import Editor from '$lib/editor.svelte'

  let showSidebar = false;
  function toggleSidebar() {
    showSidebar = !showSidebar;
  }

</script>

<Header on:togglemenu={toggleSidebar}/>

<Sidebar shown={showSidebar}/>

<Editor />

<style>
  
</style>