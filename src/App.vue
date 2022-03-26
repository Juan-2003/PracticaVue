<template>
  <nav>
    <router-link to="/">Principal</router-link> |
    <router-link to="/about">Menu</router-link> |
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/Consulta">Consulta</router-link>

  

    
  </nav>
  <router-view/>
</template>

<style>
html{
  background: #ffffbd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ffffbd;
}

#hello{
  color: green;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ff637d;
  text-decoration: none;
}
</style>
