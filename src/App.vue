<template>
  <div id="app">
    <customers-form />
  </div>
</template>

<script>
import CustomersForm from '@/components/CustomersForm';

export default {
  name: 'App',
  components: {
    CustomersForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303030;
  margin-top: 60px;
}
</style>
