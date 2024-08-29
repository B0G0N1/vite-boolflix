<script>
// Importazione dello store Vuex e del componente MovieCard
import { store } from '../store';
import MovieCard from './MovieCard.vue';

export default {
    components: {
        // Registrazione del componente MovieCard per l'utilizzo nel template
        MovieCard
    },
    data() {
        return {
            // Assegna lo store Vuex ai dati del componente per l'accesso diretto
            store
        };
    },
    methods: {
        // Metodo per ottenere il codice del paese basato sulla lingua originale del film
        getCountryCode(language) {
            // Restituisce il codice del paese associato alla lingua o la lingua stessa se non presente
            return store.languageToCountry[language] || language;
        }
    }
};
</script>

<template>
    <!-- Contenitore principale per le schede dei film -->
    <div class="movie-card-container">
        <!-- Loop attraverso la lista dei film nello store -->
        <MovieCard
            v-for="film in store.filmList"
            :key="film.id"
            :film="film"
            :countryCode="getCountryCode(film.original_language)"
        />
    </div>
</template>

<style lang="scss">
.movie-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* Layout a griglia con 4 colonne */
    gap: 20px;  /* Spaziatura tra le colonne */
    padding: 20px;  /* Spaziatura interna al contenitore */
    background-color: #f4f4f4;  /* Colore di sfondo del contenitore */

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);  /* Layout a 3 colonne per schermi medi */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);  /* Layout a 2 colonne per schermi piccoli */
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;  /* Layout a 1 colonna per schermi molto piccoli */
    }
}
</style>