<template>
  <div class='navbar'>
    <router-link class='navbar-brand' to='/'>
      <h2>MagickSearch</h2>
    </router-link>
    <div id='nav'>
      <ul class='nav-list'>
        <li class='nav-list-item'>
          <router-link class='nav-list-item-link' to='/'>Home</router-link>
        </li>
        <li class='nav-list-item'>
          <router-link class='nav-list-item-link' to='/about'>About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 10vh;
  padding-left: 1em;
  margin-bottom: 50px;

  &-brand {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #1b9c5c;
    }
  }
}

#nav {
  margin-right: 1em;
  height: 100%;

  .nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    height: 100%;

    &-item {
      margin-right: 0.5em;
      width: 5em;
      line-height: 3em;
      height: 100%;
      text-align: center;
      font-weight: 700;

      &-link {
        display: block;
        height: 100%;
        color: #fff;
        text-decoration: none;

        &:hover {
          // background-color: #1b9c5c;
          border-right: 1px solid #1b9c5c;
          border-left: 1px solid #1b9c5c;
          color: #1b9c5c;
        }
      }
    }
  }
}
</style>

