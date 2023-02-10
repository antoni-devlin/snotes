<script>
  import Editor from "@tinymce/tinymce-svelte"

  let value = "Welcome to TinyMCE!"
</script>

<section class="main">
  <Editor bind:value={value}></Editor>
  <div>{@html value}</div>
</section>

<style>

</style>