<template>
<div id="product" class="block-5 space-between-blocks">
    
	<div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">LA WAFFLERIA <span class="highlight"> FM </span></h1>
        <p class="block__paragraph mb-0">
           
        </p>
      </div>
      <div class="col-lg-12 col-xl-12 mx-auto text-center mb-2">
          <iframe src="https://docs.google.com/viewer?srcid=1R6oYuhTa7H5QM5Ta0QFxg7dLTtllyR8N&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="680px"></iframe>
        </div>

         <pdf src="http://site-menus.test/imagenes/waffm.pdf" :page="1">
            <template slot="loading">
            loading content here...
            </template>
        </pdf>
        
        <div v-if="isLoggedIn" class="row align-items-center flex-column-reverse flex-lg-row px-2">
        <!-- LEFT CONTENT -->
       
        <!-- IMAGE -->
        <div  class="col-lg-10 col-xl-10 mx-auto text-center mb-5">
          <h1 class="block__title mb-3">Imprima su codigo QR </h1>
          <qrcode-vue  :value="'https://digitalmenus.club/host/urlpdfviwer/waffleriafm'" :size="size" level="H" id="qrcode" renderAs="canvas"></qrcode-vue>
        </div>

        <div class="col-lg-10 col-xl-7 mx-auto text-center mb-5">  
        <button class="btn btn-secondary mx-lg-3" v-on:click="generateReport"> Imprimir </button>
         <!-- <router-link class="btn btn-secondary mx-lg-3" :to="{ name: 'updatemenu', params: { id: menu.id }}">Editar</router-link>-->
        </div>
        <!-- RIGHT CONTENT -->
        </div>  
    </div>
</div>
	
</template>

<script>
//import Factory from "../models/Factory";
import QrcodeVue from 'qrcode.vue';
import pdf from 'pdfvuer'
export default {
  name: "example",
  components: {
        QrcodeVue,
        pdf,
	},
  data() { return { 
		size: 300,
	}},
  mounted() {
		
	},
  methods:{
		generateReport () {
      //this.$refs.html2Pdf.generatePdf()
      var canvas = document.getElementById("qrcode").firstElementChild;
      let imagePath = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let alink =  document.createElement("a");
      alink.setAttribute('download', 'CodigoQr.png');
			alink.setAttribute('href', imagePath);
			alink.click();
			//var ctx = canvas.getContext("2d");
        }
	},
	computed: {
        isLoggedIn() {
            let token = localStorage.getItem('token');
            console.log("logeado: ",(token !== null && token.length > 0));
		    return token !== null && token.length > 0;
       },
    }
};
</script>

<style>
	
	
</style>
