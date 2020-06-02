<script>
  import { onMount } from "svelte";
  import getAllCharacters from "../services/getAllCharacters.js";

  let characters;

  const fetchData = async () => {
    characters = await getAllCharacters();
  };

  onMount(fetchData);
</script>

<style>

</style>

<svelte:head>
  <title>Rick and Morty</title>
</svelte:head>

{@debug characters}
