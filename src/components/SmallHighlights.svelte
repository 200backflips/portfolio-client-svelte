<script>
  import { imageList } from "../stores.js";
</script>

<style>
  .small-container {
    display: grid;
    grid-template-columns: repeat(2, 273px);
    grid-template-rows: repeat(2, 273px);
  }

  .small-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .small-highlight img {
    object-fit: cover;
    width: 100%;
    padding: 0.1rem;
  }
  .small-highlight:hover {
    opacity: 0.6;
  }
  .small-highlight-text {
    display: none;
    position: absolute;
    width: 200px;
    margin: 0 auto;
    left: 12%;
    top: 18%;
    color: #ffffff;
    text-shadow: 2px 2px 3px #000000;
    font-size: 1.2rem;
  }
  .small-highlight:hover > .small-highlight-text {
    display: block;
  }
  @media screen and (max-width: 400px) {
    .small-container {
      grid-template-columns: repeat(2, 75px);
      grid-template-rows: repeat(1, 75px);
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
