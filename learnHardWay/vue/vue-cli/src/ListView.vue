<template>
    <div id="what" class='monkey'>
        <p> {{selected}} </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                selected: 'haba haba'
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
