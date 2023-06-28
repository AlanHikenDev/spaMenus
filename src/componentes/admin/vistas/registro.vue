<template>
<div id="mis_menus" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Registro de usuarios </h1>
      </div>

      <div class="row h-100">
         <LoadingBar :loading="mostrar" :color="color" :size="height" ></LoadingBar>
        <div v-if="formularioShow" class="col-lg-6 h-100 block-28__form-side">
          <form onsubmit="submitContactForm(event)" class="contact-form text-center">
            <div class="contact-form__header mb-5">
              <h6 class="contact-form__title mb-3">Registre usuario </h6>
              <p class="contact-form__paragraph mb-0 mx-auto">
               Este modulo de carga permite al administrador registrar un nuevo local .
              </p>
            </div>
            <input type="text" v-model="user.name" class="contact-form__input" placeholder="Nombre">
            <input type="text" v-model="user.a_paterno" class="contact-form__input" placeholder="apellido paterno">
            <input type="text" v-model="user.a_materno" class="contact-form__input" placeholder="apellido materno">
            <input type="text" v-model="user.email" class="contact-form__input" placeholder="correo electronico">
            <select v-model="user.rol" class="custom-select contact-form__input_select">
                <option value="cliente">cliente</option>
                <option value="admin">administrador</option>
            </select>
            <input type="text" v-model="user.nombre" class="contact-form__input" placeholder="nombre del local o comercio">
            <input type="password" v-model="user.password" class="contact-form__input"  placeholder="Password">
            <button v-on:click="enviar" class="btn btn-primary w-100"> Registrar </button>
          </form>
        </div>
        <div v-if="mensajeShow" class="col-lg-6 col-xl-5 p-lg-5">
          <button  class="btn btn-primary w-100"> Registro exitoso </button>
        </div>
      </div>
      
    </div>
    
</div>
</template>
<script>
import Factory from "../../../models/Factory";
import LoadingBar from "../../../componentes/generales/Diamond.vue";

export default {
 name: "registrarcliente",
  data() { return { 
        User: Factory.user,
        user:{  name : null,
                email : null,
                password: null,
                a_paterno : null,
                a_materno: null,
                rol: null,
                nombre: null,  },
        color: '#0a1f44',
        height: '600px',
        mostrar :false,
        formularioShow:true,
        mensajeShow:false,
  }},
  components:{
    LoadingBar,
  },
	mounted() {
        //console.log(this.Contacto)

    },
    methods:{
        enviar(event) {
          this.mostrar = true;
          this.formularioShow = false; 
          event.preventDefault()  
          this.User.agregar( this.user).then( response => { 
             console.log(response);
             console.log('ok'); 
             this.mostrar = false;
             this.mensajeShow = true;

        },function(error) {
          console.log(error);
        });
        
        }, 
    },
  computed: {}  
};

</script>

<style >
    .contact-form__input_select {
        color: var(--text-primary);
        font-size: .90rem;
        padding: .20rem 1.4rem;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.1);
        background: rgba(0,0,0,0.01);
        width: 100%;
        margin-bottom: .87rem;
    }
</style>