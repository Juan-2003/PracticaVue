<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p id="intro">
      Dizfruta de todos los sabores y combinaciones posibles que tenemos para ti en la sección de "Pedidos"
    </p>

    <img id="pastel1" src="@/assets/pastel1.jpg">
    <img id="pastel2" src="@/assets/pastel2.jpg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>
<style>
#pastel1{
  float: left;
  width: 850px;
  margin-left: 100px;
}

#pastel2{
  float: right;
  width:850px;
  margin-right: 87px;
}

#intro{
  color: black;
  font-size: 20px;
  text-align: center;
}

</style>
