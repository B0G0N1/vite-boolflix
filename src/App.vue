<script>
  import { store } from './store.js'; // Importa l'oggetto store dal file store.js
  import axios from 'axios'; // Importa axios per effettuare richieste HTTP
  
  import AppHeader from './components/AppHeader.vue'; // Importa il componente AppHeader
  import AppMain from './components/AppMain.vue'; // Importa il componente AppMain
  
  export default {
    components: {
      AppHeader, // Registra il componente AppHeader
      AppMain // Registra il componente AppMain
    }
  }
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
  @use './styles/generals.scss'; // Importa gli stili generali dal file generals.scss
</style>