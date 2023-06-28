<template>
<div id="mis_menus" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-12 col-xl-10 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Negocios Afiliados</h1>
        <p class="block__paragraph mb-0">
          Administrar los negocios afiliados de una manera comoda 
        </p>
      </div>
      <div class="col-lg-12 col-xl-12 mx-auto text-center mb-5">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre Responsable</th>
              <th scope="col">Nombre Local</th>
              <th scope="col">Nivel </th>
              <th scope="col">Correo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(u,index) in users" v-bind:key="index">
						<td >{{index+1}}</td>
						<td >{{u.name}} </td>
						<td >{{u.nombre}} </td>
            <td >{{u.rol}} </td>
            <td >{{u.email}} </td>
						<td >
							<button class="btn btn-primary" v-on:click="ver(u)"><i class="fa fa-eye"></i> Detalle y pagos </button>
							<button class="btn btn-warning" v-on:click="editar(u)"><i class="fa fa-edit"></i></button>
							<button class="btn btn-danger" v-on:click="borrar(u)"><i class="fa fa-trash"></i></button>
						</td>
					</tr>
          </tbody>
        </table>
      </div>
      <b-modal id="user-ver" size="lg"  :title="text_modal">
          <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">Cosa</pre>
          </b-card>
       </b-modal>

       <b-modal id="user-form" 
       :header-bg-variant="headerBgVariant"
       :body-text-variant="bodyTextVariant"
       :title="text_modal"  
        footer-text-variant="dark"
        ><div v-if="user">
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
            </div>
          <template #modal-footer="{ cancel }">
            <b>Esta seguro de actualizar datos</b>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="success" @click="actualizar()">
              Aceptar
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
              Cancelar
            </b-button>
          </template>
          <b-modal  id="spinerload" 
            body-bg-variant="dark"
            body-text-variant="light" 
            hide-header hide-footer
           >Espere un momento <b-spinner /> 
        </b-modal>
		  </b-modal>

    </div>
    
</div>
</template>
<script>
import Factory from "../../../models/Factory";
import LoadingBar from "../../../componentes/generales/Diamond.vue";
export default {
     data() { return { 
        User: Factory.user,
        user:{  name : null,
                email : null,
                password: null,
                a_paterno : null,
                a_materno: null,
                rol: null,
                nombre: null,  },
        users: [],
        show: true,
        userSelect: null,
        color: '#0a1f44',
        height: '600px',
        mostrar :false,
        formularioShow:true,
        mensajeShow:false,
        text_modal:'cambiar',
        headerBgVariant: 'dark',
        bodyTextVariant: 'dark',
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        BModal:{
          'okTitle': 'Aceptar'
        }
        
  }},
  components:{
    LoadingBar,
  },
	mounted() {

    this.User.listar({conditions:[],relations:[]}).then(response => {
			this.users = response;
		});
      

    },
    methods:{
       onReset(evt) {
        evt.preventDefault()
       },
        ver(u) {
          console.log(u);
          this.se_edita = true;
          this.user = u;
          this.text_modal = 'Informacion detallada del Usuario ' + u.nombre;
          this.$bvModal.show('user-ver');
         // this.user-ver.modal('show');
        },
        editar(u) {
          console.log(u);
          this.se_edita = true;
          this.user = u;
          this.text_modal = 'Editar Usuario ' + u.nombre;
          this.$bvModal.show('user-form');
        },
        actualizar(){
          this.$bvModal.show('spinerload');
         this.user.created_at = null;
         this.user.updated_at = null;
         this.User.actualizar( this.user).then( response => { 
                // this.users = response;
                this.$bvModal.hide('spinerload');
                this.$bvModal.hide('user-form');
                this.$alertify.success('Actualizacion correcta ');
		      });
        },
        nuevo() {
          this.se_edita = false;
          this.text_modal = 'Crear Usuario';
          this.userSelect = {
            name:null,
            password:null,
            nombre:null,
            a_paterno:null,
            a_materno:null,
            rol:'cliente',
          };
          this.$bvModal.show('user-form');
        },
        borrar(u) {
          console.log(u);
        },
    },
  computed: {}  
}
</script>