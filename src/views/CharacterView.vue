<template>
  <div class="character-card" v-if="character">
    <div class="character-maininfo">
      <div class="character-picture">
        <img :src="character.image" :alt="character.name" />
      </div>
      <h2 class="character-name">{{ character.name }}</h2>
    </div>
    <div class="character-details">
      <p>name: {{ character.name }}</p>
      <p>status : {{ character.status }}</p>
      <p>species : {{ character.species }}</p>
      <p>gender : {{ character.gender }}</p>
      <p>type : {{ character.type }}</p>
      <p v-if="character.origin">origin : {{ character.origin.name }}</p>
      <p v-if="character.location">location : {{ character.location.name }}</p>
    </div>
  </div>
  <span v-else>No data</span>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      character: {},
    }
  },
  async mounted() {
    await this.initialCharacter()
  },
  methods: {
    async initialCharacter() {
      if (
        this.$store.state.character.id &&
        this.$store.state.character.id === Number(this.$route.params.id)
      ) {
        this.character = this.$store.state.character
        return
      }
      const url = 'https://rickandmortyapi.com/api/character/' + this.$route.params.id
      try {
        const response = await axios(url)
        this.character = response.data
        this.$store.commit('changeCurrentCharacter', this.character)
      } catch {
        this.character = null
      }
    },
  },
}
</script>

<style scoped>
.character-card {
  display: flex;
  gap: 20px;
}

.character-details {
  flex-grow: 1;
}

.character-details p {
  margin-bottom: 15px;
}

@media screen and (max-width: 600px) {
  .character-card > div {
    width: calc(50% - 20px);
  }

  .character-picture img {
    width: 100%;
  }
}

@media screen and (max-width: 450px) {
  .character-card {
    flex-wrap: wrap;
  }
  .character-card > div {
    width: 100%;
  }

  .character-details P:first-child {
    display: none;
  }
}
</style>
