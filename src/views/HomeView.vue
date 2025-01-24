<template>
  <searchaBar />
  <characterList :characterList="userList" />
  <paginationComponent
    v-if="userListInfo && userListInfo.pages > 1"
    :pageCount="userListInfo.pages"
    :currentPage="pageNumber"
  />
</template>

<script>
import axios from 'axios'
import characterList from '@/components/characterList.vue'
import paginationComponent from '@/components/paginationComponent.vue'
import searchaBar from '@/components/searchaBar.vue'

export default {
  components: { characterList, paginationComponent, searchaBar },
  data() {
    return {
      userList: [],
      userListInfo: [],
      pageNumber: 1,
    }
  },
  watch: {
    currentQuery: function (newQuery) {
      this.initialCharactersList(newQuery)
    },
  },
  computed: {
    currentQuery() {
      return this.$route.query
    },
  },
  async mounted() {
    await this.initialCharactersList(this.$route.query)
  },
  methods: {
    async initialCharactersList(queryParametrs) {
      let url = 'https://rickandmortyapi.com/api/character'
      this.pageNumber = Number(queryParametrs.page) ? Number(queryParametrs.page) : 1
      try {
        const response = await axios(url, { params: queryParametrs })
        this.userListInfo = response.data.info
        this.userList = response.data.results
      } catch {
        this.userList = null
        this.userListInfo = null
      }
    },
  },
}
</script>

<style scoped></style>
