
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

 //import $ from 'jquery';  

 import "jquery/dist/jquery.min.js" 
 import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.min.js"  



import './assets/main.css'

//$.fn.selectpicker.Constructor.BootstrapVersion = '5';  
/*  import { createPopper } from '@popperjs/core';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip, {
  placement: 'top',
});  */
const app = createApp(App)

app.use(router)

app.mount('#app')
