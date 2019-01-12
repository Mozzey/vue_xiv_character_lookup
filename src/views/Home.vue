<template>
  <div class='home'>
    <SearchBar v-on:character-search='characterSearch'/>
    <CharacterList v-bind:characterList='characterList'/>
  </div>
</template>

<script>
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/SearchBar';
import xivapi from '../api/xivapi';

export default {
  name: 'home',
  components: {
    CharacterList,
    SearchBar
  },
  data() {
    return {
      characterList: []
    };
  },
  methods: {
    characterSearch(name) {
      const { charName } = name;
      xivapi
        .get(`character/search?name=${charName}`)
        .then(res => {
          this.characterList = [...res.data.Results];
        })
        .catch(err => console.log(err));
    }
  }
  // created() {
  //   xivapi
  //     .get(`character/search?name=Mozzey+Magick`)
  //     .then(res => {
  //       res.data.Results.forEach(charData => {
  //         this.characterList = [...this.characterList, charData];
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }
};
</script>

<style lang="scss">
.btn {
  border: none;
  border-radius: 5px;
  background-color: #1e41dbfd;
  color: #fff;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
}
</style>

