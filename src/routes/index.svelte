<script>
  import { onMount } from "svelte";
  import getAllCharacters from "../services/getAllCharacters.js";
  import Characters from "../components/Characters.svelte";

  let characters = [];

  const fetchData = async () => {
    characters = await getAllCharacters();
  };

  onMount(fetchData);
</script>

<style>
  .Characters {
    padding: 2em 0;
    background: rgb(32, 35, 41);
  }
</style>

<svelte:head>
  <title>Rick and Morty</title>
</svelte:head>

<!-- {@debug characters} -->

<div class="Characters">
  <div class="container">
    <Characters {characters} />
  </div>
</div>
