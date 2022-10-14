<template>
  <div id="app">

    <nav id="nav" class="navbar navbar-light bg-light">
      <!-- Image and text -->
  <a class="navbar-brand" href="#">
    <img src="@/assets/logo.png" height="45" class="d-inline-block align-top" alt="" loading="lazy">
    Fitapp
  </a>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/signup">sign up</router-link> |

    </nav>
    <router-view/>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
