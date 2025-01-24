<template>
  <div class="character-card">
    <div class="character-picture">
      <img :src="characterData.image" :alt="characterData.name" />
    </div>
    <h3 class="character-name">{{ characterData.name }}</h3>
    <div class="character-info">
      <p>name: {{ characterData.name }}</p>
      <p>gender: {{ characterData.gender }}</p>
      <p>species: {{ characterData.species }}</p>
      <p>location : {{ characterData.location.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characterData: Object,
  },
}
</script>

<style scoped>
.character-card {
  position: relative;
  height: 326px;
}

.character-picture {
  height: calc(100% - 22px);
  overflow: hidden;
  position: relative;
  width: 100%;
}

.character-picture img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  display: block;
  margin: 0 auto;
}

.character-name {
  padding-left: 15px;
}

.character-info {
  position: absolute;
  bottom: 0;
  opacity: 0;
  padding: 15px;
}

.character-card:hover > .character-picture {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.character-card:hover > .character-picture:after {
  content: '';
  display: block;
  max-width: 326px;
  width: 100%;
  height: 40%;
  background-color: var(--primary-color);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  box-shadow: 0 -1px 5px 1px var(--primary-color);
  opacity: 0.5;
}

.character-card:hover > .character-picture img {
  height: 100%;
  filter: brightness(80%);
}

.character-card:hover > .character-name {
  opacity: 0;
}

.character-card:hover > .character-info {
  opacity: 1;
  transition: 0.2s;
}

.character-card:hover > .character-info p {
  color: var(--secondary-color);
}

@media screen and (max-width: 900px) {
  .character-card {
    height: 270px;
  }

  .character-card:hover > .character-picture:after {
    height: 60%;
  }

  .character-info p {
    font-size: 15px;
  }
}

@media screen and (max-width: 450px) {
  .character-card {
    height: 200px;
  }

  .character-name {
    font-size: 13px;
    padding: 0;
  }

  .character-info p {
    font-size: 13px;
  }
}
</style>
