<template>
  <div class="search">
    <form @submit.prevent>
      <input type="search" placeholder="Search..." v-model="searchQuery" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  watch: {
    searchQuery: function (newValue) {
      this.debouncedSearch(newValue)
    },
  },
  created() {
    this.debouncedSearch = this.debounce(this.searchRequest, 1500)
  },
  methods: {
    debounce(fn, t) {
      let timer
      return function (args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn(args)
        }, t)
      }
    },

    searchRequest(searchQuery) {
      searchQuery ? this.$router.push('/?name=' + searchQuery) : this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
}

.search input {
  padding: 5px;
  font-size: 18px;
}

.search input:focus {
  outline: none;
  border-color: var(--primary-color);
}

@media screen and (max-width: 450px) {
  .search input {
    font-size: 14px;
  }
}
</style>
