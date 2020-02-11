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
    padding: 0.1rem;
  }
  .big-highlight:hover {
    opacity: 0.6;
  }
  .big-highlight-text {
    display: none;
    position: absolute;
    width: 400px;
    margin: 0 auto;
    left: 12%;
    top: 18%;
    color: #ffffff;
    text-shadow: 2px 2px 3px #000000;
    font-size: 1.4rem;
  }
  .big-highlight:hover > .big-highlight-text {
    display: block;
    z-index: 2;
    opacity: 1;
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
