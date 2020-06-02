<script>
  import { onMount } from "svelte";
  import getAllCharacters from "../services/getAllCharacters.js";

  let characters = [];

  const fetchData = async () => {
    characters = await getAllCharacters();
  };

  onMount(fetchData);
</script>

<style>
  .Characters {
    padding: 2em 0;
    background: #333;
  }
  .Characters-container {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  .Character {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 0.3em;
    overflow: hidden;
    background: white;
    transition: 0.42s ease;
    box-shadow: 0 0 0.8em 0 rgba(0, 0, 0, 0.5);
  }
  .Character a {
    flex-direction: inherit;
    display: inherit;
    text-decoration: none;
  }
  .Character:hover {
    transform: scale(1.12);
  }
  .Character:active {
    transform: scale(0.9);
  }
  .Character-image {
    display: flex;
    width: 100%;
    overflow: hidden;
  }
  .Character-image img {
    transition: 0.5s ease;
    width: 100%;
  }
  .Character-descripcion {
    height: 20%;
    padding: 1.2em;
  }
  .Character-descripcion h1 {
    font-size: 1.8em;
    font-weight: bold;
    margin: 0;
  }
  .Character-descripcion p {
    font-weight: lighter;
    font-size: 1.1em;
    margin: 0;
  }
</style>

<svelte:head>
  <title>Rick and Morty</title>
</svelte:head>

<!-- {@debug characters} -->

<div class="Characters">
  <div class="container">
    <div class="Characters-container">
      {#each characters as character}
        <div class="Character">
          <a href={`/characters/${character.id}`}>
            <div class="Character-image">
              <img src={character.image} alt={character.name} />
            </div>
            <div class="Character-descripcion">
              <h1>{character.name}</h1>
              <p>{character.status} - {character.species}</p>
            </div>
          </a>
        </div>
      {:else}
        <h1>Loading..</h1>
      {/each}
    </div>

  </div>
</div>
