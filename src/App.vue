<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    components: {
    },

    name: 'App',
    data() {
      return {};
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>
