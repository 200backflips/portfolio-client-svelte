<script>
  import Header from "./components/Header.svelte";
  import Feed from "./components/Feed.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import Footer from "./components/Footer.svelte";
  import { isLoggedIn } from "./stores.js";
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
