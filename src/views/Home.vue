<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyTable></MyTable>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyTable from '@/components/table.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,MyTable
  }
}
</script>
