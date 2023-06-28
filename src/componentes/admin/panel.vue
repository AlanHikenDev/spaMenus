<template>
<div id="mis_menus" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">panel de admin </h1>
        
      </div>

      <div class="row h-100">
        <div class="col-lg-6 h-100 block-28__form-side">
          
        </div>
        <div class="col-lg-6 col-xl-5 p-lg-5">

        </div>
      </div>
      
    </div>
    
</div>
</template>
<script>
import Factory from "../../../models/Factory";

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
        mostrar :false,
	}},
	mounted() {
        //console.log(this.Contacto)

    },
    methods:{
        enviar(event) {
          event.preventDefault()  
          this.User.agregar( this.user).then( response => { 
             console.log(response);
             console.log('ok'); 
             this.mostrar = false;  
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