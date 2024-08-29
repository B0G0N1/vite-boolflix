<script>
  import { store } from './store.js'; // Importa l'oggetto store dal file store.js
  import axios from 'axios'; // Importa axios per effettuare richieste HTTP
  
  import AppHeader from './components/AppHeader.vue'; // Importa il componente AppHeader
  import AppMain from './components/AppMain.vue'; // Importa il componente AppMain

export default {
    data() {
        return {
            store // Aggiunge lo store ai dati del componente
        };
    },
    components: {
        AppHeader, // Registra il componente AppHeader
        AppMain // Registra il componente AppMain
    },
    methods: {
        searchDatabase() {
            // Codifica la query per utilizzarla nell'URL
            const query = encodeURIComponent(store.searchFilm);
            // Costruisce l'URL per cercare i film
            const apiUrlMovies = store.searchApi.concat('/movie?api_key=', store.apiKey, '&query=', query);
            // Costruisce l'URL per cercare le serie TV
            const apiUrlShows = store.searchApi.concat('/tv?api_key=', store.apiKey, '&query=', query);

            // Esegue la richiesta per i film
            axios.get(apiUrlMovies)
                .then((result) => {
                    // Aggiorna la lista dei film nello store
                    store.filmList = result.data.results;
                    // Esegue la richiesta per le serie TV
                    return axios.get(apiUrlShows);
                })
                .then((result) => {
                    // Aggiunge i risultati delle serie TV alla lista dei film usando concat
                    store.filmList = store.filmList.concat(result.data.results);
                })
                .catch((error) => {
                    // In caso di errore, svuota la lista dei film
                    store.filmList = [];
                    console.error(error);
                });
        }
  },
  mounted() {
        // Esegue searchDatabase all'avvio del componente
        this.searchDatabase();
  }
}
</script>

<template>
  <AppHeader @search="searchDatabase" />
  <AppMain />
</template>

<style lang="scss">
  @use './styles/generals.scss'; // Importa gli stili generali dal file generals.scss
</style>