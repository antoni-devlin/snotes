<script>
  import Header from '$lib/header.svelte'
  import Sidebar from '$lib/sidebar.svelte'
  import Editor from '$lib/editor.svelte'

  function toggleMenu() {
    document
  .getElementsByClassName("toggle-menu")[0]
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementsByClassName("sidebar")[0].classList.toggle("toggled");
  });
  }

</script>

<Header />

<Sidebar />

<Editor />

<style>
  
</style>