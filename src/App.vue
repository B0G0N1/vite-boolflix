<script>
  import { store } from './store.js'; // Importa l'oggetto store dal file store.js
  import axios from 'axios'; // Importa axios per effettuare richieste HTTP
  
  import AppHeader from './components/AppHeader.vue'; // Importa il componente AppHeader
  import AppMain from './components/AppMain.vue'; // Importa il componente AppMain
  
export default {
        data() {
        return {
            store // Include lo store nei dati del componente
        };
    },
    components: {
      AppHeader, // Registra il componente AppHeader
      AppMain // Registra il componente AppMain
    },
    methods: {
    searchMovies() {
        store.filmList = [];
        const query = encodeURIComponent(store.searchFilm);
        const apiUrl = `${store.searchMovieApi}?api_key=${store.apiKey}&query=${query}`;
        const apiUrl2 = `${store.searchShowsApi}?api_key=${store.apiKey}&query=${query}`;

        axios.get(apiUrl)
            .then((result) => {
                store.filmList = result.data.results; // Aggiorna la lista dei film nello store
                return axios.get(apiUrl2);
            })
            .then((result) => {
                store.filmList = [...store.filmList, ...result.data.results]; // Unisce i risultati con lo spread operator
            })
            .catch((error) => {
                store.filmList = []; // In caso di errore, imposta una lista vuota
                console.error(error);
            });

        console.log(store.filmList);
        console.log(apiUrl2);
        console.log(apiUrl);
    }
}

  }
</script>

<template>
  <AppHeader @search="searchMovies" />
  <AppMain />
</template>

<style lang="scss">
  @use './styles/generals.scss'; // Importa gli stili generali dal file generals.scss
</style>