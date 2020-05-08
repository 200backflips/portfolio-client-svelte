<script>
  import { imageList } from "../stores.js";
</script>

<style>
  .big-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .big-highlight > img {
    object-fit: cover;
    width: 100%;
    padding: 0.2%;
  }
  .big-highlight-text {
    display: none;
    position: absolute;
    width: 80%;
    left: 6%;
    top: 18%;
    color: #ffffff;
    font-size: calc(100vw / 55);
    text-shadow: 2px 2px 3px #000000;
  }
</style>

{#each $imageList as { placement, path, caption }}
  {#if placement === 'bigHighlight'}
    <div class="big-highlight">
      <img src={path} alt="big-highlight" />
      <p class="big-highlight-text">{caption}</p>
    </div>
  {/if}
{/each}
