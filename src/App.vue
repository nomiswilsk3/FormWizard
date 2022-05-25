<template>
  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    color:#1a1a1a
  }
  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
  
  .row {
    display: flex;
    flex-wrap: nowrap;
    background-color: #ffffff;
  }
  .side-column {
    flex:27%;
    padding:20px;
  }
  .middle-column {
    flex:46%;
    padding:80px;
    background-color: #fafafa;
    justify-content: center;
    align-items: flex-start;
  }
  .color-black {
    color:#1a1a1a
  }
</style>
