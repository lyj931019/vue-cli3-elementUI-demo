<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyTable></MyTable>
    <el-button @click.once="test">test</el-button>
    <div @contextmenu.prevent="test">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur earum exercitationem non sequi! Ad, animi assumenda at autem doloribus explicabo hic magnam, obcaecati odit pariatur quisquam rem repellendus, totam velit.
    </div>
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
  },
  methods:{
      test(e){
          console.log(123)
      }
  }
}
</script>
