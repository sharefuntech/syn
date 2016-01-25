<template>
  <div id="appTemp" class='monkey'>
    <h1>{{ msg }}</h1>
    <h2 class='msg'>{{ hello }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      hello: 'hello monkey'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.msg {
    color: red;
    font-size: 18px;
    font-style: italic;
}
</style>
