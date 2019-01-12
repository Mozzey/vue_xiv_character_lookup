<template>
  <div id='app'>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import CharacterCard from './components/CharacterCard'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
