<template>
  <div v-if="characterList" class="character-list">
    <RouterLink
      v-for="characterData in characterList"
      :key="characterData.id"
      @click.prevent="linkToCharacter(characterData)"
      :to="'/character/' + characterData.id"
    >
      <characterListItem :characterData="characterData" />
    </RouterLink>
  </div>

  <span v-else>No data</span>
</template>

<script>
import characterListItem from '@/components/characterListItem.vue'
export default {
  components: { characterListItem },
  props: {
    characterList: {
      type: Object,
      default: null,
    },
  },
  methods: {
    linkToCharacter(characterData) {
      this.$store.commit('changeCurrentCharacter', characterData)
      this.$router.push('/character/' + characterData.id)
    },
  },
}
</script>

<style scoped>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
}

.character-list a {
  width: calc(25% - 12px);
}

@media screen and (max-width: 1200px) {
  .character-list a {
    width: calc(33% - 12px);
    overflow: hidden;
  }
}

@media screen and (max-width: 600px) {
  .character-list a {
    width: calc(50% - 12px);
    overflow: hidden;
  }
}
</style>
