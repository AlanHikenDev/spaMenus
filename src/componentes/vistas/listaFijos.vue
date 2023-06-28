<template>
<div id="product" class="block-5 space-between-blocks">
    
	<div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Lista de archivos <span class="highlight"> QR </span></h1>
        <p class="block__paragraph mb-0">
           
        </p>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">URL</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Ver Descargar </th>
            </tr>
          </thead>
          <tbody>
            <tr>
				<td >1 </td>
				<td > https://digitalmenus.club/host/urlpdfviwer/waffleriafm </td>
				<td > Pdf de menu de caffeteria </td>
                <td >
                    <router-link class="btn btn-secondary" to="/host/urlpdfviwer/waffleriafm" >Ver </router-link>
				</td>
			</tr>
          </tbody>
        </table>
             
      </div>

    </div>
</div>
	
</template>

<script>
//import Factory from "../models/Factory";

export default {
  name: "example",
  components: {
		
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