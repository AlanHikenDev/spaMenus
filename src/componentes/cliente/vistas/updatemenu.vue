<template>
<div id="mis_menus" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3"> Actualizar menu </h1>
        <p class="block__paragraph mb-0">
           Esta seccion puede editar la imagen vinculada al codigo QR seleccionado.
        </p>
      </div>
      <div class="row h-100">
        <div class="col-lg-6 h-100 block-28__form-side">
          <form onsubmit="submitContactForm(event)" class="contact-form text-center">
            <div class="contact-form__header mb-5">
              <h6 class="contact-form__title mb-3">Actualizar menu </h6>
              <p class="contact-form__paragraph mb-0 mx-auto">
                Seleccione una imagen para vincular a la url dinamica que aparece a continuacion 
              </p>
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
        menu: null,
        mostrar :false,
        menuid: {
            menuidr: null,
        },
        data_show: null,

	}},
	mounted() {
        //console.log(localStorage.getItem('nombre'))
        this.menuid.menuidr = this.$route.params.id;
        //console.log(this.muenuId)
        this.Menu.buscarporId(this.menuid).then( response =>{
            this.menu = response; 
        })

    },
    methods:{
        enviar(event) {
          event.preventDefault()
          var formData = new FormData();
          formData.append('id', this.menu.id);
          formData.append('fotos', this.menu.fotos);
			    formData.append('status', this.menu.status);
          formData.append('texto', this.menu.texto);
          formData.append('url_dir', this.menu.url_dir);
          formData.append('user_id', this.menu.user_id);
          formData.append('videos', this.menu.videos);
          formData.append('data_img', this.menu.data_img );

          this.Menu.actulizarSoloImagen( formData).then( response => { 
            console.log(response);
            console.log('ok');
            this.mostrar = false;
            this.$router.push('/cliente/menus/listar');  
        });
        },
        GetImage(e){
           let image = e.target.files[0]
           let reader = new FileReader();
           reader.readAsDataURL(image);
           reader.onload = e => {
              // console.log(e)
              this.mostrar = true;
              this.menu.data_img = image;
              this.data_show =  e.target.result;
           }
        },
        
    },
  computed: {}  
};


</script>
<style >
img_menu {
  max-width: 100%;
  height: auto;
}
</style>