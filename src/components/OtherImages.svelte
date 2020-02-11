<script>
  import { imageList } from "../stores.js";
</script>

<style>
  .other-imgs {
    display: grid;
    grid-template-columns: repeat(3, 364px);
    grid-template-rows: repeat(1, 364px);
  }
  .other-imgs img {
    object-fit: cover;
    width: 100%;
    padding: 0.1rem;
    transition: ease-in-out 0.2s;
  }
  .other-imgs img:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 400px) {
    .other-imgs {
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(1, 100px);
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
