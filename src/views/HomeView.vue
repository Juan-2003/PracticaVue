<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="@/assets/logo.png">
    <div id="msj">
    <HelloWorld msg="¡Bienvenido a Pasteleria Sueño Pastelero!"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
#logo{
  width: 180px;
  position: relative;
}



</style>