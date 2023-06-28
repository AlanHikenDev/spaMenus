<template>
  	<div id="product" class="block-5 space-between-blocks">
    <div class="container">
      <!-- HEADER -->
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Un Proceso facil con <span class="highlight">Las mejores Caracteristicas</span></h1>

      </div>
    
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="email">Correo electronico:</label>
          <input
            type="email"
            v-model="dataLogin.email"
            class="form-control"
            id="email"
          />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            v-model="dataLogin.password"
            class="form-control"
            id="password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <div class="d-flex justify-content-center">
        <button @click.prevent="showMsgOk" class="btn btn-primary ">
          Acceder
        </button>
        </div>
         <hr role="separator" aria-orientation="horizontal"  class="dropdown-divider">
          <div class="w-100"></div>
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
import Factory from '../../models/Factory';
export default {
  data() { return {
		Api: Factory.api,
    dataLogin: {
      username: null,
      password: null
    },
    errors: []
  };
  },
  mounted() {
		this.verificarLoginActivo();
	},
  methods: {
		prueba() {
			this.$store.commit('setuserrol','algo');
			console.log('el rol', this.$store.state.userrol);
		},
    login() {
      
			this.Api.get('/sanctum/csrf-cookie').then(() => {
				this.Api.post('/api/login',this.dataLogin).then(response => {
          if (response.email != null){
            this.errors= response;
          }else {
          localStorage.setItem('token', response.data.token);
                    localStorage.setItem('rol', response.data.user.rol);
                    localStorage.setItem('id', response.data.user.id);
                    localStorage.setItem('nombre', response.data.user.nombre);
					this.$store.commit('setuserrol',response.data.user.rol);
          location.reload();
          }
				});
			});
    },
    showMsgOk() {
      this.$bvModal.show('spinerload');
        this.Api.get('/sanctum/csrf-cookie').then(() => {
				this.Api.post('/api/login',this.dataLogin).then(response => {
          if (response.email != null){
            this.$bvModal.hide('spinerload');
            this.errors= response;
          }else {
          localStorage.setItem('token', response.data.token);
                    localStorage.setItem('rol', response.data.user.rol);
                    localStorage.setItem('id', response.data.user.id);
                    localStorage.setItem('nombre', response.data.user.nombre);
          this.$store.commit('setuserrol',response.data.user.rol);
          this.$bvModal.hide('spinerload');
          location.reload();
          }
				});
			});
      },
		verificarLoginActivo() {
			let token = localStorage.getItem('token');
			let rol = localStorage.getItem('rol');
			let roles = ['admin','cliente'];
			if(token !== null && token.length > 0 && roles.includes(rol)) {
				switch(rol) {
					case 'admin':this.$router.push('/admin/clientes/ver');break;
					case 'cliente':this.$router.push('/cliente/menus/listar');break;
				}
			}
		},
	}
};
</script>