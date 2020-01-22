<script>
  import { isLoggedIn } from "../stores.js";
  const toggleLogIn = () => {
    $isLoggedIn = !$isLoggedIn;
  }
</script>

<style>
  .Header {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    padding: 2rem;
  }

  .Header button {
    border: none;
    outline: none;
    font-size: 1rem;
    color: #000000;
  }
  .Header button:hover {
    color: #9f9f9f;
  }
</style>

<div class="Header">
  <button on:click={toggleLogIn}>{$isLoggedIn ? 'log out' : 'log in'}</button>
</div>
