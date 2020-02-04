<script>
  import { onMount } from "svelte";
  import { imageList, uri } from "../stores.js";


  onMount(async () => {
    const res = await fetch(`${$uri}/images`)
      .catch(err => console.error(err.message));
    $imageList = await res.json();
  });
</script>

<style>
  .Feed {
    display: grid;
    grid-template-columns: repeat(2, 542px);
    grid-template-rows: repeat(2, 542px);
    justify-content: center;
    height: 80vh;
    max-width: 100%;
    overflow: auto;
  }
  .Feed::-webkit-scrollbar {
    display: none;
  }

  .big-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .big-highlight img {
    width: 540px;
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

  .small-container {
    display: grid;
    grid-template-columns: repeat(2, 271px);
    grid-template-rows: repeat(2, 271px);
  }

  .small-highlight {
    position: relative;
    transition: ease-in-out 0.2s;
  }
  .small-highlight img {
    width: 270px;
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

  .other-imgs {
    display: grid;
    grid-template-columns: repeat(3, 362px);
    grid-template-rows: repeat(3, 362px);
  }
  .other-imgs img {
    width: 360px;
    transition: ease-in-out 0.2s;
  }
  .other-imgs img:hover {
    opacity: 0.6;
  }
</style>

<div class="Feed">
  {#each $imageList as { placement, path, caption }}
    {#if placement === 'bigHighlight'}
      <div class="big-highlight">
        <img src={path} alt="big-highlight" />
        <p class="big-highlight-text">{caption}</p>
      </div>
    {/if}
  {/each}
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
  <div class="other-imgs">
    {#each $imageList as { placement, path }}
      {#if placement === 'otherImages'}
        <img src={path} alt="other-images" />
      {/if}
    {/each}
  </div>
</div>
