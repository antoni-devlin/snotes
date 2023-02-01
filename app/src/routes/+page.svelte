<script>
  import Header from '$lib/header.svelte'
  import Sidebar from '$lib/sidebar.svelte'

  tinymce.init({
      selector: 'textarea',
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
    });

  document
  .getElementsByClassName("toggle-menu")[0]
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementsByClassName("sidebar")[0].classList.toggle("toggled");
  });
</script>

<Header />

<Sidebar />

<!-- Note editing section -->
<section class="main">
  <textarea>
     Welcome to TinyMCE!
  </textarea>
  <script>
    
  </script>
</section>

<style>
  
</style>