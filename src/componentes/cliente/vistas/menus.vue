<template>
  <div id="features" class="block-11 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="block__header col-lg-8 col-xl-7 mx-auto text-center">
        <p class="block__pre-title mb-2">GET MORE DETAILS</p>
        <h1 class="block__title mb-3">Mis menus <span class="highlight">Especiales</span></h1>
        <p class="block__paragraph mb-0">
          En esta seccion se muestran todos los menus que tengo registrados al hacer click en 
          uno me lleva a detalle y su codigo qr para su posterior impresion   
        </p>
      </div>
      <div class="row align-items-center justify-content-center flex-column-reverse flex-lg-row px-2">
        <LoadingBar :loading="mostrar" :color="color" :size="height" ></LoadingBar>
        <div class="col-lg-8 col-xl-12">
           
          <div class="row">
            
          <div  v-for="(item, index) in menus" :key="menu.id" class="col-md-4 mb-2-1rem">
              
              <div @click="verImagen(item)" class="card-1 card-1--selected text-center">
                <span class="card-1__symbol mx-auto mb-4">
                   <i class="fas fa-qrcode"></i>
                </span>
                <h3 class="card-1__title mb-2">Menu {{index+1}} </h3>
                <p class="card-1__paragraph">
                  {{item.texto}}
                  
                </p>
                <router-link class="btn btn-secondary btn-block" :to="{ name: 'host', params: { url_dir: item.url_dir }}">ver</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Factory from "../../../models/Factory";
import LoadingBar from "../../../componentes/generales/Diamond.vue";

export default {

    data() { return { 
        Menu: Factory.menu,
        menus: {},
        menu:{  user_id : null,
                fotos : 'null',
                videos: 'null',
                texto : null,
                data_img: 'null',
                status: 'activo'  },
        mostrar :true,
        color: '#0a1f44',
        height: '200px',
  }},
  components:{
    LoadingBar
  },
	mounted() {
  /**
	 * fields = ['id','created','cancelado']
	 * conditions = [[cancelado,0],['fecha_nac','>=','2000-10-10']] //
	 * extracond = ['order by id','limit 1'] // areglo de cosas extras
   *  let id_usr= this.menu.user_id = localStorage.getItem('id');
      this.Menu.select(['user_id', 'fotos','videos','texto','data_img','url_dir','status'],[['user_id','==',id_usr]],['order by id']).then( response =>{
           this.menus = response; 
      })
	 */
  //console.log(this.menu.user_id = localStorage.getItem('id'));
      this.menu.user_id = parseInt(localStorage.getItem('id'));
      this.Menu.listarporiduser(this.menu).then( response =>{
           this.menus = response; 
           this.mostrar = false;
      })
    },
    methods:{
      GetImage(e){
           let image = e.target.files[0]
           let reader = new FileReader();
           reader.readAsDataURL(image);
           reader.onload = e => {
              // console.log(e)
              this.mostrar =true;
               this.menu.data_img = e.target.result
           }
        },
        verImagen(objetoMenu)
        {
            console.log(objetoMenu.url_dir)
            //console.log( this.$route)
           //router.push({ path: `/host/${objetoMenu.url_dir}` })
           // router.push({ name: 'user', params: { userId: '123' } }) 
        }

    },
	computed: {}
}
</script>