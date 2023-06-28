<template>
	<div>
<header class="hero container-fluid border-bottom">
  <!-- ===================================== menu logueado  -->
  <div v-if="isLoggedIn" > 
    <nav class="hero-nav container px-4 px-lg-0 mx-auto">
      <ul class="nav w-100 list-unstyled align-items-center p-0">
        <li class="hero-nav__item">
          <img class="hero-nav__logo" src="../../assets/imgs/logo.svg">
        </li>
        <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
          <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
            <li class="flex-grow-1">
              <ul class="nav nav--lg-side list-unstyled align-items-center p-0">
                <li class="hero-nav__item">
                   <a v-on:click="logout" class="hero__btn btn btn-primary mx-lg-3" href="#">Log out </a>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                   <router-link class="hero-nav__link" to="/admin/clientes/ver"  v-if="rol=='admin'">Clientes</router-link>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                  <router-link class="hero-nav__link" to="/admin/clientes/registrar"  v-if="rol=='admin'">Registrar</router-link>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                  <router-link class="hero-nav__link" to="/cliente/datos/updateUser" v-if="rol=='cliente'">Mi cuenta <i class="fas fa-cogs"></i></router-link>
                </li>
                 <li v-on:click="ocultar" class="hero-nav__item">
                   <router-link class="hero-nav__link" to="/cliente/menus/listar" v-if="rol=='cliente'">Mis menus</router-link>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                   <router-link class="hero-nav__link" to="/cliente/menus/fijos" v-if="rol=='cliente'">Estaticos</router-link>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                  <router-link class="hero-nav__link" to="/cliente/menus/registrar" v-if="rol=='cliente'">Nuevo</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <button onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            class="ft-menu__close-btn animated">
            <svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>
        <li class="d-lg-none flex-grow-1 d-flex flex-row-reverse hero-nav__item">
          <button onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            class="text-center px-2">
            <i class="fas fa-bars"></i>
          </button>
        </li>
      </ul>
      </nav> 
      </div>
<!-- ===================================== si no esta logeado publicas  -->
      <div v-else>
      <nav class="hero-nav container px-4 px-lg-0 mx-auto">
      <ul class="nav w-100 list-unstyled align-items-center p-0">
        <li class="hero-nav__item">
          <img class="hero-nav__logo" src="../../assets/imgs/logo.svg">
        </li>
        <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
          <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
            <li class="flex-grow-1">
              <ul class="nav nav--lg-side list-unstyled align-items-center p-0">
                <li v-on:click="ocultar" class="hero-nav__item">
                   <router-link class="hero-nav__link" to="/login">Login</router-link>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                   <router-link class="hero-nav__link" to="/contacto">Contacto</router-link>
                </li>
                <li v-on:click="ocultar" class="hero-nav__item">
                  <router-link class="hero-nav__link" to="/caracteristicas">Beneficios</router-link>
                </li>
                 <li v-on:click="ocultar" class="hero-nav__item">
                   <router-link class="hero-nav__link" to="/example">Ejemplo</router-link>
                </li>
                <li onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')" class="hero-nav__item">
                  <router-link class="hero-nav__link" to="/">Home</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <button onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            class="ft-menu__close-btn animated">
            <svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>
        <li class="d-lg-none flex-grow-1 d-flex flex-row-reverse hero-nav__item">
          <button onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            class="text-center px-2">
            <i class="fas fa-bars"></i>
          </button>
        </li>
      </ul>
       </nav>
      </div>
   
  </header>
  </div>
  </template>
<script>
  
export default {
  data() {return {
		rol:null
	}},
	mounted() {
		this.rol = localStorage.getItem('rol');
    //console.log(this.rol)
	},
    methods: {
    logout() {
			localStorage.clear();
			location.reload();
		},
    ir(url) {
			this.$router.push(url);
		},
    ocultar(){
      document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show');
    },
  },
  computed: {
		mostrarCabecera() {
			return this.$route.name !== 'Login';
		},
    isLoggedIn() {
      let token = localStorage.getItem('token');
      console.log("logeado: ",(token !== null && token.length > 0));
			return token !== null && token.length > 0;
    },
  },
}
</script>

<style >
.hero {
    margin-top: 8px;
}
</style>