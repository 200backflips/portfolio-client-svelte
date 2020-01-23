<script>
  import {
    imgList,
    bigHighlight,
    smallHighlights,
    otherImages
  } from "../stores.js";

  const setBigHighlight = e => {
    if (e.target.id === "image") {
      return ($bigHighlight.image = e.target.value);
    }
    return ($bigHighlight.caption = e.target.value);
  };

  const setSmallHighlights = e => {
    if (e.target.id === "img") {
      return ($bigHighlight.image = e.target.value);
    }
    return ($bigHighlight.caption = e.target.value);
  };

  const addOtherImages = e => {
    if (e.target.checked === true) {
      return $otherImages.push(e.target.id);
    }
    return $otherImages.splice($otherImages.indexOf(e.target.id), 1);
  };
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
  .admin-form input[type="list"] {
    width: 250px;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
  .admin-form textarea {
    width: 250px;
    height: 6rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    font-size: 0.8rem;
    resize: none;
    overflow: auto;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  .input-field {
    margin-bottom: 2rem;
    width: 270px;
    padding: 0.5rem;
    background: #ffff;
    box-shadow: 2px 3px 7px #dadada;
  }

  .other-imgs {
    max-height: 15rem;
    margin-bottom: 1rem;
    display: grid;
    justify-items: start;
    align-items: start;
    grid-template-columns: 10% 90%;
    grid-template: rows 100%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    overflow: auto;
  }
  .other-imgs input[type="checkbox"] {
    margin: 0.3rem auto;
  }
</style>

<div class="Dashboard">
  <h2>admin dashboard</h2>
  <button on:click={() => console.log($bigHighlight)}>LOG</button>
  <button on:click={() => console.log($otherImages)}>looog</button>
  <form class="admin-form">
    <div class="input-field">
      <label>stor highlight</label>
      <input
        type="list"
        list="img-list"
        id="image"
        on:change={setBigHighlight} />
      <label>bildtext</label>
      <textarea id="caption" on:change={setBigHighlight} />
    </div>
    <div class="input-field">
      <label>liten highlight 1</label>
      <input type="list" list="img-list" />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 2</label>
      <input type="list" list="img-list" />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 3</label>
      <input type="list" list="img-list" />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>liten highlight 4</label>
      <input type="list" list="img-list" />
      <label>bildtext</label>
      <textarea />
    </div>
    <div class="input-field">
      <label>övriga bilder</label>
      <div class="other-imgs">
        {#each $imgList as img}
          <input type="checkbox" id={img} on:click={addOtherImages} />
          <label>{img}</label>
        {/each}
      </div>
    </div>
  </form>
  <datalist id="img-list">
    {#each $imgList as img}
      <option value={img} />
    {/each}
  </datalist>
</div>
