import axios from "axios";

let Api = axios.create({
  
  baseURL: "http://site-menus.test",
  //site de produccion 
  //baseURL: "https://site.digitalmenus.club",
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    },
    post: {
      "Content-Type": "application/json"
    }
  }
});

Api.defaults.withCredentials = true;

/**
 * https://github.com/axios/axios#interceptors
 *
 * Cachando las respuestas de Error
 */

Api.interceptors.response.use(
  response => response,
  function(error) {
    if (401 === error.response.status) {
      localStorage.clear();
      //alert("Su sesión ha expirado");
      location.reload();
    } else if (422 === error.response.status) {
     //alert(JSON.stringify(error.response.data.errors));
      return error.response.data.errors;
    } else if (500 === error.response.status) {
      //alert(JSON.stringify(error.message));
      return "JSON.stringify(error.message)";
    } else {
      return Promise.reject(error);
    }
  }
);

/*
 * Interceptor para request
 */
Api.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");
  if (!token || 0 === token.length) {
		delete config.headers.Authorization;
	} else {
		//console.log('existe un token',token);
		config.headers.Authorization = `Bearer ${token}`;
	}
  return config;
});


window.Api = Api;

export default Api;