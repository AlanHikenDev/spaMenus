<template>
    <div id="product" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-10 col-xl-10 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Bienvenido a <span class="highlight"> {{menu.fotos }}</span></h1>
        <p class="block__paragraph mb-0">
           {{menu.texto}}
        </p>
      </div>
      <div class="row align-items-center flex-column-reverse flex-lg-row px-2">
        <!-- LEFT CONTENT -->
       
        <!-- IMAGE -->
        <div class="col-lg-10 col-xl-7 mx-auto text-center mb-5">
          <img id="myImg" v-on:click="mostrar" :src="menu.videos" class="w-75 ">
        </div>
        <!-- RIGHT CONTENT -->
      </div>
      <div id="myModal" class="modal">
          <span v-on:click="cerrarModal" class="close">&times;</span>
            <img class="modal-content" id="img01">
          <div id="caption"></div>
        </div>
      <div v-if="isLoggedIn" class="row align-items-center flex-column-reverse flex-lg-row px-2">
        <!-- LEFT CONTENT -->
       
        <!-- IMAGE -->
        <div v-if="menu.url_dir" class="col-lg-10 col-xl-7 mx-auto text-center mb-5">
          <h1 class="block__title mb-3">Imprima su codigo QR </h1>
          <qrcode-vue  :value="'https://digitalmenus.club/host/'+menu.url_dir" :size="size" level="H" id="qrcode" renderAs="canvas"></qrcode-vue>
        </div>

        <div class="col-lg-10 col-xl-7 mx-auto text-center mb-5">  
        <button class="btn btn-secondary mx-lg-3" v-on:click="generateReport"> Imprimir </button>
          <router-link class="btn btn-secondary mx-lg-3" :to="{ name: 'updatemenu', params: { id: menu.id }}">Editar</router-link>
        </div>
        
        <!-- RIGHT CONTENT -->
      </div>
    </div>
  </div>
</template>
<script>

import Factory from "../../models/Factory";
import QrcodeVue from 'qrcode.vue';

export default {
  name: "Home",
  components: {
      QrcodeVue,
	},
  data() { return {
        Menu: Factory.menu, 
        menu : {
          created_at: null,
          data_img: null,
          fotos: "soporte",
          id: 1,
          status: "activo",
          texto: "...",
          updated_at: null,
          url_dir: null,
          user_id: 2,
          videos: "null",
        } ,
        texto: null,
        size: 300,
        url: {
            url_buscar: null,
        },
        todos: [
        {title: 'todo 1', description: 'description 1'},
        {title: 'todo 2', description: 'description2'},
        {title: 'todo 3', description: 'description 3'},
        {title: 'todo 4', description: 'description 4'},
        {title: 'todo 5', description: 'description 5'}
      ]
	}},
  mounted() {
		//console.log(this.$route.params.url_dir)
        this.url.url_buscar = this.$route.params.url_dir;
        this.Menu.buscarporURl(this.url).then( response =>{
            this.menu = response; 
        })
	},
  methods:{
		 mostrar: function (event) {
      // `this` dentro de los métodos apunta a la instancia de Vue
      var modal = document.getElementById('myModal');
      var img = document.getElementById('myImg');
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      //img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.menu.videos;
        captionText.innerHTML = this.menu.texto;
      //}
      //var span = document.getElementsByClassName("close")[0];
    },
    cerrarModal: function (event){
      var modal = document.getElementById('myModal');
      modal.style.display = "none";
    },
    exportPDF() {
      var vm = this
      var columns = [
        {title: "Title", dataKey: "title"},
        {title: "Description", dataKey: "description"}
      ];
      var doc = new jsPDF('p', 'pt');
      doc.text('To Do List', 40, 40);
      doc.autoTable(columns, vm.todos, {
        margin: {top: 60},
      });
      doc.save('todos.pdf');
    },
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
img_menu {
  max-width: 100%;
  height: auto;
}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform: scale(0.1)} 
  to {transform: scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

</style>
