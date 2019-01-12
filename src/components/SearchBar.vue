<template>
  <form @submit='characterSearch' class='search-container'>
    <input
      type='text'
      v-model='charName'
      name='charName'
      class='search-bar'
      placeholder='Search for characters...'
    >
    <input type='submit' value='Search' class='btn'>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      charName: ''
    };
  },
  methods: {
    characterSearch(e) {
      e.preventDefault();
      const name = {
        charName: this.charName
      };
      this.$emit('character-search', name);
      this.charName = '';
    }
  }
};
</script>

<style lang='scss' scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .search-bar {
    height: 2.5em;
    margin-right: 5px;
    flex-basis: 40%;
    border-radius: 5px;
    font-size: 1rem;
  }
}
</style>
