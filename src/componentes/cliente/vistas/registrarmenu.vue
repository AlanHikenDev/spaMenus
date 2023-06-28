<template>
<div id="mis_menus" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Registrar un menu nuevo</h1>
        <p class="block__paragraph mb-0">
           Esta seccion puede registrar nuevos menus que generen un codigo qr diferente, manteniendo los ya existentes.
        </p>
      </div>
      <div class="row h-100">
        <div class="col-lg-6 h-100 block-28__form-side">
          <form onsubmit="submitContactForm(event)" class="contact-form text-center">
            <div class="contact-form__header mb-5">
              <h6 class="contact-form__title mb-3">Subir un menu nuevo</h6>
              <p class="contact-form__paragraph mb-0 mx-auto">
                Seleccione una imagen para vincular a la url dinamica que aparece a continuacion 
              </p>
              <transition name="fade">
                  <p class="block__pre-title mb-2" v-if="errom">Porfavor complete los campos</p>
              </transition>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">https://digitalmenus.club/host/</span>
                </div>
                <input type="text" class="form-control" v-model="menu.url_dir" id="basic-url" disabled aria-describedby="basic-addon3">
            </div>
            <textarea v-model="menu.texto" class="contact-form__input" placeholder="Descripcion de del menu para identificacion"></textarea>
            <div class="input-group mb-3">
            <div class="custom-file">
                <input type="file" @change="GetImage" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">Seleccione archivo</label>
            </div>
            </div>
            <button v-on:click="enviar" class="btn btn-primary w-100"> Upload menu</button>
          </form>
        </div>
        <div class="col-lg-6 col-xl-5 p-lg-5">
          <img v-if="mostrar" class="w-100" :src="data_show">
        </div>
      </div>
    </div>
    
</div>
</template>
<script>
import Factory from "../../../models/Factory";

export default {
 name: "registrarmenu",
  data() { return { 
        Menu: Factory.menu,
        menu:{  user_id : 1,
                fotos : 'null',
                videos: 'null',
                texto : null,
                data_img: null,
                status: 'activo',
                url_dir: null,  },
        mostrar :false,
        data_show: null,
        errom:false,

	}},
	mounted() {
        //console.log(localStorage.getItem('nombre'))
        this.menu.fotos = localStorage.getItem('nombre');
        this.menu.user_id = localStorage.getItem('id');
        this.menu.url_dir = getRandomUrlDir(10);
    },
    methods:{
        enviar(event) {

          var formData = new FormData();
			    formData.append('fotos', this.menu.fotos);
			    formData.append('status', this.menu.status);
          formData.append('texto', this.menu.texto);
          formData.append('url_dir', this.menu.url_dir);
          formData.append('user_id', this.menu.user_id);
          formData.append('videos', this.menu.videos);
          formData.append('data_img', this.menu.data_img );
          
          event.preventDefault()  
          if (this.menu.texto !=null && this.menu.data_img !=null) {
          this.Menu.agregar( formData).then( response => { 
            //console.log(response);
            console.log('ok');
            this.mostrar = false;
            this.$router.push('/cliente/menus/listar');  
           });
        }else {
          this.errom =true;
        }
        },
        GetImage(e){
           let image = e.target.files[0]
           let reader = new FileReader();
           reader.readAsDataURL(image);
           reader.onload = e => {
               console.log(e)
              this.mostrar =true;
               this.data_show = e.target.result
               this.menu.data_img = image;
               
           }
        },
        
    },
  computed: {}  
};

var getRandomUrlDir = function (length) {
  var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
</script>
<style >
img_menu {
  max-width: 100%;
  height: auto;
}
</style>