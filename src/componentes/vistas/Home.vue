<template>
<div >
	<principal/>
	<precios />
</div>

</template>

<script>
//import Factory from "../models/Factory";
import precios from "../../componentes/homeComponets/precios.vue";
import principal from "../../componentes/homeComponets/principal.vue";
export default {
  name: "Home",
  components: {
		precios,
		principal,
	},
  data() { return { 
		
	}},
  mounted() {
		
	},
  methods:{
		
	},
	computed: {}
};
</script>

<style>
	
	
</style>

