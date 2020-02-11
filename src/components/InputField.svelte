<script>

</script>

<style>

</style>

<div class="Footer">
  <img src="pass.svg" alt="contact" />
  <img src="instagram.svg" alt="instagram" />
  <img src="telegram.svg" alt="email" />
</div>

<div class="input-field">
  <label>stor highlight</label>
  <input type="list" list="img-list" id="image" on:change={setBigHighlight} />
  <label>bildtext</label>
  <textarea id="caption" on:change={setBigHighlight} />
</div>
