<template>
  <div id="app">
  <!-- use router-link component for navigation. -->
  <!-- specify the link by passing the `to` prop. -->
  <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <TheSide />
    
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  <TheFoot/>
  </div>
</template>

<script>
//import TheFooter from "@/componentes/generales/TheFooter.vue";
import TheSide from "./componentes/generales/Side-bar.vue";
import TheFoot from "./componentes/generales/footer.vue";
//src\componentes\generales\Sidebar.vue
export default {
  name: 'app',
  components: {
    TheSide,
    TheFoot,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
