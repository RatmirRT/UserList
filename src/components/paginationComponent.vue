<template>
  <div class="pagination">
    <ul>
      <li v-for="(pagination, key) in paginationList" :key="key">
        <a
          v-if="pagination !== '...'"
          @click.prevent="move(pagination)"
          :class="{ 'link-active': pagination === currentPage }"
          >{{ pagination }}</a
        >
        <span v-else>...</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    paginationList() {
      if (this.pageCount < 6) return [...this.range(1, this.pageCount)]
      if (this.currentPage <= 3) {
        return [...this.range(1, 4), '...', this.pageCount]
      }
      if (this.currentPage >= 4 && this.currentPage <= this.pageCount - 3) {
        return [
          1,
          '...',
          ...this.range(this.currentPage - 1, this.currentPage + 1),
          '...',
          this.pageCount,
        ]
      }
      return [1, '...', ...this.range(this.pageCount - 3, this.pageCount)]
    },
  },
  methods: {
    range(start, stop, step = 1) {
      return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step,
      )
    },
    move(pageNumber) {
      const queryParametrs = { ...this.$route.query }
      queryParametrs.page = pageNumber
      console.log(queryParametrs)
      this.$router.push({ path: '/', query: queryParametrs })
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 15px 0;
}

.pagination ul {
  display: flex;
  list-style-type: none;
  gap: 10px;
}

.pagination ul li:hover {
  -webkit-box-shadow: 0px -5px 7px -8px var(--primary-color) inset;
  -moz-box-shadow: 0px -5px 7px -8px var(--primary-color) inset;
  box-shadow: 0px -5px 7px -8px var(--primary-color) inset;
  cursor: pointer;
}

.pagination ul li a {
  padding: 5px;
  font-size: 20px;
}

.pagination ul li .link-active {
  color: var(--fouth-color);
}
</style>
