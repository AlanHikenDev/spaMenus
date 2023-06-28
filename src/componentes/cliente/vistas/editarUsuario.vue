<template>
<div id="mis_menus" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Editar Datos de mi cuenta</h1>
        <p class="block__paragraph mb-0">
           Puedes editar los datos de tu cuenta como contraseña y nombre del local o negocio los cambios Realizados no afectaran .
        </p>
      </div>
      <div class="row h-100">
         <div class="col-lg-6 col-xl-6 mx-auto text-center mb-5">
         <div v-if="user">
             
            <label >Nombre</label>
            <input type="text" v-model="user.name" class="contact-form__input" placeholder="Nombre">
            <label >Apellido Paterno</label>
            <input type="text" v-model="user.a_paterno" class="contact-form__input" placeholder="apellido paterno">
            <label >Apellido Materno</label>
            <input type="text" v-model="user.a_materno" class="contact-form__input" placeholder="apellido materno">
            <label >Correo Electronico</label>
            <input type="text" v-model="user.email" class="contact-form__input" placeholder="correo electronico">
            <label >Nombre del Negocio </label>
            <input type="text" v-model="user.nombre" class="contact-form__input" placeholder="nombre del local o comercio">
            <label >Contraseña  </label>
            <input type="password" v-model="user.password" class="contact-form__input" required  placeholder="Password">
             <div class="d-flex justify-content-center">
        <button @click.prevent="actualizar" class="btn btn-primary ">
          Acceder
        </button>
        </div>
        </div>
        <b-modal  id="spinerload" 
            body-bg-variant="dark"
            body-text-variant="light" 
            hide-header hide-footer
           >Espere un momento <b-spinner /> 
        </b-modal>
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
        User: Factory.user,
        user:{  name : null,
                email : null,
                password: null,
                a_paterno : null,
                a_materno: null,
                rol: null,
                nombre: null,  },
        mostrar :false,
        errom:false,

	}},
	mounted() {
        console.log(localStorage.getItem('id'))
        
        this.user.id = localStorage.getItem('id');  
        this.User.getbyId(this.user ).then(response => {
            console.log(response)
            this.user = response;
		});
    },
    methods:{
       
        actualizar(){
            this.$bvModal.show('spinerload');
         this.user.created_at = null;
         this.user.updated_at = null;
         this.user.rol ='cliente';
         this.User.actualizar( this.user).then( response => { 
                // this.users = response;
                this.$bvModal.hide('spinerload');
                this.$bvModal.hide('user-form');
                this.$alertify.success('Actualizacion correcta ');
		      });
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