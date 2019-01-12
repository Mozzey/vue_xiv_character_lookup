<template>
  <div class='character__list'>
    <div
      class='character-card-container'
      v-bind:key='character.id'
      v-for='character in characterList'
    >
      <CharacterCard v-bind:character='character'/>
    </div>
  </div>
</template>

<script>
import CharacterCard from './CharacterCard';
import xivapi from '../api/xivapi';

export default {
  name: 'CharacterList',
  components: {
    CharacterCard
  },
  props: ['characterList']
};
</script>

<style scoped>
.character__list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.character-card-container {
  flex-basis: 20%;
  max-width: 200px;
  margin: 0 10px;
}
</style>
