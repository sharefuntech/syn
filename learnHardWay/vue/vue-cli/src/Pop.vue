<template>
  <div id="whatever" class='monkey'>
    <h1 class='msg'>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'get it laid!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.msg {
    color: gray;
    font-size: 48px;
}
</style>
