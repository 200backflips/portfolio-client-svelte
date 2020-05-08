<script>
  import { imageList } from "../stores.js";
</script>

<style>
  .other-imgs {
    display: grid;
    grid-template-columns: repeat(3, calc(100vw / 3.75));
    grid-template-rows: repeat(2, calc(100vw / 3.75));
  }
  .other-imgs > img {
    object-fit: cover;
    width: 100%;
    padding: 0.3%;
    transition: ease-in-out 0.2s;
  }

  @media screen and (max-width: 800px) {
    .other-imgs {
      grid-template-columns: repeat(2, calc(100vw / 2.5));
      grid-template-rows: repeat(3, calc(100vw / 2.5));
    }
  }
</style>

<div class="other-imgs">
  {#each $imageList as { placement, path }}
    {#if placement === 'otherImages'}
      <img src={path} alt="other-images" />
    {/if}
  {/each}
</div>
