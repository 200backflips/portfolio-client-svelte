<script>
  import { onMount } from "svelte";
  import { imageList, uri } from "../stores.js";
  import BigHighlight from "./BigHighlight.svelte";
  import SmallHighlights from "./SmallHighlights.svelte";
  import OtherImages from "./OtherImages.svelte";

  onMount(async () => {
    const res = await fetch(`${$uri}/images`).catch(err =>
      console.error(err.message)
    );
    $imageList = await res.json();
  });
</script>

<style>
  .Feed {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 80vh;
    margin: 0 auto;
    overflow: auto;
  }
  .Feed::-webkit-scrollbar {
    display: none;
  }

  .highlights-container {
    display: grid;
    grid-template-columns: repeat(2, calc(100vw / 2.5));
    grid-template-rows: repeat(1, calc(100vw / 2.5));
  }
  @media screen and (max-width: 800px) {
    .highlights-container {
      grid-template-columns: repeat(1, calc(100vw / 1.25));
      grid-template-rows: repeat(1, calc(100vw / 1.25));
    }
  }
</style>

<div class="Feed">
  <div class="highlights-container">
    <BigHighlight />
    <SmallHighlights />
  </div>
  <OtherImages />
</div>
