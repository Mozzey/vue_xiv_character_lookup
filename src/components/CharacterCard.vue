<template>
  <div class='char-card'>
    <a href='#' class='char-profile-link'>
      <img :src='character.Avatar' alt='Avatar' class='avatar'>
      <div class='char-data-container'>
        <p class='name'>{{ character.Name }}</p>
        <p class='server'>{{ character.Server }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CharacterCard',
  props: ['character']
};
</script>

<style lang="scss" scoped>
.char-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #3e4392;
  border-radius: 5px;
  margin: 2em 0;
  box-shadow: 5px 10px 50px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 2px 2px 20px #3e4392;
  }

  .char-profile-link {
    text-decoration: none;
    color: #3e4392;
    font-weight: 700;
  }

  .avatar {
    height: 8em;
    width: 100%;
  }

  .char-data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .name {
      margin: 10px 0;
      text-align: center;
    }

    .server {
      margin-bottom: 10px;
      text-align: center;
    }
  }
}
</style>
