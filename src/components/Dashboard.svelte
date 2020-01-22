<script>
const clearInput = () => console.log('g1tte');
</script>

<style>
  .Dashboard {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin: 0 auto;
    overflow: auto;
    /* background: #f9f9f9; */
  }
  .Dashboard h2 {
    margin: 2rem;
  }

  .admin-form {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 250px);
    column-gap: 60px;
    font-size: 0.8rem;
  }
  .admin-form label {
    padding: 0.2rem;
  }
  .admin-form input[type="text"] {
    width: 250px;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  .admin-form textarea {
    width: 250px;
    height: 6rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    font-size: 1rem;
    resize: none;
    overflow: auto;
  }

  .input-field {
    margin-bottom: 2rem;
    width: 270px;
    padding: 0.5rem;
    background: #ffff;
    box-shadow: 2px 3px 7px #dadada;
  }
  .input-field fieldset {
    display: flex;
    overflow: auto;
  }
  .input-field input[type="checkbox"] {
    align-self: center;
    margin: 0 auto;
  }
</style>

<div class="Dashboard">
  <h2>admin dashboard</h2>
  <form class="admin-form">
    <div class="input-field">
      <label>stor highlight</label>
      <input type="text" list="img-list" on:click={clearInput} />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 1</label>
      <input type="text" list="img-list" on:click={clearInput} />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 2</label>
      <input type="text" list="img-list" on:click={clearInput} />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 3</label>
      <input type="text" list="img-list" on:click={clearInput} />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 4</label>
      <input type="text" list="img-list" on:click={clearInput} />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>ladda upp</label>
      <textarea />
    </div>
    <!-- <div class="input-field">
					<fieldset>
						<input type="checkbox" />
						<label>övriga bilder blablabla</label>
						<input type="checkbox" />
						<label>övriga bilder blablabla</label>
						<input type="checkbox" />
						<label>övriga bilder blablabla</label>
						<input type="checkbox" />
						<label>övriga bilder blablabla</label>
						<input type="checkbox" />
						<label>övriga bilder blablabla</label>
						<input type="checkbox" />
						<label>övriga bilder blablabla</label>
            <input type="checkbox" />
						<label>övriga bilder blablabla</label>
					</fieldset>
				</div> -->
  </form>
  <datalist id="img-list">
    <option value="Chocolate" />
    <option value="Coconut" />
    <option value="Mint" />
    <option value="Strawberry" />
    <option value="Vanilla" />
  </datalist>
</div>
