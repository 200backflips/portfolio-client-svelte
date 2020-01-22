<script>
  import Header from "./Header.svelte";
  import Feed from "./Feed.svelte";
  import Dashboard from "./Dashboard.svelte";
  import Footer from "./Footer.svelte";
  import { isLoggedIn } from "../stores.js";
</script>

<main>
  <Header />
  {#if $isLoggedIn === true}
    <Dashboard />
  {:else}
    <Feed />
  {/if}
  <Footer />
</main>
