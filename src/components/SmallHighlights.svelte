<script>
  import { imageList } from "../stores.js";
</script>

<style>
  .small-container {
    display: grid;
    grid-template-columns: repeat(2, calc(100vw / 5));
    grid-template-rows: repeat(2, calc(100vw / 5));
  }

  .small-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .small-highlight > img {
    object-fit: cover;
    width: 100%;
    padding: 0.4%;
  }
  .small-highlight:hover {
    opacity: 0.6;
  }
  .small-highlight-text {
    display: none;
    position: absolute;
    width: 90%;
    left: 6%;
    top: 14%;
    color: #ffffff;
    font-size: calc(100vw / 85);
    text-shadow: 2px 2px 3px #000000;
  }
  .small-highlight:hover > .small-highlight-text {
    display: block;
  }
  .small-highlight:hover > .small-highlight-text {
    display: block;
  }
  @media screen and (max-width: 800px) {
    .small-container {
      grid-template-columns: repeat(2, calc(100vw / 2.5));
      grid-template-rows: repeat(2, calc(100vw / 2.5));
    }
  }
</style>

<div class="small-container">
  {#each $imageList as { placement, path, caption }}
    {#if placement === 'smallHighlight'}
      <div class="small-highlight">
        <img src={path} alt="small-highlight" />
        <p class="small-highlight-text">{caption}</p>
      </div>
    {/if}
  {/each}
</div>
