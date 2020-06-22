<script>
  export let characters = [];

  const calculateColorIcon = status => {
    if (status === "Alive") {
      return "rgb(85, 204, 68);";
    }
    if (status === "Dead") {
      return "rgb(214, 61, 46);";
    }
    if (status === "unknown") {
      return "gray";
    }
  };
</script>

<style>
  .Characters-container {
    display: grid;
    width: 80%;
    margin: 0 auto;
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
    font-weight: 400;
    font-size: 1.1em;
    margin: 0;
  }
  .Character-status {
    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;
    margin-right: 0.375rem;
    background: rgb(214, 61, 46);
    border-radius: 50%;
  }
</style>

<div class="Characters-container">
  {#each characters as character}
    <div class="Character">
      <a href={`/characters/${character.id}`}>
        <div class="Character-image">
          <img src={character.image} alt={character.name} />
        </div>
        <div class="Character-descripcion">
          <h1>{character.name}</h1>
          <p>
            <span
              style={`background: ${calculateColorIcon(character.status)}`}
              class="Character-status" />
            {character.status} - {character.species}
          </p>
        </div>
      </a>
    </div>
  {:else}
    <h1>Loading..</h1>
  {/each}
</div>
